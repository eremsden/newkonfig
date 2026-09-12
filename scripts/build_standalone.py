#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Generates a standalone, dependency-complete single-file index.html
that can run directly on GitHub Pages (root or /docs) or as a local file,
with relative paths to all image and vendor assets.
"""

import os
import re
import shutil

ROOT_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

def get_css():
    css_path = os.path.join(ROOT_DIR, "src", "styles.css")
    with open(css_path, "r", encoding="utf-8") as f:
        css = f.read()

    # Remove @import tailwindcss, @theme, @layer
    css = re.sub(r'@import\s+["\'][^"\']+["\'];?', '', css)
    css = re.sub(r'@theme\s*\{[^}]*\}', '', css)
    css = re.sub(r'@layer\s+base\s*\{[^}]*\}', '', css)

    base = """
/* Reset & Base */
*, *::before, *::after { box-sizing: border-box; }
html, body {
  margin: 0;
  padding: 0;
  min-height: 100%;
  background: #eef3f7;
  color: #243447;
  font-family: "Manrope", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  -webkit-tap-highlight-color: transparent;
}
button:not(:disabled), [role="button"]:not(:disabled) { cursor: pointer; }
.modal-btns { display: flex; gap: 10px; justify-content: center; margin-top: 15px; }
.btn-confirm { background: #27ae60; color: white; border: none; padding: 12px 24px; border-radius: 8px; cursor: pointer; font-weight: bold; font-size: 14px; transition: background 0.2s; }
.btn-confirm:hover { background: #219150; }
"""
    return base + "\n" + css.strip()

def get_js():
    js_path = os.path.join(ROOT_DIR, "public", "js", "app.js")
    with open(js_path, "r", encoding="utf-8") as f:
        js = f.read()

    # Ensure relative paths for all assets
    js = js.replace('"/img/', '"./img/')
    js = js.replace("'/img/", "'./img/")

    # Add auto-init at DOMContentLoaded / load
    auto_init = """
// Auto-initialize on load
if (document.readyState !== "loading") {
  if (typeof window.initDikonCatalog === "function") {
    window.initDikonCatalog();
  }
} else {
  document.addEventListener("DOMContentLoaded", function () {
    if (typeof window.initDikonCatalog === "function") {
      window.initDikonCatalog();
    }
  });
}
"""
    return js + "\n" + auto_init

def get_html_body():
    tsx_path = os.path.join(ROOT_DIR, "src", "routes", "index.tsx")
    with open(tsx_path, "r", encoding="utf-8") as f:
        tsx = f.read()

    # Extract the JSX from return ( <div id="dikon-app"> ... </div> );
    start_match = re.search(r'return\s*\(\s*(<div id="dikon-app">.*?\n\s*</div>\s*);?\s*\n\s*\);', tsx, re.DOTALL)
    if not start_match:
        raise ValueError("Could not find dikon-app container in index.tsx")

    jsx = start_match.group(1)

    # Convert JSX to standard HTML:
    # 1. className="..." -> class="..."
    html = re.sub(r'className=', 'class=', jsx)

    # 2. htmlFor="..." -> for="..."
    html = re.sub(r'htmlFor=', 'for=', html)

    # 3. defaultValue="..." -> value="..."
    html = re.sub(r'defaultValue=', 'value=', html)

    # 4. Remove React comments {/* ... */} -> <!-- ... -->
    html = re.sub(r'\{\s*/\*\s*(.*?)\s*\*/\s*\}', r'<!-- \1 -->', html)

    # 5. Handle React inline styles style={{ ... }}
    def repl_style(m):
        content = m.group(1)
        # e.g. fontSize: 18, fontWeight: 800, textAlign: "center"
        # marginTop: 16
        # color: "#718096"
        pairs = []
        # split by comma, handling potential quotes
        items = [x.strip() for x in content.split(',') if x.strip()]
        for item in items:
            if ':' not in item:
                continue
            k, v = item.split(':', 1)
            k = k.strip()
            v = v.strip().strip('"').strip("'")
            # camelCase to kebab-case
            kebab = re.sub(r'([A-Z])', r'-\1', k).lower()
            if v.isdigit():
                v = v + "px"
            pairs.append(f"{kebab}: {v}")
        return f'style="{"; ".join(pairs)}"'

    html = re.sub(r'style=\{\{([^}]+)\}\}', repl_style, html)

    # 6. Replace onClick handlers with standard HTML onclick handlers
    html = re.sub(r'onClick=\{\(\)\s*=>\s*window\.([a-zA-Z0-9_]+)\?\.\((.*?)\)\}', r'onclick="window.\1(\2)"', html)
    html = re.sub(r'onSubmit=\{\(e\)\s*=>\s*window\.([a-zA-Z0-9_]+)\?\.\(e\)\}', r'onsubmit="return window.\1(event)"', html)
    html = re.sub(r'onClick=\{\(e\)\s*=>\s*\{[^}]*window\.([a-zA-Z0-9_]+)\?\.\(\);?\s*\}\}', r'onclick="if(event.target===this)window.\1()"', html)

    # 7. Replace JSX dynamic maps if any (like wheels cards)
    wheels_jsx = """          {[
            ["Мебельная серия", "Для корпусной и офисной мебели"],
            ["Аппаратная и медицинская", "Тихий ход, гигиеничные материалы"],
            ["Транспортная серия", "Складская техника и тележки"],
            ["Термостойкая серия", "Печи, камеры, горячие цеха"],
            ["Большегрузная серия", "Высокая нагрузка на опору"],
            ["Пневматическая серия", "Неровный пол и улица"],
          ].map(([title, text]) => (
            <div class="card" key={title}>
              <h3>{title}</h3>
              <p class="lead">{text}</p>
            </div>
          ))}"""

    wheels_html = """          <div class="card">
            <h3>Мебельная серия</h3>
            <p class="lead">Для корпусной и офисной мебели</p>
          </div>
          <div class="card">
            <h3>Аппаратная и медицинская</h3>
            <p class="lead">Тихий ход, гигиеничные материалы</p>
          </div>
          <div class="card">
            <h3>Транспортная серия</h3>
            <p class="lead">Складская техника и тележки</p>
          </div>
          <div class="card">
            <h3>Термостойкая серия</h3>
            <p class="lead">Печи, камеры, горячие цеха</p>
          </div>
          <div class="card">
            <h3>Большегрузная серия</h3>
            <p class="lead">Высокая нагрузка на опору</p>
          </div>
          <div class="card">
            <h3>Пневматическая серия</h3>
            <p class="lead">Неровный пол и улица</p>
          </div>"""

    html = html.replace(wheels_jsx, wheels_html)

    # Replace <LogoMark /> with the SVG
    logo_svg = """<svg class="logo-mark" viewBox="0 0 36 36" aria-hidden="true">
      <circle cx="18" cy="18" r="14" fill="none" stroke="#29abe2" stroke-width="3.5" />
      <circle cx="18" cy="18" r="5.5" fill="#29abe2" />
    </svg>"""
    html = html.replace("<LogoMark />", logo_svg)

    # Replace TabIcon components
    tab_icons = {
        'd="M4 10 12 4l8 6v10H4z"': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 10 12 4l8 6v10H4z" stroke-linecap="round" stroke-linejoin="round"/></svg>',
        'd="M5 7h14M5 12h14M5 17h8"': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 7h14M5 12h14M5 17h8" stroke-linecap="round" stroke-linejoin="round"/></svg>',
        'd="M4 6h16v12H4zM4 10h16"': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 6h16v12H4zM4 10h16" stroke-linecap="round" stroke-linejoin="round"/></svg>',
        'd="M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h2v2h-2zM18 18h2v2h-2z"': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h2v2h-2zM18 18h2v2h-2z" stroke-linecap="round" stroke-linejoin="round"/></svg>',
        'd="M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4zm-8 8a8 8 0 0 1 16 0"': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4zm-8 8a8 8 0 0 1 16 0" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    }

    for d_attr, svg_code in tab_icons.items():
        html = re.sub(r'<TabIcon\s+' + re.escape(d_attr) + r'\s*/>', svg_code, html)

    # 8. Convert all absolute resource paths to relative (./img/, ./catalog.pdf, etc.)
    html = html.replace('src="/img/', 'src="./img/')
    html = html.replace('data-open-img="/img/', 'data-open-img="./img/')
    html = html.replace('href="/catalog.pdf"', 'href="./catalog.pdf"')

    # 9. Clean self-closing tags for HTML5 (<div /> -> <div></div>)
    html = html.replace('<div class="header-line" />', '<div class="header-line"></div>')
    html = html.replace('<div id="leads-list" class="leads-list" />', '<div id="leads-list" class="leads-list"></div>')
    html = html.replace('<div id="qr-box" />', '<div id="qr-box"></div>')
    html = html.replace('<div id="qr-url" />', '<div id="qr-url"></div>')
    html = html.replace('<div id="modal-img-slot" />', '<div id="modal-img-slot"></div>')
    html = html.replace('<div id="toast" class="toast" />', '<div id="toast" class="toast"></div>')
    html = html.replace('<span id="pdf-date" />', '<span id="pdf-date"></span>')
    html = html.replace('<select id="dimensions-select" />', '<select id="dimensions-select"></select>')
    html = html.replace('<select id="attach-a" />', '<select id="attach-a"></select>')
    html = html.replace('<select id="attach-b" />', '<select id="attach-b"></select>')

    return html

def build_standalone_html():
    css = get_css()
    js = get_js()
    body = get_html_body()

    html = f"""<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0">
  <title>Дикон — Цифровой каталог и конфигуратор газовых пружин SUSPA</title>
  <meta name="description" content="Интерактивный конфигуратор газовых пружин SUSPA, подбор артикула, скачивание чертежей и спецификаций в PDF, каталог продукции Dikon.">
  <link rel="icon" type="image/svg+xml" href="./favicon.svg">

  <!-- Шрифты -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;600;700;800&display=swap" rel="stylesheet">

  <!-- Библиотеки для PDF и QR: локально с фолбэком на CDN -->
  <script src="./vendor/html2canvas.min.js"></script>
  <script src="./vendor/jspdf.umd.min.js"></script>
  <script src="./vendor/qrcode.min.js"></script>
  <script>
    if (typeof html2canvas === 'undefined') {{
      document.write('<script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js"><\\/script>');
    }}
    if (typeof jspdf === 'undefined') {{
      document.write('<script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"><\\/script>');
    }}
    if (typeof QRCode === 'undefined') {{
      document.write('<script src="https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js"><\\/script>');
    }}
  </script>

  <style>
{css}
  </style>
</head>
<body>
{body}

<script>
{js}
</script>
</body>
</html>
"""
    return html

def main():
    html = build_standalone_html()

    # 1. Write /index.html (for GitHub Pages root deployment & local double-click)
    root_index = os.path.join(ROOT_DIR, "index.html")
    with open(root_index, "w", encoding="utf-8") as f:
        f.write(html)
    print(f"Generated {root_index} ({len(html)} bytes)")

    # 2. Write /docs/index.html (for user's current GitHub Pages settings: main /docs)
    docs_dir = os.path.join(ROOT_DIR, "docs")
    os.makedirs(docs_dir, exist_ok=True)
    docs_index = os.path.join(docs_dir, "index.html")
    with open(docs_index, "w", encoding="utf-8") as f:
        f.write(html)
    print(f"Generated {docs_index} ({len(html)} bytes)")

    # 3. Ensure img/, vendor/, catalog.pdf, favicon.svg exist at root level
    # (copied from public/ so that relative paths ./img/ work from root index.html)
    for folder in ["img", "vendor"]:
        src = os.path.join(ROOT_DIR, "public", folder)
        dst = os.path.join(ROOT_DIR, folder)
        if os.path.exists(src):
            if os.path.exists(dst):
                shutil.rmtree(dst)
            shutil.copytree(src, dst)
            print(f"Copied {folder} to root {dst}")

    for filename in ["catalog.pdf", "favicon.svg", "og.jpg"]:
        src = os.path.join(ROOT_DIR, "public", filename)
        dst = os.path.join(ROOT_DIR, filename)
        if os.path.exists(src):
            shutil.copy2(src, dst)
            print(f"Copied {filename} to root {dst}")

    # 4. Also copy img/, vendor/, catalog.pdf, favicon.svg to docs/
    # so that docs/index.html has its local assets right next to it!
    for folder in ["img", "vendor"]:
        src = os.path.join(ROOT_DIR, "public", folder)
        dst = os.path.join(docs_dir, folder)
        if os.path.exists(src):
            if os.path.exists(dst):
                shutil.rmtree(dst)
            shutil.copytree(src, dst)
            print(f"Copied {folder} to docs/ {dst}")

    for filename in ["catalog.pdf", "favicon.svg", "og.jpg"]:
        src = os.path.join(ROOT_DIR, "public", filename)
        dst = os.path.join(docs_dir, filename)
        if os.path.exists(src):
            shutil.copy2(src, dst)
            print(f"Copied {filename} to docs/ {dst}")

    # 5. Also create .nojekyll in root and docs to prevent GitHub Pages from ignoring files
    with open(os.path.join(ROOT_DIR, ".nojekyll"), "w") as f:
        f.write("")
    with open(os.path.join(docs_dir, ".nojekyll"), "w") as f:
        f.write("")
    print("Created .nojekyll in root and docs/")

if __name__ == "__main__":
    main()
