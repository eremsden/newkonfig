import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/")({ component: Home });

/* Весь сайт = HTML-разметка здесь + CSS в src/styles.css + JS в public/js/app.js
   В React вместо class пишется className — это то же самое. */

function loadScript(src: string) {
  return new Promise<void>((resolve, reject) => {
    const existing = document.querySelector(`script[data-src="${src}"]`);
    if (existing) {
      resolve();
      return;
    }
    const s = document.createElement("script");
    s.src = src;
    s.dataset.src = src;
    s.onload = () => resolve();
    s.onerror = () => reject(new Error("Не загрузился " + src));
    document.body.appendChild(s);
  });
}

function LogoMark() {
  return (
    <svg className="logo-mark" viewBox="0 0 36 36" aria-hidden="true">
      <circle cx="18" cy="18" r="14" fill="none" stroke="#29abe2" strokeWidth="3.5" />
      <circle cx="18" cy="18" r="5.5" fill="#29abe2" />
    </svg>
  );
}

function TabIcon({ d }: { d: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d={d} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Home() {
  useEffect(() => {
    let cancelled = false;
    let cleanup: undefined | (() => void);
    (async () => {
      await loadScript("/vendor/html2canvas.min.js");
      await loadScript("/vendor/jspdf.umd.min.js");
      await loadScript("/vendor/qrcode.min.js");
      await loadScript("/js/app.js");
      if (cancelled) return;
      const init = (window as unknown as { initDikonCatalog?: () => () => void })
        .initDikonCatalog;
      cleanup = init?.();
    })();
    return () => {
      cancelled = true;
      cleanup?.();
    };
  }, []);

  return (
    <div id="dikon-app">
      <header className="site-header">
        <button type="button" className="logo" data-page="home" aria-label="Dikon на главную">
          <LogoMark />
          <span>
            <span className="logo-word">
              Дик<span>о</span>н
            </span>
            <span className="logo-sub">цифровой каталог</span>
          </span>
        </button>
        <nav className="header-nav" aria-label="Разделы">
          <button type="button" className="nav-btn" data-page="home">
            Каталог
          </button>
          <button type="button" className="nav-btn" data-page="config">
            Конфигуратор
          </button>
          <button type="button" className="nav-btn" data-page="lead">
            Заявка
          </button>
          <button type="button" className="nav-btn" data-page="qr">
            QR
          </button>
          <button type="button" className="nav-btn" data-page="contacts">
            Контакты
          </button>
        </nav>
        <button type="button" className="header-cta" data-page="lead">
          Заявка
        </button>
      </header>

      {/* ===== ГЛАВНАЯ ===== */}
      <section id="page-home" className="page active">
        <div className="hero">
          <h1>Каталог Dikon на телефоне</h1>
          <p>
            Газовые пружины SUSPA, системы регулировки высоты, гидроприводы для медицины и
            колёса. Наведите камеру на QR — откроется этот каталог.
          </p>
          <div className="hero-actions">
            <button type="button" className="btn btn-primary" data-page="config">
              Конфигуратор пружин
            </button>
            <a className="btn btn-ghost" href="/catalog.pdf" download>
              Скачать PDF
            </a>
            <button type="button" className="btn btn-call" data-page="qr">
              QR для стенда
            </button>
          </div>
        </div>
        <div className="catalog-grid">
          <button type="button" className="cat-card" data-page="springs">
            <img src="/img/cards/springs.jpg" alt="Газовая пружина SUSPA" />
            <div className="body">
              <h3>Газовые пружины</h3>
              <p>5 серий, 40–2000 N, до 50 000 циклов. Подбор артикула в конфигураторе.</p>
              <span className="go">Открыть раздел</span>
            </div>
          </button>
          <button type="button" className="cat-card" data-page="lockable">
            <img src="/img/cards/lockable.jpg" alt="Блокируемая газовая пружина" />
            <div className="body">
              <h3>Блокируемые пружины</h3>
              <p>Varilock и VOB — фиксация штока в любом промежуточном положении.</p>
              <span className="go">Открыть раздел</span>
            </div>
          </button>
          <button type="button" className="cat-card" data-page="movotec">
            <img src="/img/cards/movotec.jpg" alt="Система Movotec" />
            <div className="body">
              <h3>Movotec</h3>
              <p>Гидравлическая регулировка высоты стола и оборудования. До 454 кг.</p>
              <span className="go">Открыть раздел</span>
            </div>
          </button>
          <button type="button" className="cat-card" data-page="varistand">
            <img src="/img/cards/varistand.jpg" alt="Колонна Varistand" />
            <div className="body">
              <h3>Varistand / Varibase</h3>
              <p>Пневматическая регулировка высоты одной ногой. Хром или чёрный.</p>
              <span className="go">Открыть раздел</span>
            </div>
          </button>
          <button type="button" className="cat-card" data-page="medical">
            <img src="/img/cards/medical.jpg" alt="Гидропривод для медицины" />
            <div className="body">
              <h3>Гидроприводы</h3>
              <p>Для кроватей, кушеток, носилок, капельниц и инструментальных столиков.</p>
              <span className="go">Открыть раздел</span>
            </div>
          </button>
          <button type="button" className="cat-card" data-page="wheels">
            <img src="/img/cards/wheels.jpg" alt="Колёса и опоры" />
            <div className="body">
              <h3>Колёса и опоры</h3>
              <p>Мебельные, медицинские, транспортные, термостойкие и большегрузные.</p>
              <span className="go">Открыть раздел</span>
            </div>
          </button>
        </div>
      </section>

      {/* ===== ГАЗОВЫЕ ПРУЖИНЫ ===== */}
      <section id="page-springs" className="page">
        <h2>Газовые пружины SUSPA</h2>
        <div className="header-line" />
        <p className="lead">
          Стандартная программа — 5 серий. Отличаются диаметрами трубки и штока и диапазоном
          силы F1. Не нуждаются в уходе, рассчитаны не менее чем на 50 000 циклов.
        </p>
        <div className="chip-row">
          <button type="button" className="chip" data-page="config">
            Собрать артикул
          </button>
          <span className="chip">Изготовление по ТУ заказчика</span>
        </div>
        <div className="stack">
          <table className="spec-table">
            <thead>
              <tr>
                <th>Серия</th>
                <th>Ø трубки</th>
                <th>Ø штока</th>
                <th>F1, N</th>
                <th>Макс. ход</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>16-12</td>
                <td>12 мм</td>
                <td>4 мм</td>
                <td>40–180</td>
                <td>150 мм</td>
              </tr>
              <tr>
                <td>16-1</td>
                <td>15 мм</td>
                <td>6 мм</td>
                <td>50–400</td>
                <td>150 мм</td>
              </tr>
              <tr>
                <td>16-2</td>
                <td>18 мм</td>
                <td>8 мм</td>
                <td>80–750</td>
                <td>250 мм</td>
              </tr>
              <tr>
                <td>16-4</td>
                <td>22 мм</td>
                <td>10 мм</td>
                <td>100–1200</td>
                <td>400 мм</td>
              </tr>
              <tr>
                <td>16-6</td>
                <td>28 мм</td>
                <td>14 мм</td>
                <td>200–2000</td>
                <td>500 мм</td>
              </tr>
            </tbody>
          </table>
          <img
            className="page-img"
            src="/img/pages/page-2.jpg"
            alt="Страница каталога: газовые пружины"
            data-open-img="/img/pages/page-2.jpg"
            data-open-title="Газовые пружины"
          />
        </div>
        <div className="footer-buttons">
          <button type="button" className="btn btn-primary" data-page="config">
            Открыть конфигуратор
          </button>
          <button type="button" className="btn btn-ghost" data-page="lead">
            Заявка на расчёт
          </button>
        </div>
      </section>

      {/* ===== КОНФИГУРАТОР ===== */}
      <section id="page-config" className="page">
        <h2>Конфигуратор газовых пружин Dikon</h2>
        <div className="header-line" />
        <div className="config-grid">
          <div className="center-params">
            <div className="params-row">
              <div>
                <label htmlFor="series">1. Серия:</label>
                <select id="series">
                  <option value="16-1">
                    16-1 (Ø трубки 15 мм, Ø штока 6 мм, макс. ход 150 мм, 50–400N)
                  </option>
                  <option value="16-2">
                    16-2 (Ø трубки 18.5 мм, Ø штока 8 мм, макс. ход 250 мм, 80–750N)
                  </option>
                  <option value="16-4">
                    16-4 (Ø трубки 22 мм, Ø штока 10 мм, макс. ход 495 мм, 100–1200N)
                  </option>
                  <option value="16-6">
                    16-6 (Ø трубки 28 мм, Ø штока 14 мм, макс. ход 500 мм, 200–2000N)
                  </option>
                </select>
              </div>
              <div>
                <label htmlFor="dimensions-select">2. Длина и ход:</label>
                <select id="dimensions-select" />
              </div>
              <div>
                <label htmlFor="connection">3. Соединение:</label>
                <select id="connection">
                  <option value="threaded">Резьбовое</option>
                  <option id="welded-opt" value="welded">
                    Сварное
                  </option>
                </select>
              </div>
              <div>
                <label htmlFor="force">4. Усилие (Н):</label>
                <input id="force" type="number" placeholder="250" step="10" />
                <span id="force-limits" className="limit-hint">
                  min --H - max --H
                </span>
              </div>
            </div>
          </div>

          <div className="center-visual">
            <div className="visual-area">
              <div className="main-zoom-hint" onClick={() => window.openMainDrawing?.()}>
                🔍 НАЖМИТЕ ДЛЯ УВЕЛИЧЕНИЯ
              </div>
              <img
                id="img-spring"
                src="/img/springs/16-1-threaded.png"
                className="spring-drawing"
                onClick={() => window.openMainDrawing?.()}
                title="Нажмите, чтобы приблизить"
                alt="Чертёж пружины"
              />
            </div>
          </div>

          <div className="side-a">
            <label>Сторона B (Шток):</label>
            <div className="tip-box" id="box-a">
              <div className="zoom-hint" onClick={() => window.openDetail?.("a")}>
                🔍 ПОКАЗАТЬ ЧЕРТЁЖ
              </div>
              <img
                id="img-a"
                src="/img/tips/none.png"
                className="tip-img"
                onClick={() => window.openDetail?.("a")}
                alt="Наконечник стороны B"
              />
              <select id="attach-a" />
            </div>
          </div>

          <div className="side-b">
            <label>Сторона А (Трубка):</label>
            <div className="tip-box" id="box-b">
              <div className="zoom-hint" onClick={() => window.openDetail?.("b")}>
                🔍 ПОКАЗАТЬ ЧЕРТЁЖ
              </div>
              <img
                id="img-b"
                src="/img/tips/none.png"
                className="tip-img"
                onClick={() => window.openDetail?.("b")}
                alt="Наконечник стороны A"
              />
              <select id="attach-b" />
            </div>
          </div>

          <div className="center-results">
            <div className="result-panel">
              <div id="calc-result" style={{ fontSize: 18, fontWeight: 800, textAlign: "center" }}>
                L1: -- мм
              </div>
              <div id="spec-info" style={{ fontSize: 12, color: "#718096", textAlign: "center" }} />
              <label style={{ textAlign: "center", marginTop: 10 }}>Артикул для заказа:</label>
              <div id="order-code" className="order-code-value">
                ---
              </div>
            </div>
          </div>
        </div>

        <div className="footer-buttons">
          <button id="save-btn" className="btn btn-save" type="button" onClick={() => window.copyArticle?.()}>
            СКОПИРОВАТЬ АРТИКУЛ
          </button>
          <button id="pdf-btn" type="button" className="btn btn-reset" onClick={() => window.downloadPDF?.()}>
            СКАЧАТЬ PDF
          </button>
          <button type="button" className="btn btn-primary" onClick={() => window.addToRequest?.()}>
            ОТПРАВИТЬ В ЗАЯВКУ
          </button>
        </div>
      </section>

      {/* ===== БЛОКИРУЕМЫЕ ===== */}
      <section id="page-lockable" className="page">
        <h2>Блокируемые газовые пружины</h2>
        <div className="header-line" />
        <p className="lead">
          Фиксация в любом промежуточном положении штока. Varilock — включение на штоке, VOB —
          включение на трубке.
        </p>
        <div className="two-col">
          <div className="stack">
            <table className="spec-table">
              <thead>
                <tr>
                  <th>Параметр</th>
                  <th>Значение</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Ø трубки</td>
                  <td>22 мм / 28 мм</td>
                </tr>
                <tr>
                  <td>Ø штока</td>
                  <td>10 мм</td>
                </tr>
                <tr>
                  <td>Ход штока</td>
                  <td>10–400 мм</td>
                </tr>
                <tr>
                  <td>F1</td>
                  <td>до 1000 N</td>
                </tr>
              </tbody>
            </table>
            <p className="lead">
              Для отключения блокировки: трос Боудена, кнопки, отключающий рычаг. Прямое и
              дистанционное управление.
            </p>
          </div>
          <img
            className="page-img"
            src="/img/pages/page-3.jpg"
            alt="Страница каталога: блокируемые пружины"
            data-open-img="/img/pages/page-3.jpg"
            data-open-title="Блокируемые газовые пружины"
          />
        </div>
        <div className="footer-buttons">
          <button type="button" className="btn btn-primary" data-page="lead" data-product="lockable">
            Заявка на Lockline
          </button>
        </div>
      </section>

      {/* ===== MOVOTEC ===== */}
      <section id="page-movotec" className="page">
        <h2>Movotec — гидравлическая регулировка высоты</h2>
        <div className="header-line" />
        <p className="lead">
          Для промышленного, офисного и медицинского оборудования. Активация рукояткой или
          редукторным электродвигателем.
        </p>
        <ul className="checks">
          <li>Элегантный дизайн и бесшумная работа</li>
          <li>Блокировка в любой позиции</li>
          <li>Постоянная сила независимо от позиции</li>
          <li>Проще и дешевле, чем Moveline</li>
        </ul>
        <div className="two-col">
          <table className="spec-table">
            <tbody>
              <tr>
                <td>Ход поршня</td>
                <td>155, 195, 300, 400 мм</td>
              </tr>
              <tr>
                <td>Длина в сжатом состоянии</td>
                <td>711 мм</td>
              </tr>
              <tr>
                <td>Длина в выдвинутом состоянии</td>
                <td>до 1111 мм</td>
              </tr>
              <tr>
                <td>Максимальная нагрузка</td>
                <td>до 454 кг</td>
              </tr>
              <tr>
                <td>Длина цилиндра A</td>
                <td>258,5–463,5 мм</td>
              </tr>
            </tbody>
          </table>
          <div className="card">
            <strong>В комплект входят</strong>
            <p className="lead" style={{ marginTop: 8 }}>
              Ручной или электрический привод, четыре подъемных цилиндра, четыре угловых
              элемента (ножки), две трубки 2,5 м и две трубки 3,0 м.
            </p>
            <img
              className="page-img"
              src="/img/pages/page-4.jpg"
              alt="Страница каталога Movotec"
              data-open-img="/img/pages/page-4.jpg"
              data-open-title="Movotec"
            />
          </div>
        </div>
        <div className="footer-buttons">
          <button type="button" className="btn btn-primary" data-page="lead" data-product="movotec">
            Заявка на Movotec
          </button>
        </div>
      </section>

      {/* ===== VARISTAND ===== */}
      <section id="page-varistand" className="page">
        <h2>Varistand / Varibase</h2>
        <div className="header-line" />
        <p className="lead">
          Пневматическая система SUSPA для регулировки высоты стола одной ногой. Кнопка или
          рычаг. Varistand — хром или чёрный.
        </p>
        <ul className="checks">
          <li>Бесшумная работа и элегантный вид</li>
          <li>Блокировка в любой позиции</li>
          <li>OverRide — подъём без отдельной активации</li>
        </ul>
        <table className="spec-table">
          <thead>
            <tr>
              <th>Параметр</th>
              <th>Varistand</th>
              <th>Varibase</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Ход штока max</td>
              <td>415 мм</td>
              <td>400 мм</td>
            </tr>
            <tr>
              <td>Длина сжатия min</td>
              <td>435 мм</td>
              <td>440 мм</td>
            </tr>
            <tr>
              <td>Длина выдвижения max</td>
              <td>1040 мм</td>
              <td>1040 мм</td>
            </tr>
            <tr>
              <td>Усилие</td>
              <td>120 N</td>
              <td>120 N</td>
            </tr>
            <tr>
              <td>Крепление к столешнице</td>
              <td>Фланцевый адаптер</td>
              <td>Фланцевый адаптер</td>
            </tr>
            <tr>
              <td>Крепление к пятилучию</td>
              <td>Фланец 3×M6</td>
              <td>Фланец 4×M6</td>
            </tr>
          </tbody>
        </table>
        <img
          className="page-img"
          src="/img/pages/page-5.jpg"
          alt="Страница каталога Varistand"
          data-open-img="/img/pages/page-5.jpg"
          data-open-title="Varistand / Varibase"
          style={{ marginTop: 16 }}
        />
        <div className="footer-buttons">
          <button type="button" className="btn btn-primary" data-page="lead" data-product="varistand">
            Заявка на Varistand
          </button>
        </div>
      </section>

      {/* ===== МЕДИЦИНА ===== */}
      <section id="page-medical" className="page">
        <h2>Гидроприводы для медицинской мебели</h2>
        <div className="header-line" />
        <p className="lead">
          Для больничных кроватей, массажных кушеток, носилок, косметического и медицинского
          оборудования.
        </p>
        <div className="product-list">
          <div className="product-item">
            <div className="dot">
              <LogoMark />
            </div>
            <div>
              <strong>Гидропривод общего назначения</strong>
              <span>Медицинские кровати и оборудование</span>
            </div>
          </div>
          <div className="product-item">
            <div className="dot">
              <LogoMark />
            </div>
            <div>
              <strong>Гидропривод для капельницы</strong>
              <span>Стойки и мобильные штативы</span>
            </div>
          </div>
          <div className="product-item">
            <div className="dot">
              <LogoMark />
            </div>
            <div>
              <strong>Инструментальные столики</strong>
              <span>Плавный подъём рабочей поверхности</span>
            </div>
          </div>
          <div className="product-item">
            <div className="dot">
              <LogoMark />
            </div>
            <div>
              <strong>Подъём спального места</strong>
              <span>Медицинские кровати</span>
            </div>
          </div>
          <div className="product-item">
            <div className="dot">
              <LogoMark />
            </div>
            <div>
              <strong>Подъёмник для носилок</strong>
              <span>Носилки и медицинские кровати</span>
            </div>
          </div>
        </div>
        <img
          className="page-img"
          src="/img/pages/page-6.jpg"
          alt="Страница каталога: гидроприводы"
          data-open-img="/img/pages/page-6.jpg"
          data-open-title="Гидроприводы"
          style={{ marginTop: 16 }}
        />
        <div className="footer-buttons">
          <button type="button" className="btn btn-primary" data-page="lead" data-product="medical">
            Заявка на гидропривод
          </button>
        </div>
      </section>

      {/* ===== КОЛЁСА ===== */}
      <section id="page-wheels" className="page">
        <h2>Колёса и колёсные опоры</h2>
        <div className="header-line" />
        <p className="lead">
          Италия, Германия, Турция и Китай. Для оборудования, медицинской мебели и аппаратуры.
        </p>
        <div className="catalog-grid">
          {[
            ["Мебельная серия", "Для корпусной и офисной мебели"],
            ["Аппаратная и медицинская", "Тихий ход, гигиеничные материалы"],
            ["Транспортная серия", "Складская техника и тележки"],
            ["Термостойкая серия", "Печи, камеры, горячие цеха"],
            ["Большегрузная серия", "Высокая нагрузка на опору"],
            ["Пневматическая серия", "Неровный пол и улица"],
          ].map(([title, text]) => (
            <div className="card" key={title}>
              <h3>{title}</h3>
              <p className="lead">{text}</p>
            </div>
          ))}
        </div>
        <img
          className="page-img"
          src="/img/pages/page-7.jpg"
          alt="Страница каталога: колёса"
          data-open-img="/img/pages/page-7.jpg"
          data-open-title="Колёса и опоры"
          style={{ marginTop: 16 }}
        />
        <div className="footer-buttons">
          <button type="button" className="btn btn-primary" data-page="lead" data-product="wheels">
            Заявка на колёса
          </button>
        </div>
      </section>

      {/* ===== КОНТАКТЫ ===== */}
      <section id="page-contacts" className="page">
        <h2>Контакты</h2>
        <div className="header-line" />
        <div className="office-grid">
          <div className="office">
            <h3>Офис в Москве</h3>
            <p>
              141044, городской округ Мытищи, д. Грибки, ул. Ангарская, стр. 40Б, пом. № 8-12
            </p>
            <p>
              <a href="tel:+78007071524">+7 800 707-15-24</a>
            </p>
            <p>
              <a href="tel:+79255050444">+7 925 505-04-44</a>
            </p>
            <p>
              <a href="mailto:moscow@dikon.ru">moscow@dikon.ru</a>
            </p>
            <p>
              <a href="https://wa.me/79255050444" target="_blank" rel="noreferrer">
                WhatsApp Москва
              </a>
            </p>
          </div>
          <div className="office">
            <h3>Офис в Санкт-Петербурге</h3>
            <p>193318, ул. Ворошилова, д. 2, лит. АБ, пом. 5Н, офис 511 (БЦ «Охта»)</p>
            <p>
              <a href="tel:+78123150635">+7 812 315-06-35</a>
            </p>
            <p>
              <a href="tel:+78125717310">+7 812 571-73-10</a>
            </p>
            <p>
              <a href="tel:+78123145641">+7 812 314-56-41</a>
            </p>
            <p>
              <a href="mailto:info@dikon.ru">info@dikon.ru</a>
            </p>
            <p>
              <a href="https://wa.me/78123150635" target="_blank" rel="noreferrer">
                WhatsApp Санкт-Петербург
              </a>
            </p>
          </div>
        </div>
        <p className="lead" style={{ marginTop: 16, textAlign: "center" }}>
          <a href="https://dikon.ru" target="_blank" rel="noreferrer">
            www.dikon.ru
          </a>
        </p>
        <img
          className="page-img"
          src="/img/pages/page-8.jpg"
          alt="Контакты Dikon"
          data-open-img="/img/pages/page-8.jpg"
          data-open-title="Контакты"
        />
      </section>

      {/* ===== ЗАЯВКА ===== */}
      <section id="page-lead" className="page">
        <h2>Оставить заявку</h2>
        <div className="header-line" />
        <p className="lead">Имя и телефон — обязательны. Менеджер напишет в тот же день выставки.</p>
        <form id="lead-form" className="card" onSubmit={(e) => window.saveLeadFromForm?.(e)}>
          <label htmlFor="lead-name">Имя</label>
          <input id="lead-name" name="name" autoComplete="name" required placeholder="Иван" />
          <label htmlFor="lead-phone">Телефон</label>
          <input id="lead-phone" name="phone" type="tel" autoComplete="tel" required placeholder="+7 9.." />
          <label htmlFor="lead-company">Компания</label>
          <input id="lead-company" name="company" placeholder="ООО «...»" />
          <label htmlFor="lead-product">Что интересно</label>
          <select id="lead-product" defaultValue="springs">
            <option value="springs">Газовые пружины</option>
            <option value="lockable">Блокируемые пружины</option>
            <option value="movotec">Movotec</option>
            <option value="varistand">Varistand / Varibase</option>
            <option value="medical">Гидроприводы</option>
            <option value="wheels">Колёса</option>
            <option value="config">Конфигуратор / артикул</option>
          </select>
          <label htmlFor="lead-message">Комментарий</label>
          <textarea id="lead-message" placeholder="Количество, срок, чертёж..." />
          <div className="footer-buttons" style={{ border: 0, marginTop: 8, paddingTop: 0 }}>
            <button className="btn btn-save" type="submit">
              Отправить заявку
            </button>
            <button type="button" className="btn btn-ghost" data-page="leads">
              Журнал стенда
            </button>
          </div>
        </form>
      </section>

      {/* ===== ЖУРНАЛ ЗАЯВОК ===== */}
      <section id="page-leads" className="page">
        <h2>
          Заявки стенда · <span id="leads-count">0</span>
        </h2>
        <div className="header-line" />
        <p className="lead">Хранятся только на этом телефоне / планшете. Выгрузите CSV в конце дня.</p>
        <div id="leads-list" className="leads-list" />
        <div className="footer-buttons">
          <button type="button" className="btn btn-primary" onClick={() => window.exportLeads?.()}>
            Скачать CSV
          </button>
          <button type="button" className="btn btn-ghost" onClick={() => window.clearLeads?.()}>
            Очистить
          </button>
        </div>
      </section>

      {/* ===== QR ===== */}
      <section id="page-qr" className="page">
        <h2>QR-код для выставки</h2>
        <div className="header-line" />
        <p className="lead">
          Распечатайте и повесьте у стойки, на визитках и на обложке бумажного каталога. Камера
          телефона откроет этот каталог.
        </p>
        <div className="qr-wrap">
          <div className="poster" id="qr-poster">
            <div className="logo" style={{ justifyContent: "center", marginBottom: 8 }}>
              <LogoMark />
              <span className="logo-word">
                Дик<span>о</span>н
              </span>
            </div>
            <p style={{ fontWeight: 800, margin: "0 0 8px" }}>Наведите камеру — каталог на телефоне</p>
            <div id="qr-box" />
            <div id="qr-url" />
            <p className="lead" style={{ marginTop: 8 }}>
              SUSPA · газовые пружины · Movotec · колёса
            </p>
          </div>
        </div>
        <div className="footer-buttons">
          <button type="button" className="btn btn-primary" onClick={() => window.downloadQR?.()}>
            Скачать PNG
          </button>
          <button type="button" className="btn btn-ghost" onClick={() => window.print()}>
            Печать плаката
          </button>
        </div>
      </section>

      <nav className="tabbar" aria-label="Нижнее меню">
        <button type="button" className="tab is-active" data-page="home">
          <TabIcon d="M4 10 12 4l8 6v10H4z" />
          Каталог
        </button>
        <button type="button" className="tab" data-page="config">
          <TabIcon d="M5 7h14M5 12h14M5 17h8" />
          Конфиг
        </button>
        <button type="button" className="tab" data-page="lead">
          <TabIcon d="M4 6h16v12H4zM4 10h16" />
          Заявка
        </button>
        <button type="button" className="tab" data-page="qr">
          <TabIcon d="M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h2v2h-2zM18 18h2v2h-2z" />
          QR
        </button>
        <button type="button" className="tab" data-page="contacts">
          <TabIcon d="M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4zm-8 8a8 8 0 0 1 16 0" />
          Контакты
        </button>
      </nav>

      {/* Скрытый шаблон PDF — как в вашем конфигураторе */}
      <div id="pdf-template" aria-hidden="true">
        <div
          style={{
            borderBottom: "3px solid #29abe2",
            paddingBottom: 10,
            marginBottom: 20,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div>
            <h1 style={{ margin: 0, fontSize: 24, color: "#2c3e50" }}>Техническая спецификация</h1>
            <p style={{ margin: "5px 0 0", color: "#7f8c8d", fontSize: 14 }}>
              Конфигуратор газовых пружин Dikon
            </p>
          </div>
          <div style={{ textAlign: "right", fontSize: 12, color: "#999" }}>
            Дата: <span id="pdf-date" />
          </div>
        </div>
        <div
          style={{
            background: "#f0f7fa",
            border: "1px solid #29abe2",
            borderRadius: 8,
            padding: 20,
            textAlign: "center",
            marginBottom: 30,
          }}
        >
          <div style={{ fontSize: 14, color: "#555", marginBottom: 5 }}>АРТИКУЛ ДЛЯ ЗАКАЗА:</div>
          <div id="pdf-article" style={{ fontSize: 28, fontWeight: 800, color: "#29abe2" }}>
            ---
          </div>
        </div>
        <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: 30 }}>
          <tbody>
            <tr>
              <td style={{ padding: 10, border: "1px solid #ddd" }}>Серия</td>
              <td style={{ padding: 10, border: "1px solid #ddd" }} id="pdf-series" />
            </tr>
            <tr>
              <td style={{ padding: 10, border: "1px solid #ddd" }}>Размеры (L / Ход)</td>
              <td style={{ padding: 10, border: "1px solid #ddd" }} id="pdf-dims" />
            </tr>
            <tr>
              <td style={{ padding: 10, border: "1px solid #ddd" }}>Усилие (F1)</td>
              <td style={{ padding: 10, border: "1px solid #ddd" }} id="pdf-force" />
            </tr>
            <tr>
              <td style={{ padding: 10, border: "1px solid #ddd" }}>Межцентровое расстояние (L1)</td>
              <td style={{ padding: 10, border: "1px solid #ddd" }} id="pdf-l1" />
            </tr>
            <tr>
              <td style={{ padding: 10, border: "1px solid #ddd" }}>Тип соединения</td>
              <td style={{ padding: 10, border: "1px solid #ddd" }} id="pdf-conn" />
            </tr>
          </tbody>
        </table>
        <h3>Схема пружины</h3>
        <img id="pdf-main-img" alt="" style={{ maxWidth: "100%", maxHeight: 200 }} />
        <div style={{ display: "flex", gap: 20, marginTop: 20 }}>
          <div style={{ width: "50%" }}>
            <h4>Сторона B (шток)</h4>
            <img id="pdf-img-rod" alt="" style={{ maxHeight: 100 }} />
            <p id="pdf-name-rod" style={{ fontSize: 12 }} />
          </div>
          <div style={{ width: "50%" }}>
            <h4>Сторона A (трубка)</h4>
            <img id="pdf-img-tube" alt="" style={{ maxHeight: 100 }} />
            <p id="pdf-name-tube" style={{ fontSize: 12 }} />
          </div>
        </div>
      </div>

      <div
        id="detailModal"
        className="modal"
        onClick={(e) => {
          if (e.target === e.currentTarget) window.closeModal?.();
        }}
      >
        <div className="modal-content">
          <h3 id="modal-title" style={{ marginTop: 0, color: "#2c3e50" }}>
            Чертёж
          </h3>
          <img id="modal-img" className="detail-img" alt="Чертёж" />
          <div id="modal-img-slot" />
          <div className="modal-btns">
            <button type="button" className="btn-confirm" onClick={() => window.closeModal?.()}>
              Закрыть
            </button>
          </div>
        </div>
      </div>
      <div id="toast" className="toast" />
    </div>
  );
}

declare global {
  interface Window {
    initDikonCatalog?: () => () => void;
    openMainDrawing?: () => void;
    openDetail?: (side: string) => void;
    closeModal?: () => void;
    addToRequest?: () => void;
    copyArticle?: () => void;
    downloadPDF?: () => void;
    saveLeadFromForm?: (e: { preventDefault: () => void }) => boolean;
    exportLeads?: () => void;
    clearLeads?: () => void;
    downloadQR?: () => void;
  }
}
