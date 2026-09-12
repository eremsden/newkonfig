/* =========================================================
   Цифровой стенд Dikon
   Обычный JavaScript, как в вашем конфигураторе.
   Функции конфигуратора сохранены: updateUI, calculateTotal,
   validateForce, downloadPDF, fillAttach и те же данные.
   ========================================================= */

(function () {
  "use strict";

  var LEADS_KEY = "dikon-exhibition-leads";
  var currentPage = "home";

  /* ---------- ДАННЫЕ КОНФИГУРАТОРА (ваш каталог) ---------- */
  var springCatalog = {
    threaded: {
      "16-1": [
        { l: 77.5, s: 20, t: 53.5, r: 24 },
        { l: 107, s: 35, t: 67, r: 40 },
        { l: 117.5, s: 40, t: 72.5, r: 45 },
        { l: 156.5, s: 60, t: 91.5, r: 65 },
        { l: 197, s: 80, t: 113, r: 84 },
        { l: 207, s: 85, t: 117, r: 90 },
        { l: 235, s: 100, t: 131, r: 104 },
        { l: 278, s: 120, t: 154, r: 124 },
        { l: 285, s: 120, t: 161, r: 124 },
        { l: 316, s: 135, t: 168, r: 148 },
        { l: 337.5, s: 150, t: 183.5, r: 154 },
      ],
      "16-2": [
        { l: 128, s: 40, t: 78, r: 50 },
        { l: 168, s: 57, t: 109, r: 59 },
        { l: 206, s: 80, t: 121, r: 85 },
        { l: 218, s: 85, t: 128, r: 90 },
        { l: 248, s: 100, t: 138, r: 110 },
        { l: 268, s: 105, t: 158, r: 110 },
        { l: 288, s: 120, t: 163, r: 125 },
        { l: 328, s: 140, t: 178, r: 150 },
        { l: 367, s: 160, t: 203, r: 164 },
        { l: 408, s: 180, t: 223, r: 185 },
        { l: 453, s: 195, t: 253, r: 200 },
        { l: 447.5, s: 200, t: 240, r: 207.5 },
        { l: 489, s: 220, t: 264, r: 225 },
        { l: 547.5, s: 250, t: 294, r: 253.5 },
      ],
      "16-4": [
        { l: 248, s: 98, t: 148, r: 100 },
        { l: 288, s: 120, t: 163, r: 125 },
        { l: 348, s: 148, t: 198, r: 150 },
        { l: 367, s: 150, t: 198, r: 169 },
        { l: 406, s: 168, t: 236, r: 170 },
        { l: 448, s: 198, t: 248, r: 200 },
        { l: 548, s: 248, t: 298, r: 250 },
        { l: 648, s: 295, t: 348, r: 300 },
        { l: 748, s: 345, t: 398, r: 350 },
        { l: 768, s: 345, t: 418, r: 350 },
        { l: 848, s: 395, t: 448, r: 400 },
        { l: 948, s: 445, t: 498, r: 450 },
        { l: 1048, s: 495, t: 548, r: 500 },
      ],
      "16-6": [
        { l: 218, s: 70, t: 118, r: 100 },
        { l: 268, s: 98, t: 168, r: 100 },
        { l: 368, s: 145, t: 218, r: 150 },
        { l: 468, s: 198, t: 268, r: 200 },
        { l: 568, s: 248, t: 318, r: 250 },
        { l: 668, s: 298, t: 368, r: 300 },
        { l: 768, s: 348, t: 418, r: 350 },
        { l: 874, s: 398, t: 474, r: 400 },
        { l: 963, s: 450, t: 508, r: 455 },
        { l: 1070, s: 500, t: 565, r: 505 },
      ],
    },
    welded: {
      "16-1": [
        { l: 106, s: 20, t: 57, r: 26, a: "A17", b: "B17" },
        { l: 146, s: 40, t: 78, r: 45, a: "A17", b: "B17" },
        { l: 160, s: 45, t: 86, r: 51, a: "A17", b: "B17" },
        { l: 179, s: 55, t: 96, r: 60, a: "A17", b: "B17" },
        { l: 186, s: 60, t: 96, r: 67, a: "A17", b: "B17" },
        { l: 224, s: 80, t: 111, r: 90, a: "A17", b: "B17" },
        { l: 264, s: 100, t: 131, r: 110, a: "A17", b: "B17" },
        { l: 306, s: 110, t: 168, r: 115, a: "A17", b: "B17" },
        { l: 305.5, s: 120, t: 157.5, r: 125, a: "A17", b: "B17" },
        { l: 366, s: 150, t: 189, r: 154, a: "A17", b: "B17" },
      ],
      "16-2": [
        { l: 206.5, s: 60, t: 108, r: 65, a: "A107", b: "B23" },
        { l: 246.5, s: 80, t: 128, r: 85, a: "A107", b: "B23" },
        { l: 256.5, s: 90, t: 128, r: 95, a: "A107", b: "B23" },
        { l: 286.5, s: 100, t: 143, r: 110, a: "A107", b: "B23" },
        { l: 316.5, s: 120, t: 158, r: 125, a: "A107", b: "B23" },
        { l: 326.5, s: 120, t: 168, r: 125, a: "A107", b: "B23" },
        { l: 354.5, s: 133, t: 183, r: 138, a: "A107", b: "B23" },
        { l: 364.5, s: 140, t: 186, r: 145, a: "A107", b: "B23" },
        { l: 407.5, s: 160, t: 201, r: 173, a: "A107", b: "B23" },
        { l: 444, s: 178, t: 229.5, r: 181, a: "A107", b: "B23" },
        { l: 485.5, s: 200, t: 240, r: 212, a: "A107", b: "B23" },
        { l: 525.5, s: 220, t: 267, r: 225, a: "A107", b: "B23" },
        { l: 586.5, s: 250, t: 291, r: 262, a: "A107", b: "B23" },
      ],
      "16-4": [
        { l: 283, s: 95, t: 153, r: 100, a: "A23", b: "B23" },
        { l: 383, s: 145, t: 203, r: 150, a: "A23", b: "B23" },
        { l: 483, s: 195, t: 253, r: 200, a: "A23", b: "B23" },
        { l: 586, s: 245, t: 294, r: 262, a: "A23", b: "B23" },
        { l: 683, s: 295, t: 353, r: 300, a: "A23", b: "B23" },
        { l: 783, s: 345, t: 403, r: 350, a: "A23", b: "B23" },
        { l: 883, s: 395, t: 453, r: 400, a: "A23", b: "B23" },
        { l: 983, s: 445, t: 503, r: 450, a: "A23", b: "B23" },
        { l: 1083, s: 495, t: 553, r: 500, a: "A23", b: "B23" },
      ],
      "16-6": [],
    },
  };

  var attachments = [
    // РЕЗЬБА - РАЗДЕЛЬНАЯ для каждой стороны
    // Для стороны B (шток) - левая колонка
    { id: "thread-16-1-b", name: "Без наконечника", dist: 0, series: ["16-1"], img: "/img/tips/thread-16-1-b.png", detail: "/img/tips/thread-16-1-b.png" },
    { id: "thread-16-2-b", name: "Без наконечника", dist: 0, series: ["16-2"], img: "/img/tips/thread-16-2-b.png", detail: "/img/tips/thread-16-2-b.png" },
    { id: "thread-16-4-b", name: "Без наконечника", dist: 0, series: ["16-4"], img: "/img/tips/thread-16-4-b.png", detail: "/img/tips/thread-16-4-b.png" },
    { id: "thread-16-6-b", name: "Без наконечника", dist: 0, series: ["16-6"], img: "/img/tips/thread-16-6-b.png", detail: "/img/tips/thread-16-6-b.png" },

    // Для стороны A (трубка) - правая колонка
    { id: "thread-16-1-a", name: "Без наконечника", dist: 0, series: ["16-1"], img: "/img/tips/thread-16-1-a.png", detail: "/img/tips/thread-16-1-a.png" },
    { id: "thread-16-2-a", name: "Без наконечника", dist: 0, series: ["16-2"], img: "/img/tips/thread-16-2-a.png", detail: "/img/tips/thread-16-2-a.png" },
    { id: "thread-16-4-a", name: "Без наконечника", dist: 0, series: ["16-4"], img: "/img/tips/thread-16-4-a.png", detail: "/img/tips/thread-16-4-a.png" },
    { id: "thread-16-6-a", name: "Без наконечника", dist: 0, series: ["16-6"], img: "/img/tips/thread-16-6-a.png", detail: "/img/tips/thread-16-6-a.png" },

    // ОБЩИЕ для обеих сторон (наконечники)
    { id: "A246-B246", name: "Шарнир Пластик M8", dist: 19, series: ["16-1", "16-2"], img: "/img/tips/A246-B246.png", detail: "/img/details/A246-detail.png" },
    { id: "A201-B201", name: "Шарнир Сталь M8", dist: 19, series: ["16-1", "16-2"], img: "/img/tips/A201-B201.png", detail: "/img/details/A201-detail.png" },
    { id: "A207-B207", name: "Шарнир Сталь M8", dist: 19, series: ["16-4", "16-6"], img: "/img/tips/A201-B201.png", detail: "/img/details/A201-detail.png" },
    { id: "A129-B129", name: "Шарнир Хром M8", dist: 30, series: ["16-4", "16-6"], img: "/img/tips/A129-B129.png", detail: "/img/details/A129-detail.png" },
    { id: "A199-B199", name: "Шарнир Хром M10", dist: 30, series: ["16-4", "16-6"], img: "/img/tips/A199-B199.png", detail: "/img/details/A199-detail.png" },
    { id: "A30-B30", name: "Проушина цинк Ø8.1", dist: 16, series: ["16-4", "16-6"], img: "/img/tips/A26-B26.png", detail: "/img/details/A26-detail.png" },
    { id: "A31-B31", name: "Проушина цинк Ø10.1", dist: 16, series: ["16-4", "16-6"], img: "/img/tips/A26-B26.png", detail: "/img/details/A26-detail.png" },
    { id: "A104-B104", name: "Проушина цинк Ø12", dist: 16, series: ["16-1", "16-2"], img: "/img/tips/A26-B26.png", detail: "/img/details/A26-detail.png" },
    { id: "A220-B220", name: "Проушина цинк Ø6.1", dist: 16, series: ["16-1", "16-2"], img: "/img/tips/A26-B26.png", detail: "/img/details/A26-detail.png" },
    { id: "A221-B221", name: "Проушина цинк Ø8.1", dist: 16, series: ["16-1", "16-2"], img: "/img/tips/A26-B26.png", detail: "/img/details/A26-detail.png" },
    { id: "A222-B222", name: "Проушина цинк Ø10.1", dist: 16, series: ["16-1", "16-2"], img: "/img/tips/A26-B26.png", detail: "/img/details/A26-detail.png" },
    { id: "A26-B26", name: "Проушина цинк Ø12", dist: 16, series: ["16-4", "16-6"], img: "/img/tips/A26-B26.png", detail: "/img/details/A26-detail.png" },
    { id: "A1-B1", name: "Проушина цинк Ø6.1 (28)", dist: 28, series: ["16-1", "16-2"], img: "/img/tips/A1-B1.png", detail: "/img/details/A1-detail.png" },
    { id: "A2-B2", name: "Проушина цинк Ø8.1 (28)", dist: 28, series: ["16-1", "16-2"], img: "/img/tips/A1-B1.png", detail: "/img/details/A1-detail.png" },
    { id: "A13-B13", name: "Проушина цинк Ø8.1 (28)", dist: 28, series: ["16-4", "16-6"], img: "/img/tips/A1-B1.png", detail: "/img/details/A1-detail.png" },
    { id: "A20-B20", name: "Проушина цинк Ø10.1 (22)", dist: 22, series: ["16-4", "16-6"], img: "/img/tips/A20-B20.png", detail: "/img/details/A20-detail.png" },
    { id: "A10-B10", name: "Проушина цинк Ø8.1 (13)", dist: 13, series: ["16-1", "16-2"], img: "/img/tips/A10-B10.png", detail: "/img/details/A10-detail.png" },
    { id: "A223-B223", name: "Проушина цинк Ø6.1 (13)", dist: 13, series: ["16-1", "16-2"], img: "/img/tips/A10-B10.png", detail: "/img/details/A10-detail.png" },
    { id: "A111-B111", name: "Проушина цинк Ø8.1 (22)", dist: 22, series: ["16-4", "16-6"], img: "/img/tips/A20-B20.png", detail: "/img/details/A20-detail.png" },
    { id: "A232-B232", name: "Вильчатая головка M6", dist: 24, series: ["16-1", "16-2"], img: "/img/tips/A232-B232.png", detail: "/img/details/A232-detail.png" },
    { id: "A412-B412", name: "Проушина пластик", dist: 16, series: ["16-4", "16-6"], img: "/img/tips/A412-B412.png", detail: "/img/details/A412-detail.png" },
    { id: "A21-B21", name: "Вильчатая головка M8", dist: 32, series: ["16-4", "16-6"], img: "/img/tips/A21-B21.png", detail: "/img/details/A21-detail.png" },
  ];

  var seriesLimits = {
    "16-1": { min: 50, max: 400, rod: 6, tube: 15, thread: "M6" },
    "16-2": { min: 80, max: 750, rod: 8, tube: 18.5, thread: "M6" },
    "16-4": { min: 100, max: 1200, rod: 10, tube: 22, thread: "M8" },
    "16-6": { min: 200, max: 2000, rod: 14, tube: 28, thread: "M8" },
  };

  /* ---------- УТИЛИТЫ ---------- */
  function $(id) {
    return document.getElementById(id);
  }

  function loadScript(src) {
    return new Promise(function (resolve, reject) {
      var s = document.createElement("script");
      s.src = src;
      s.onload = resolve;
      s.onerror = reject;
      document.head.appendChild(s);
    });
  }

  function toast(msg) {
    var t = $("toast");
    if (!t) return;
    t.textContent = msg;
    t.classList.add("show");
    clearTimeout(toast._t);
    toast._t = setTimeout(function () {
      t.classList.remove("show");
    }, 2800);
  }

  function catalogUrl() {
    return window.location.origin + window.location.pathname;
  }

  /* ---------- НАВИГАЦИЯ ПО СТРАНИЦАМ ---------- */
  function showPage(id) {
    if (!id) id = "home";
    var page = $("page-" + id);
    if (!page) id = "home";
    currentPage = id;
    document.querySelectorAll(".page").forEach(function (p) {
      p.classList.toggle("active", p.id === "page-" + id);
    });
    document.querySelectorAll("[data-page]").forEach(function (btn) {
      var on = btn.getAttribute("data-page") === id;
      btn.classList.toggle("is-active", on);
    });
    if (location.hash !== "#" + id) {
      history.replaceState(null, "", "#" + id);
    }
    window.scrollTo(0, 0);
    if (id === "qr") renderQR();
    if (id === "leads") renderLeads();
    if (id === "config") {
      updateUI();
    }
  }

  function showPageFromHash() {
    var id = (location.hash || "#home").replace("#", "");
    showPage(id);
  }

  /* ---------- КОНФИГУРАТОР: логика выбора и визуализации ---------- */
  function updateUI() {
    if (!$("series")) return;
    var series = $("series").value;
    var weldedOpt = $("welded-opt");
    var conn = $("connection").value;

    if (series === "16-6") {
      weldedOpt.disabled = true;
      if (conn === "welded") {
        $("connection").value = "threaded";
        conn = "threaded";
      }
    } else {
      weldedOpt.disabled = false;
    }

    var dimSel = $("dimensions-select");
    dimSel.innerHTML = "";
    var data = springCatalog[conn][series];
    if (data && data.length > 0) {
      data.forEach(function (p, idx) {
        dimSel.add(new Option("L: " + p.l + " мм (±2мм) / Ход: " + p.s + " мм", idx));
      });
    } else {
      dimSel.add(new Option("Нет доступных размеров", "0"));
    }

    var boxA = $("box-a");
    var boxB = $("box-b");
    var selA = $("attach-a");
    var selB = $("attach-b");

    if (conn === "welded") {
      boxA.classList.add("disabled");
      boxB.classList.add("disabled");
      selA.disabled = true;
      selB.disabled = true;
    } else {
      boxA.classList.remove("disabled");
      boxB.classList.remove("disabled");
      selA.disabled = false;
      selB.disabled = false;
      fillAttach("attach-a", series);
      fillAttach("attach-b", series);
    }

    var lim = seriesLimits[series];
    var forceInp = $("force");
    forceInp.min = lim.min;
    forceInp.max = lim.max;
    forceInp.placeholder = lim.min + " - " + lim.max;
    $("force-limits").innerText = "min " + lim.min + "H — max " + lim.max + "H";

    updateTipImages();
    validateForce();
    calculateTotal();
  }

  function fillAttach(id, series) {
    var sel = $(id);
    sel.innerHTML = "";

    var headerOption = document.createElement("option");
    headerOption.value = "";
    headerOption.text = "ПОДСОЕДИНЕНИЯ";
    headerOption.selected = true;
    sel.appendChild(headerOption);

    var separatorOption = document.createElement("option");
    separatorOption.value = "";
    separatorOption.text = "——————";
    separatorOption.disabled = true;
    sel.appendChild(separatorOption);

    var isLeftSide = id === "attach-a";

    attachments
      .filter(function (a) {
        if (a.series.indexOf(series) === -1) return false;
        if (a.id.indexOf("thread-") === 0) {
          return isLeftSide ? a.id.slice(-2) === "-b" : a.id.slice(-2) === "-a";
        }
        return true;
      })
      .forEach(function (a) {
        sel.add(new Option(a.name + " (+" + a.dist + "мм)", a.id + "|" + a.dist));
      });

    if (sel.options.length <= 2) {
      sel.add(new Option("Нет доступных наконечников", "none|0"));
    }
  }

  function isTipSelected(side) {
    var selectId = side === "a" ? "attach-a" : "attach-b";
    var el = $(selectId);
    if (!el || !el.value) return false;
    var val = el.value.split("|")[0];
    return val && val !== "" && val.indexOf("thread-") !== 0 && val !== "none";
  }

  function updateTipImages() {
    var series = $("series").value;
    var conn = $("connection").value;

    var springImg = $("img-spring");
    if (springImg) {
      springImg.src = "/img/springs/" + series + "-" + conn + ".png";
    }

    var imgA = $("img-a");
    var imgB = $("img-b");
    var zoomHintA = document.querySelector("#box-a .zoom-hint");
    var zoomHintB = document.querySelector("#box-b .zoom-hint");

    if (conn === "threaded") {
      var valAraw = $("attach-a") ? $("attach-a").value : "";
      var valBraw = $("attach-b") ? $("attach-b").value : "";

      var valA = valAraw ? valAraw.split("|")[0] : "";
      var valB = valBraw ? valBraw.split("|")[0] : "";

      var tipA = attachments.find(function (a) { return a.id === valA; });
      var tipB = attachments.find(function (a) { return a.id === valB; });

      if (imgA) imgA.src = valA && tipA ? tipA.img : "/img/tips/none.png";
      if (imgB) imgB.src = valB && tipB ? tipB.img : "/img/tips/none.png";

      if (zoomHintA) zoomHintA.style.display = isTipSelected("a") ? "block" : "none";
      if (zoomHintB) zoomHintB.style.display = isTipSelected("b") ? "block" : "none";
    } else {
      if (imgA) imgA.src = "/img/tips/welded-eye.png";
      if (imgB) imgB.src = "/img/tips/welded-eye.png";
      if (zoomHintA) zoomHintA.style.display = "none";
      if (zoomHintB) zoomHintB.style.display = "none";
    }
  }

  function openDetail(side) {
    var conn = $("connection").value;
    if (conn === "welded") {
      toast("Для сварного соединения нет детальных чертежей наконечников");
      return;
    }
    var selectId = side === "a" ? "attach-a" : "attach-b";
    var el = $(selectId);
    if (!el || !el.value) {
      toast("Сначала выберите наконечник");
      return;
    }
    var val = el.value.split("|")[0];
    var tip = attachments.find(function (a) { return a.id === val; });
    if (tip && tip.id !== "none" && tip.detail) {
      $("modal-title").innerText = "Чертёж наконечника: " + tip.name;
      var mImg = $("modal-img");
      mImg.src = tip.detail;
      mImg.style.display = "block";
      var slot = $("modal-img-slot");
      if (slot) slot.style.display = "none";
      $("detailModal").classList.add("open");
      $("detailModal").style.display = "flex";
    } else {
      toast("Для этого наконечника нет детального чертежа");
    }
  }

  function openMainDrawing() {
    var springImg = $("img-spring");
    var currentSrc = springImg ? springImg.src : "";
    $("modal-title").innerText = "Схема пружины";
    var mImg = $("modal-img");
    mImg.src = currentSrc;
    mImg.style.display = "block";
    var slot = $("modal-img-slot");
    if (slot) slot.style.display = "none";
    $("detailModal").classList.add("open");
    $("detailModal").style.display = "flex";
  }

  function openImage(src, title) {
    $("modal-title").innerText = title || "Каталог";
    $("modal-img").src = src;
    $("modal-img").style.display = "block";
    var slot = $("modal-img-slot");
    if (slot) slot.style.display = "none";
    $("detailModal").classList.add("open");
    $("detailModal").style.display = "flex";
  }

  function closeModal() {
    $("detailModal").classList.remove("open");
    $("detailModal").style.display = "none";
  }

  function validateForce() {
    var series = $("series").value;
    var lim = seriesLimits[series];
    var forceInp = $("force");
    var saveBtn = $("save-btn");
    var val = parseInt((forceInp.value || "").trim(), 10);
    var valid = true;

    if (isNaN(val) || val % 10 !== 0) {
      valid = false;
      forceInp.classList.add("error");
      saveBtn.disabled = true;
      $("force-limits").innerText = "Значение должно быть кратно 10";
    } else if (val < lim.min || val > lim.max) {
      valid = false;
      forceInp.classList.add("error");
      saveBtn.disabled = true;
      $("force-limits").innerText = "min " + lim.min + "H — max " + lim.max + "H";
    } else {
      forceInp.classList.remove("error");
      saveBtn.disabled = false;
      $("force-limits").innerText = "min " + lim.min + "H — max " + lim.max + "H";
    }
    calculateTotal();
    return valid;
  }

  function calculateTotal() {
    var series = $("series").value;
    var conn = $("connection").value;
    var dimIdx = $("dimensions-select").value;

    if (!springCatalog[conn] || !springCatalog[conn][series] || !springCatalog[conn][series][dimIdx]) {
      $("order-code").innerText = "---";
      $("calc-result").innerText = "L1: -- мм";
      return;
    }

    var p = springCatalog[conn][series][dimIdx];
    var force = $("force").value || "???";

    if (conn === "threaded") {
      var sideAraw = $("attach-b").value;
      var sideBraw = $("attach-a").value;
      if (!sideAraw || !sideBraw) {
        $("order-code").innerText = "---";
        $("calc-result").innerText = "Выберите наконечники";
        return;
      }
      var sideA = sideAraw.split("|");
      var sideB = sideBraw.split("|");
      var codeA =
        sideA[0] === "none" || sideA[0].indexOf("thread-") === 0
          ? "AM" + seriesLimits[series].thread.replace("M", "")
          : sideA[0].split("-")[0];
      var codeB =
        sideB[0] === "none" || sideB[0].indexOf("thread-") === 0
          ? "BM" + seriesLimits[series].thread.replace("M", "")
          : sideB[0].split("-")[1] || sideB[0].replace("A", "B");
      var l1 = p.l + (parseFloat(sideA[1]) || 0) + (parseFloat(sideB[1]) || 0);
      $("order-code").innerText = series + "-" + p.t + "-" + p.r + "-" + codeA + "-" + codeB + "-" + force + "N";
      var isBothPlain = sideA[0].indexOf("thread-") === 0 && sideB[0].indexOf("thread-") === 0;
      if (isBothPlain) {
        $("calc-result").innerText = "L (длина без учёта резьбы): " + p.l.toFixed(1) + " мм";
      } else {
        $("calc-result").innerText = "L1 (между осями): " + l1.toFixed(1) + " мм";
      }
    } else {
      $("order-code").innerText = series + "-" + p.t + "-" + p.r + "-" + p.a + "-" + p.b + "-" + force + "N";
      $("calc-result").innerText = "L1 (между осями): " + p.l.toFixed(1) + " мм";
    }
    $("spec-info").innerHTML =
      "Параметры: Шток Ø" + seriesLimits[series].rod + "мм / Трубка Ø" + seriesLimits[series].tube + "мм.";
  }

  function addToRequest() {
    if (!validateForce()) {
      toast("Введите корректное значение усилия");
      return;
    }
    calculateTotal();
    var code = $("order-code").innerText;
    if (!code || code === "---") {
      toast("Сначала выберите наконечники и усилие");
      return;
    }
    $("lead-product").value = "config";
    $("lead-message").value = "Артикул: " + code;
    showPage("lead");
    toast("Артикул перенесён в заявку");
  }

  function copyArticle() {
    var code = $("order-code").innerText;
    if (!code || code === "---") {
      toast("Нечего копировать — соберите артикул");
      return;
    }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(code).then(function () {
        toast("Артикул скопирован: " + code);
      });
    } else {
      toast(code);
    }
  }

  async function downloadPDF() {
    if (!validateForce()) {
      toast("Введите корректное усилие перед скачиванием PDF");
      return;
    }
    var article = $("order-code").innerText;
    var series = $("series").value;
    var dimsSelect = $("dimensions-select");
    var dimsText = dimsSelect.options[dimsSelect.selectedIndex].text;
    var force = $("force").value + " N";
    var l1 = $("calc-result").innerText;
    var sideAval = ($("attach-b").value || "").split("|")[0];
    var sideBval = ($("attach-a").value || "").split("|")[0];
    var isBothSidesPlain =
      (sideAval.indexOf("thread-") === 0 || sideAval === "none" || sideAval === "") &&
      (sideBval.indexOf("thread-") === 0 || sideBval === "none" || sideBval === "");
    if (isBothSidesPlain) l1 = "— (без наконечников)";
    var connType = $("connection").value === "threaded" ? "Резьбовое" : "Сварное";
    var nameRod = "Сварная проушина";
    var nameTube = "Сварная проушина";
    if ($("connection").value === "threaded") {
      var selRod = $("attach-a");
      var selTube = $("attach-b");
      nameRod = selRod.options[selRod.selectedIndex].text;
      nameTube = selTube.options[selTube.selectedIndex].text;
    }
    $("pdf-date").innerText = new Date().toLocaleDateString("ru-RU");
    $("pdf-article").innerText = article;
    $("pdf-series").innerText = series;
    $("pdf-dims").innerText = dimsText;
    $("pdf-force").innerText = force;
    $("pdf-l1").innerText = l1;
    $("pdf-conn").innerText = connType;
    $("pdf-name-rod").innerText = nameRod;
    $("pdf-name-tube").innerText = nameTube;
    var imgA = $("img-a");
    var imgB = $("img-b");
    var imgSpring = $("img-spring");
    if ($("pdf-img-rod")) $("pdf-img-rod").src = imgA ? imgA.src : "";
    if ($("pdf-img-tube")) $("pdf-img-tube").src = imgB ? imgB.src : "";
    if ($("pdf-main-img")) $("pdf-main-img").src = imgSpring ? imgSpring.src : "";

    if (!window.html2canvas) {
      try { await loadScript("/vendor/html2canvas.min.js"); } catch (e) {}
    }
    if (!window.jspdf) {
      try { await loadScript("/vendor/jspdf.umd.min.js"); } catch (e) {}
    }

    if (!window.html2canvas || !window.jspdf) {
      toast("Библиотека PDF ещё загружается, подождите секунду");
      return;
    }
    var btn = $("pdf-btn");
    var oldText = btn.innerText;
    btn.innerText = "ГЕНЕРАЦИЯ...";
    btn.disabled = true;
    try {
      var canvas = await window.html2canvas($("pdf-template"), {
        scale: 2,
        useCORS: true,
        logging: false,
        allowTaint: false,
      });
      var imgData = canvas.toDataURL("image/jpeg", 1.0);
      var pdf = new window.jspdf.jsPDF("p", "mm", "a4");
      var pdfWidth = pdf.internal.pageSize.getWidth();
      var pdfHeight = (canvas.height * pdfWidth) / canvas.width;
      pdf.addImage(imgData, "JPEG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("Dikon_GasSpring_" + article.replace(/\//g, "-") + ".pdf");
    } catch (err) {
      console.error(err);
      toast("Не удалось создать PDF. Попробуйте ещё раз.");
    } finally {
      btn.innerText = oldText;
      btn.disabled = false;
    }
  }

  /* ---------- ЗАЯВКИ (localStorage, для стенда) ---------- */
  function loadLeads() {
    try {
      return JSON.parse(localStorage.getItem(LEADS_KEY) || "[]");
    } catch (e) {
      return [];
    }
  }

  function saveLeadFromForm(ev) {
    if (ev) ev.preventDefault();
    var name = ($("lead-name").value || "").trim();
    var phone = ($("lead-phone").value || "").trim();
    var company = ($("lead-company").value || "").trim();
    var product = $("lead-product").value;
    var message = ($("lead-message").value || "").trim();
    if (!name || !phone) {
      toast("Укажите имя и телефон");
      return false;
    }
    var all = loadLeads();
    all.unshift({
      name: name,
      phone: phone,
      company: company,
      product: product,
      message: message,
      ts: Date.now(),
    });
    localStorage.setItem(LEADS_KEY, JSON.stringify(all));
    $("lead-form").reset();
    toast("Заявка сохранена. Менеджер свяжется с вами.");
    renderLeads();
    return false;
  }

  function productLabel(id) {
    var map = {
      springs: "Газовые пружины",
      lockable: "Блокируемые пружины",
      movotec: "Movotec",
      varistand: "Varistand / Varibase",
      medical: "Гидроприводы",
      wheels: "Колёса",
      config: "Конфигуратор",
    };
    return map[id] || id || "—";
  }

  function renderLeads() {
    var box = $("leads-list");
    if (!box) return;
    var all = loadLeads();
    $("leads-count").textContent = String(all.length);
    if (!all.length) {
      box.innerHTML = '<div class="empty">Заявок пока нет — посетители оставляют их с телефона.</div>';
      return;
    }
    box.innerHTML = all
      .map(function (l) {
        var when = new Date(l.ts).toLocaleString("ru-RU");
        return (
          '<div class="lead-item"><strong>' +
          escapeHtml(l.name) +
          "</strong> · " +
          escapeHtml(l.phone) +
          '<div class="meta">' +
          escapeHtml(l.company || "") +
          " · " +
          escapeHtml(productLabel(l.product)) +
          " · " +
          when +
          "</div>" +
          (l.message ? "<p>" + escapeHtml(l.message) + "</p>" : "") +
          "</div>"
        );
      })
      .join("");
  }

  function escapeHtml(s) {
    return String(s)
      .replace(/&/g, "&")
      .replace(/</g, "<")
      .replace(/>/g, ">");
  }

  function exportLeads() {
    var all = loadLeads();
    if (!all.length) {
      toast("Нечего выгружать");
      return;
    }
    var rows = [["Дата", "Имя", "Телефон", "Компания", "Интерес", "Комментарий"]]
      .concat(
        all.map(function (l) {
          return [
            new Date(l.ts).toLocaleString("ru-RU"),
            l.name,
            l.phone,
            l.company,
            productLabel(l.product),
            (l.message || "").replace(/\n/g, " "),
          ];
        })
      )
      .map(function (r) {
        return r
          .map(function (c) {
            return '"' + String(c).replace(/"/g, '""') + '"';
          })
          .join(";");
      })
      .join("\n");
    var blob = new Blob(["\ufeff" + rows], { type: "text/csv;charset=utf-8" });
    var a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "dikon-leads.csv";
    a.click();
  }

  function clearLeads() {
    if (!confirm("Удалить все заявки с этого устройства?")) return;
    localStorage.removeItem(LEADS_KEY);
    renderLeads();
    toast("Список очищен");
  }

  /* ---------- QR ---------- */
  function renderQR() {
    var box = $("qr-box");
    if (!box) return;
    box.innerHTML = "";
    var url = catalogUrl();
    $("qr-url").textContent = url;
    if (window.QRCode) {
      new window.QRCode(box, {
        text: url,
        width: 220,
        height: 220,
        colorDark: "#1b2a3a",
        colorLight: "#ffffff",
        correctLevel: window.QRCode.CorrectLevel.M,
      });
    } else {
      var img = document.createElement("img");
      img.alt = "QR-код каталога Dikon";
      img.width = 220;
      img.height = 220;
      img.src =
        "https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=" +
        encodeURIComponent(url);
      box.appendChild(img);
    }
  }

  function downloadQR() {
    var canvas = $("qr-box").querySelector("canvas");
    var img = $("qr-box").querySelector("img");
    var a = document.createElement("a");
    a.download = "dikon-catalog-qr.png";
    if (canvas) a.href = canvas.toDataURL("image/png");
    else if (img) a.href = img.src;
    else return;
    a.click();
  }

  /* ---------- INIT ---------- */
  var abort;

  function initDikonCatalog() {
    if (abort) abort.abort();
    abort = new AbortController();
    var sig = abort.signal;

    document.querySelectorAll("[data-page]").forEach(function (btn) {
      btn.addEventListener(
        "click",
        function () {
          var product = btn.getAttribute("data-product");
          if (product && $("lead-product")) $("lead-product").value = product;
          showPage(btn.getAttribute("data-page"));
        },
        { signal: sig }
      );
    });

    window.addEventListener("hashchange", showPageFromHash, { signal: sig });

    var series = $("series");
    if (series) {
      series.addEventListener("change", updateUI, { signal: sig });
      $("connection").addEventListener("change", updateUI, { signal: sig });
      $("dimensions-select").addEventListener("change", calculateTotal, { signal: sig });
      $("force").addEventListener("input", validateForce, { signal: sig });
      $("attach-a").addEventListener(
        "change",
        function () {
          updateTipImages();
          calculateTotal();
        },
        { signal: sig }
      );
      $("attach-b").addEventListener(
        "change",
        function () {
          updateTipImages();
          calculateTotal();
        },
        { signal: sig }
      );
    }

    document.querySelectorAll("[data-open-img]").forEach(function (el) {
      el.addEventListener(
        "click",
        function () {
          openImage(el.getAttribute("data-open-img"), el.getAttribute("data-open-title") || "");
        },
        { signal: sig }
      );
    });

    $("detailModal").addEventListener(
      "click",
      function (e) {
        if (e.target === this) closeModal();
      },
      { signal: sig }
    );

    showPageFromHash();
    if ($("series")) updateUI();
    renderLeads();

    return function () {
      abort.abort();
    };
  }

  window.initDikonCatalog = initDikonCatalog;
  window.showPage = showPage;
  window.updateUI = updateUI;
  window.validateForce = validateForce;
  window.calculateTotal = calculateTotal;
  window.openDetail = openDetail;
  window.openMainDrawing = openMainDrawing;
  window.closeModal = closeModal;
  window.downloadPDF = downloadPDF;
  window.addToRequest = addToRequest;
  window.copyArticle = copyArticle;
  window.saveLeadFromForm = saveLeadFromForm;
  window.exportLeads = exportLeads;
  window.clearLeads = clearLeads;
  window.downloadQR = downloadQR;
  window.openImage = openImage;
})();
