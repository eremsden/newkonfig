import { i as __toESM } from "../_runtime.mjs";
import { L as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-Bu94BuvT.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "/app/applet/src/routes/index.tsx?tsr-split=component";
function loadScript(src) {
	return new Promise((resolve, reject) => {
		if (document.querySelector(`script[data-src="${src}"]`)) {
			resolve();
			return;
		}
		const s = document.createElement("script");
		s.src = src;
		s.dataset.src = src;
		s.onload = () => resolve();
		s.onerror = () => reject(/* @__PURE__ */ new Error("Не загрузился " + src));
		document.body.appendChild(s);
	});
}
function LogoMark() {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", {
		className: "logo-mark",
		viewBox: "0 0 36 36",
		"aria-hidden": "true",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("circle", {
			cx: "18",
			cy: "18",
			r: "14",
			fill: "none",
			stroke: "#29abe2",
			strokeWidth: "3.5"
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 22,
			columnNumber: 7
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("circle", {
			cx: "18",
			cy: "18",
			r: "5.5",
			fill: "#29abe2"
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 23,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 21,
		columnNumber: 10
	}, this);
}
function TabIcon({ d }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", {
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: "2",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
			d,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 32,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 31,
		columnNumber: 10
	}, this);
}
function Home() {
	(0, import_react.useEffect)(() => {
		let cancelled = false;
		let cleanup;
		(async () => {
			await loadScript("/vendor/html2canvas.min.js");
			await loadScript("/vendor/jspdf.umd.min.js");
			await loadScript("/vendor/qrcode.min.js");
			await loadScript("/js/app.js");
			if (cancelled) return;
			const init = window.initDikonCatalog;
			cleanup = init?.();
		})();
		return () => {
			cancelled = true;
			cleanup?.();
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		id: "dikon-app",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", {
				className: "site-header",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
						type: "button",
						className: "logo",
						"data-page": "home",
						"aria-label": "Dikon на главную",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LogoMark, {}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 58,
							columnNumber: 11
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "logo-word",
							children: [
								"Дик",
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "о" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 61,
									columnNumber: 18
								}, this),
								"н"
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 60,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "logo-sub",
							children: "цифровой каталог"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 63,
							columnNumber: 13
						}, this)] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 59,
							columnNumber: 11
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 57,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", {
						className: "header-nav",
						"aria-label": "Разделы",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
								type: "button",
								className: "nav-btn",
								"data-page": "home",
								children: "Каталог"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 67,
								columnNumber: 11
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
								type: "button",
								className: "nav-btn",
								"data-page": "config",
								children: "Конфигуратор"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 70,
								columnNumber: 11
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
								type: "button",
								className: "nav-btn",
								"data-page": "lead",
								children: "Заявка"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 73,
								columnNumber: 11
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
								type: "button",
								className: "nav-btn",
								"data-page": "qr",
								children: "QR"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 76,
								columnNumber: 11
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
								type: "button",
								className: "nav-btn",
								"data-page": "contacts",
								children: "Контакты"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 79,
								columnNumber: 11
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 66,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
						type: "button",
						className: "header-cta",
						"data-page": "lead",
						children: "Заявка"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 83,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 56,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
				id: "page-home",
				className: "page active",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "hero",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: "Каталог Dikon на телефоне" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 91,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Газовые пружины SUSPA, системы регулировки высоты, гидроприводы для медицины и колёса. Наведите камеру на QR — откроется этот каталог." }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 92,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "hero-actions",
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
									type: "button",
									className: "btn btn-primary",
									"data-page": "config",
									children: "Конфигуратор пружин"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 97,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
									className: "btn btn-ghost",
									href: "/catalog.pdf",
									download: true,
									children: "Скачать PDF"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 100,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
									type: "button",
									className: "btn btn-call",
									"data-page": "qr",
									children: "QR для стенда"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 103,
									columnNumber: 13
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 96,
							columnNumber: 11
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 90,
					columnNumber: 9
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "catalog-grid",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
							type: "button",
							className: "cat-card",
							"data-page": "springs",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
								src: "/img/cards/springs.jpg",
								alt: "Газовая пружина SUSPA"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 110,
								columnNumber: 13
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "body",
								children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { children: "Газовые пружины" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 112,
										columnNumber: 15
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "5 серий, 40–2000 N, до 50 000 циклов. Подбор артикула в конфигураторе." }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 113,
										columnNumber: 15
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "go",
										children: "Открыть раздел"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 114,
										columnNumber: 15
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 111,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 109,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
							type: "button",
							className: "cat-card",
							"data-page": "lockable",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
								src: "/img/cards/lockable.jpg",
								alt: "Блокируемая газовая пружина"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 118,
								columnNumber: 13
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "body",
								children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { children: "Блокируемые пружины" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 120,
										columnNumber: 15
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Varilock и VOB — фиксация штока в любом промежуточном положении." }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 121,
										columnNumber: 15
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "go",
										children: "Открыть раздел"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 122,
										columnNumber: 15
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 119,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 117,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
							type: "button",
							className: "cat-card",
							"data-page": "movotec",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
								src: "/img/cards/movotec.jpg",
								alt: "Система Movotec"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 126,
								columnNumber: 13
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "body",
								children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { children: "Movotec" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 128,
										columnNumber: 15
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Гидравлическая регулировка высоты стола и оборудования. До 454 кг." }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 129,
										columnNumber: 15
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "go",
										children: "Открыть раздел"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 130,
										columnNumber: 15
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 127,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 125,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
							type: "button",
							className: "cat-card",
							"data-page": "varistand",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
								src: "/img/cards/varistand.jpg",
								alt: "Колонна Varistand"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 134,
								columnNumber: 13
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "body",
								children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { children: "Varistand / Varibase" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 136,
										columnNumber: 15
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Пневматическая регулировка высоты одной ногой. Хром или чёрный." }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 137,
										columnNumber: 15
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "go",
										children: "Открыть раздел"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 138,
										columnNumber: 15
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 135,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 133,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
							type: "button",
							className: "cat-card",
							"data-page": "medical",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
								src: "/img/cards/medical.jpg",
								alt: "Гидропривод для медицины"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 142,
								columnNumber: 13
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "body",
								children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { children: "Гидроприводы" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 144,
										columnNumber: 15
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Для кроватей, кушеток, носилок, капельниц и инструментальных столиков." }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 145,
										columnNumber: 15
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "go",
										children: "Открыть раздел"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 146,
										columnNumber: 15
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 143,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 141,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
							type: "button",
							className: "cat-card",
							"data-page": "wheels",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
								src: "/img/cards/wheels.jpg",
								alt: "Колёса и опоры"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 150,
								columnNumber: 13
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "body",
								children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { children: "Колёса и опоры" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 152,
										columnNumber: 15
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Мебельные, медицинские, транспортные, термостойкие и большегрузные." }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 153,
										columnNumber: 15
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "go",
										children: "Открыть раздел"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 154,
										columnNumber: 15
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 151,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 149,
							columnNumber: 11
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 108,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 89,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
				id: "page-springs",
				className: "page",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { children: "Газовые пружины SUSPA" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 162,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "header-line" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 163,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "lead",
						children: "Стандартная программа — 5 серий. Отличаются диаметрами трубки и штока и диапазоном силы F1. Не нуждаются в уходе, рассчитаны не менее чем на 50 000 циклов."
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 164,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "chip-row",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
							type: "button",
							className: "chip",
							"data-page": "config",
							children: "Собрать артикул"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 169,
							columnNumber: 11
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "chip",
							children: "Изготовление по ТУ заказчика"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 172,
							columnNumber: 11
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 168,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "stack",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("table", {
							className: "spec-table",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("thead", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { children: "Серия" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 178,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { children: "Ø трубки" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 179,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { children: "Ø штока" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 180,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { children: "F1, N" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 181,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { children: "Макс. ход" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 182,
									columnNumber: 17
								}, this)
							] }, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 177,
								columnNumber: 15
							}, this) }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 176,
								columnNumber: 13
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tbody", { children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { children: "16-12" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 187,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { children: "12 мм" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 188,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { children: "4 мм" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 189,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { children: "40–180" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 190,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { children: "150 мм" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 191,
										columnNumber: 17
									}, this)
								] }, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 186,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { children: "16-1" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 194,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { children: "15 мм" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 195,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { children: "6 мм" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 196,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { children: "50–400" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 197,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { children: "150 мм" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 198,
										columnNumber: 17
									}, this)
								] }, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 193,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { children: "16-2" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 201,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { children: "18 мм" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 202,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { children: "8 мм" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 203,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { children: "80–750" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 204,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { children: "250 мм" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 205,
										columnNumber: 17
									}, this)
								] }, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 200,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { children: "16-4" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 208,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { children: "22 мм" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 209,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { children: "10 мм" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 210,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { children: "100–1200" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 211,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { children: "400 мм" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 212,
										columnNumber: 17
									}, this)
								] }, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 207,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { children: "16-6" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 215,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { children: "28 мм" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 216,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { children: "14 мм" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 217,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { children: "200–2000" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 218,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { children: "500 мм" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 219,
										columnNumber: 17
									}, this)
								] }, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 214,
									columnNumber: 15
								}, this)
							] }, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 185,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 175,
							columnNumber: 11
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
							className: "page-img",
							src: "/img/pages/page-2.jpg",
							alt: "Страница каталога: газовые пружины",
							"data-open-img": "/img/pages/page-2.jpg",
							"data-open-title": "Газовые пружины"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 223,
							columnNumber: 11
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 174,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "footer-buttons",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
							type: "button",
							className: "btn btn-primary",
							"data-page": "config",
							children: "Открыть конфигуратор"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 226,
							columnNumber: 11
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
							type: "button",
							className: "btn btn-ghost",
							"data-page": "lead",
							children: "Заявка на расчёт"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 229,
							columnNumber: 11
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 225,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 161,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
				id: "page-config",
				className: "page",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { children: "Конфигуратор газовых пружин Dikon" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 237,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "header-line" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 238,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "config-grid",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "center-params",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "params-row",
									children: [
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
											htmlFor: "series",
											children: "1. Серия:"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 243,
											columnNumber: 17
										}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", {
											id: "series",
											children: [
												/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", {
													value: "16-1",
													children: "16-1 (Ø трубки 15 мм, Ø штока 6 мм, макс. ход 150 мм, 50–400N)"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 245,
													columnNumber: 19
												}, this),
												/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", {
													value: "16-2",
													children: "16-2 (Ø трубки 18.5 мм, Ø штока 8 мм, макс. ход 250 мм, 80–750N)"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 248,
													columnNumber: 19
												}, this),
												/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", {
													value: "16-4",
													children: "16-4 (Ø трубки 22 мм, Ø штока 10 мм, макс. ход 495 мм, 100–1200N)"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 251,
													columnNumber: 19
												}, this),
												/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", {
													value: "16-6",
													children: "16-6 (Ø трубки 28 мм, Ø штока 14 мм, макс. ход 500 мм, 200–2000N)"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 254,
													columnNumber: 19
												}, this)
											]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 244,
											columnNumber: 17
										}, this)] }, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 242,
											columnNumber: 15
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
											htmlFor: "dimensions-select",
											children: "2. Длина и ход:"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 260,
											columnNumber: 17
										}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", { id: "dimensions-select" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 261,
											columnNumber: 17
										}, this)] }, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 259,
											columnNumber: 15
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
											htmlFor: "connection",
											children: "3. Соединение:"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 264,
											columnNumber: 17
										}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", {
											id: "connection",
											children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", {
												value: "threaded",
												children: "Резьбовое"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 266,
												columnNumber: 19
											}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", {
												id: "welded-opt",
												value: "welded",
												children: "Сварное"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 267,
												columnNumber: 19
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 265,
											columnNumber: 17
										}, this)] }, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 263,
											columnNumber: 15
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
												htmlFor: "force",
												children: "4. Усилие (Н):"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 273,
												columnNumber: 17
											}, this),
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
												id: "force",
												type: "number",
												placeholder: "250",
												step: "10"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 274,
												columnNumber: 17
											}, this),
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
												id: "force-limits",
												className: "limit-hint",
												children: "min --H - max --H"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 275,
												columnNumber: 17
											}, this)
										] }, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 272,
											columnNumber: 15
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 241,
									columnNumber: 13
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 240,
								columnNumber: 11
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "center-visual",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "visual-area",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "main-zoom-hint",
										onClick: () => window.openMainDrawing?.(),
										children: "Нажмите для увеличения"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 284,
										columnNumber: 15
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										id: "spring-draw",
										onClick: () => window.openMainDrawing?.()
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 287,
										columnNumber: 15
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 283,
									columnNumber: 13
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 282,
								columnNumber: 11
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "side-a",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { children: "Сторона B (шток):" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 292,
									columnNumber: 13
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "tip-box",
									id: "box-a",
									children: [
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
											className: "zoom-hint",
											onClick: () => window.openDetail?.("a"),
											children: "Показать чертёж"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 294,
											columnNumber: 15
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
											id: "img-a",
											className: "tip-svg",
											onClick: () => window.openDetail?.("a")
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 297,
											columnNumber: 15
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", { id: "attach-a" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 298,
											columnNumber: 15
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 293,
									columnNumber: 13
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 291,
								columnNumber: 11
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "side-b",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { children: "Сторона A (трубка):" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 303,
									columnNumber: 13
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "tip-box",
									id: "box-b",
									children: [
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
											className: "zoom-hint",
											onClick: () => window.openDetail?.("b"),
											children: "Показать чертёж"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 305,
											columnNumber: 15
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
											id: "img-b",
											className: "tip-svg",
											onClick: () => window.openDetail?.("b")
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 308,
											columnNumber: 15
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", { id: "attach-b" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 309,
											columnNumber: 15
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 304,
									columnNumber: 13
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 302,
								columnNumber: 11
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "center-results",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "result-panel",
									children: [
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
											id: "calc-result",
											style: {
												fontSize: 18,
												fontWeight: 800,
												textAlign: "center"
											},
											children: "L1: -- мм"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 315,
											columnNumber: 15
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
											id: "spec-info",
											style: {
												fontSize: 12,
												color: "#718096",
												textAlign: "center"
											}
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 322,
											columnNumber: 15
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
											style: {
												textAlign: "center",
												marginTop: 10
											},
											children: "Артикул для заказа:"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 327,
											columnNumber: 15
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
											id: "order-code",
											className: "order-code-value",
											children: "---"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 331,
											columnNumber: 15
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 314,
									columnNumber: 13
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 313,
								columnNumber: 11
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 239,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "footer-buttons",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
								id: "save-btn",
								className: "btn btn-save",
								type: "button",
								onClick: () => window.addToRequest?.(),
								children: "Добавить в заявку"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 339,
								columnNumber: 11
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
								type: "button",
								className: "btn btn-reset",
								onClick: () => window.copyArticle?.(),
								children: "Копировать артикул"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 342,
								columnNumber: 11
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
								id: "pdf-btn",
								type: "button",
								className: "btn btn-reset",
								onClick: () => window.downloadPDF?.(),
								children: "Скачать PDF"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 345,
								columnNumber: 11
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 338,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 236,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
				id: "page-lockable",
				className: "page",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { children: "Блокируемые газовые пружины" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 353,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "header-line" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 354,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "lead",
						children: "Фиксация в любом промежуточном положении штока. Varilock — включение на штоке, VOB — включение на трубке."
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 355,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "two-col",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "stack",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("table", {
								className: "spec-table",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("thead", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { children: "Параметр" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 364,
									columnNumber: 19
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { children: "Значение" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 365,
									columnNumber: 19
								}, this)] }, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 363,
									columnNumber: 17
								}, this) }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 362,
									columnNumber: 15
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tbody", { children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { children: "Ø трубки" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 370,
										columnNumber: 19
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { children: "22 мм / 28 мм" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 371,
										columnNumber: 19
									}, this)] }, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 369,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { children: "Ø штока" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 374,
										columnNumber: 19
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { children: "10 мм" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 375,
										columnNumber: 19
									}, this)] }, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 373,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { children: "Ход штока" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 378,
										columnNumber: 19
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { children: "10–400 мм" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 379,
										columnNumber: 19
									}, this)] }, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 377,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { children: "F1" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 382,
										columnNumber: 19
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { children: "до 1000 N" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 383,
										columnNumber: 19
									}, this)] }, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 381,
										columnNumber: 17
									}, this)
								] }, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 368,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 361,
								columnNumber: 13
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "lead",
								children: "Для отключения блокировки: трос Боудена, кнопки, отключающий рычаг. Прямое и дистанционное управление."
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 387,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 360,
							columnNumber: 11
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
							className: "page-img",
							src: "/img/pages/page-3.jpg",
							alt: "Страница каталога: блокируемые пружины",
							"data-open-img": "/img/pages/page-3.jpg",
							"data-open-title": "Блокируемые газовые пружины"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 392,
							columnNumber: 11
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 359,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "footer-buttons",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
							type: "button",
							className: "btn btn-primary",
							"data-page": "lead",
							"data-product": "lockable",
							children: "Заявка на Lockline"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 395,
							columnNumber: 11
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 394,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 352,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
				id: "page-movotec",
				className: "page",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { children: "Movotec — гидравлическая регулировка высоты" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 403,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "header-line" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 404,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "lead",
						children: "Для промышленного, офисного и медицинского оборудования. Активация рукояткой или редукторным электродвигателем."
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 405,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
						className: "checks",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: "Элегантный дизайн и бесшумная работа" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 410,
								columnNumber: 11
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: "Блокировка в любой позиции" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 411,
								columnNumber: 11
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: "Постоянная сила независимо от позиции" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 412,
								columnNumber: 11
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: "Проще и дешевле, чем Moveline" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 413,
								columnNumber: 11
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 409,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "two-col",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("table", {
							className: "spec-table",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tbody", { children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { children: "Ход поршня" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 419,
									columnNumber: 17
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { children: "155, 195, 300, 400 мм" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 420,
									columnNumber: 17
								}, this)] }, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 418,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { children: "Длина в сжатом состоянии" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 423,
									columnNumber: 17
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { children: "711 мм" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 424,
									columnNumber: 17
								}, this)] }, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 422,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { children: "Длина в выдвинутом состоянии" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 427,
									columnNumber: 17
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { children: "до 1111 мм" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 428,
									columnNumber: 17
								}, this)] }, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 426,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { children: "Максимальная нагрузка" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 431,
									columnNumber: 17
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { children: "до 454 кг" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 432,
									columnNumber: 17
								}, this)] }, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 430,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { children: "Длина цилиндра A" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 435,
									columnNumber: 17
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { children: "258,5–463,5 мм" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 436,
									columnNumber: 17
								}, this)] }, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 434,
									columnNumber: 15
								}, this)
							] }, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 417,
								columnNumber: 13
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 416,
							columnNumber: 11
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "card",
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: "В комплект входят" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 441,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
									className: "lead",
									style: { marginTop: 8 },
									children: "Ручной или электрический привод, четыре подъемных цилиндра, четыре угловых элемента (ножки), две трубки 2,5 м и две трубки 3,0 м."
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 442,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
									className: "page-img",
									src: "/img/pages/page-4.jpg",
									alt: "Страница каталога Movotec",
									"data-open-img": "/img/pages/page-4.jpg",
									"data-open-title": "Movotec"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 448,
									columnNumber: 13
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 440,
							columnNumber: 11
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 415,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "footer-buttons",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
							type: "button",
							className: "btn btn-primary",
							"data-page": "lead",
							"data-product": "movotec",
							children: "Заявка на Movotec"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 452,
							columnNumber: 11
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 451,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 402,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
				id: "page-varistand",
				className: "page",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { children: "Varistand / Varibase" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 460,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "header-line" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 461,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "lead",
						children: "Пневматическая система SUSPA для регулировки высоты стола одной ногой. Кнопка или рычаг. Varistand — хром или чёрный."
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 462,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
						className: "checks",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: "Бесшумная работа и элегантный вид" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 467,
								columnNumber: 11
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: "Блокировка в любой позиции" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 468,
								columnNumber: 11
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: "OverRide — подъём без отдельной активации" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 469,
								columnNumber: 11
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 466,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("table", {
						className: "spec-table",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("thead", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { children: "Параметр" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 474,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { children: "Varistand" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 475,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { children: "Varibase" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 476,
								columnNumber: 15
							}, this)
						] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 473,
							columnNumber: 13
						}, this) }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 472,
							columnNumber: 11
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tbody", { children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { children: "Ход штока max" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 481,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { children: "415 мм" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 482,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { children: "400 мм" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 483,
									columnNumber: 15
								}, this)
							] }, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 480,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { children: "Длина сжатия min" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 486,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { children: "435 мм" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 487,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { children: "440 мм" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 488,
									columnNumber: 15
								}, this)
							] }, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 485,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { children: "Длина выдвижения max" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 491,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { children: "1040 мм" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 492,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { children: "1040 мм" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 493,
									columnNumber: 15
								}, this)
							] }, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 490,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { children: "Усилие" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 496,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { children: "120 N" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 497,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { children: "120 N" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 498,
									columnNumber: 15
								}, this)
							] }, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 495,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { children: "Крепление к столешнице" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 501,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { children: "Фланцевый адаптер" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 502,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { children: "Фланцевый адаптер" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 503,
									columnNumber: 15
								}, this)
							] }, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 500,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { children: "Крепление к пятилучию" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 506,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { children: "Фланец 3×M6" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 507,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { children: "Фланец 4×M6" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 508,
									columnNumber: 15
								}, this)
							] }, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 505,
								columnNumber: 13
							}, this)
						] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 479,
							columnNumber: 11
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 471,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
						className: "page-img",
						src: "/img/pages/page-5.jpg",
						alt: "Страница каталога Varistand",
						"data-open-img": "/img/pages/page-5.jpg",
						"data-open-title": "Varistand / Varibase",
						style: { marginTop: 16 }
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 512,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "footer-buttons",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
							type: "button",
							className: "btn btn-primary",
							"data-page": "lead",
							"data-product": "varistand",
							children: "Заявка на Varistand"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 516,
							columnNumber: 11
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 515,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 459,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
				id: "page-medical",
				className: "page",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { children: "Гидроприводы для медицинской мебели" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 524,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "header-line" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 525,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "lead",
						children: "Для больничных кроватей, массажных кушеток, носилок, косметического и медицинского оборудования."
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 526,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "product-list",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "product-item",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "dot",
									children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LogoMark, {}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 533,
										columnNumber: 15
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 532,
									columnNumber: 13
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: "Гидропривод общего назначения" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 536,
									columnNumber: 15
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Медицинские кровати и оборудование" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 537,
									columnNumber: 15
								}, this)] }, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 535,
									columnNumber: 13
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 531,
								columnNumber: 11
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "product-item",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "dot",
									children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LogoMark, {}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 542,
										columnNumber: 15
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 541,
									columnNumber: 13
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: "Гидропривод для капельницы" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 545,
									columnNumber: 15
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Стойки и мобильные штативы" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 546,
									columnNumber: 15
								}, this)] }, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 544,
									columnNumber: 13
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 540,
								columnNumber: 11
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "product-item",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "dot",
									children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LogoMark, {}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 551,
										columnNumber: 15
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 550,
									columnNumber: 13
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: "Инструментальные столики" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 554,
									columnNumber: 15
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Плавный подъём рабочей поверхности" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 555,
									columnNumber: 15
								}, this)] }, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 553,
									columnNumber: 13
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 549,
								columnNumber: 11
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "product-item",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "dot",
									children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LogoMark, {}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 560,
										columnNumber: 15
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 559,
									columnNumber: 13
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: "Подъём спального места" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 563,
									columnNumber: 15
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Медицинские кровати" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 564,
									columnNumber: 15
								}, this)] }, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 562,
									columnNumber: 13
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 558,
								columnNumber: 11
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "product-item",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "dot",
									children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LogoMark, {}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 569,
										columnNumber: 15
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 568,
									columnNumber: 13
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: "Подъёмник для носилок" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 572,
									columnNumber: 15
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Носилки и медицинские кровати" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 573,
									columnNumber: 15
								}, this)] }, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 571,
									columnNumber: 13
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 567,
								columnNumber: 11
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 530,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
						className: "page-img",
						src: "/img/pages/page-6.jpg",
						alt: "Страница каталога: гидроприводы",
						"data-open-img": "/img/pages/page-6.jpg",
						"data-open-title": "Гидроприводы",
						style: { marginTop: 16 }
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 577,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "footer-buttons",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
							type: "button",
							className: "btn btn-primary",
							"data-page": "lead",
							"data-product": "medical",
							children: "Заявка на гидропривод"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 581,
							columnNumber: 11
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 580,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 523,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
				id: "page-wheels",
				className: "page",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { children: "Колёса и колёсные опоры" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 589,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "header-line" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 590,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "lead",
						children: "Италия, Германия, Турция и Китай. Для оборудования, медицинской мебели и аппаратуры."
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 591,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "catalog-grid",
						children: [
							["Мебельная серия", "Для корпусной и офисной мебели"],
							["Аппаратная и медицинская", "Тихий ход, гигиеничные материалы"],
							["Транспортная серия", "Складская техника и тележки"],
							["Термостойкая серия", "Печи, камеры, горячие цеха"],
							["Большегрузная серия", "Высокая нагрузка на опору"],
							["Пневматическая серия", "Неровный пол и улица"]
						].map(([title, text]) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "card",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { children: title }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 596,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "lead",
								children: text
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 597,
								columnNumber: 15
							}, this)]
						}, title, true, {
							fileName: _jsxFileName,
							lineNumber: 595,
							columnNumber: 370
						}, this))
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 594,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
						className: "page-img",
						src: "/img/pages/page-7.jpg",
						alt: "Страница каталога: колёса",
						"data-open-img": "/img/pages/page-7.jpg",
						"data-open-title": "Колёса и опоры",
						style: { marginTop: 16 }
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 600,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "footer-buttons",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
							type: "button",
							className: "btn btn-primary",
							"data-page": "lead",
							"data-product": "wheels",
							children: "Заявка на колёса"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 604,
							columnNumber: 11
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 603,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 588,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
				id: "page-contacts",
				className: "page",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { children: "Контакты" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 612,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "header-line" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 613,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "office-grid",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "office",
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { children: "Офис в Москве" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 616,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "141044, городской округ Мытищи, д. Грибки, ул. Ангарская, стр. 40Б, пом. № 8-12" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 617,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
									href: "tel:+78007071524",
									children: "+7 800 707-15-24"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 621,
									columnNumber: 15
								}, this) }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 620,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
									href: "tel:+79255050444",
									children: "+7 925 505-04-44"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 624,
									columnNumber: 15
								}, this) }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 623,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
									href: "mailto:moscow@dikon.ru",
									children: "moscow@dikon.ru"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 627,
									columnNumber: 15
								}, this) }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 626,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
									href: "https://wa.me/79255050444",
									target: "_blank",
									rel: "noreferrer",
									children: "WhatsApp Москва"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 630,
									columnNumber: 15
								}, this) }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 629,
									columnNumber: 13
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 615,
							columnNumber: 11
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "office",
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { children: "Офис в Санкт-Петербурге" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 636,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "193318, ул. Ворошилова, д. 2, лит. АБ, пом. 5Н, офис 511 (БЦ «Охта»)" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 637,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
									href: "tel:+78123150635",
									children: "+7 812 315-06-35"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 639,
									columnNumber: 15
								}, this) }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 638,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
									href: "tel:+78125717310",
									children: "+7 812 571-73-10"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 642,
									columnNumber: 15
								}, this) }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 641,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
									href: "tel:+78123145641",
									children: "+7 812 314-56-41"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 645,
									columnNumber: 15
								}, this) }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 644,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
									href: "mailto:info@dikon.ru",
									children: "info@dikon.ru"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 648,
									columnNumber: 15
								}, this) }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 647,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
									href: "https://wa.me/78123150635",
									target: "_blank",
									rel: "noreferrer",
									children: "WhatsApp Санкт-Петербург"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 651,
									columnNumber: 15
								}, this) }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 650,
									columnNumber: 13
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 635,
							columnNumber: 11
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 614,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "lead",
						style: {
							marginTop: 16,
							textAlign: "center"
						},
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
							href: "https://dikon.ru",
							target: "_blank",
							rel: "noreferrer",
							children: "www.dikon.ru"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 661,
							columnNumber: 11
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 657,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
						className: "page-img",
						src: "/img/pages/page-8.jpg",
						alt: "Контакты Dikon",
						"data-open-img": "/img/pages/page-8.jpg",
						"data-open-title": "Контакты"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 665,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 611,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
				id: "page-lead",
				className: "page",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { children: "Оставить заявку" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 670,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "header-line" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 671,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "lead",
						children: "Имя и телефон — обязательны. Менеджер напишет в тот же день выставки."
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 672,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
						id: "lead-form",
						className: "card",
						onSubmit: (e) => window.saveLeadFromForm?.(e),
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
								htmlFor: "lead-name",
								children: "Имя"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 674,
								columnNumber: 11
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
								id: "lead-name",
								name: "name",
								autoComplete: "name",
								required: true,
								placeholder: "Иван"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 675,
								columnNumber: 11
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
								htmlFor: "lead-phone",
								children: "Телефон"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 676,
								columnNumber: 11
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
								id: "lead-phone",
								name: "phone",
								type: "tel",
								autoComplete: "tel",
								required: true,
								placeholder: "+7 9.."
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 677,
								columnNumber: 11
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
								htmlFor: "lead-company",
								children: "Компания"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 678,
								columnNumber: 11
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
								id: "lead-company",
								name: "company",
								placeholder: "ООО «...»"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 679,
								columnNumber: 11
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
								htmlFor: "lead-product",
								children: "Что интересно"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 680,
								columnNumber: 11
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", {
								id: "lead-product",
								defaultValue: "springs",
								children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", {
										value: "springs",
										children: "Газовые пружины"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 682,
										columnNumber: 13
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", {
										value: "lockable",
										children: "Блокируемые пружины"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 683,
										columnNumber: 13
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", {
										value: "movotec",
										children: "Movotec"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 684,
										columnNumber: 13
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", {
										value: "varistand",
										children: "Varistand / Varibase"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 685,
										columnNumber: 13
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", {
										value: "medical",
										children: "Гидроприводы"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 686,
										columnNumber: 13
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", {
										value: "wheels",
										children: "Колёса"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 687,
										columnNumber: 13
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", {
										value: "config",
										children: "Конфигуратор / артикул"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 688,
										columnNumber: 13
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 681,
								columnNumber: 11
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
								htmlFor: "lead-message",
								children: "Комментарий"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 690,
								columnNumber: 11
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("textarea", {
								id: "lead-message",
								placeholder: "Количество, срок, чертёж..."
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 691,
								columnNumber: 11
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "footer-buttons",
								style: {
									border: 0,
									marginTop: 8,
									paddingTop: 0
								},
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
									className: "btn btn-save",
									type: "submit",
									children: "Отправить заявку"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 697,
									columnNumber: 13
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
									type: "button",
									className: "btn btn-ghost",
									"data-page": "leads",
									children: "Журнал стенда"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 700,
									columnNumber: 13
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 692,
								columnNumber: 11
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 673,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 669,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
				id: "page-leads",
				className: "page",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { children: ["Заявки стенда · ", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
						id: "leads-count",
						children: "0"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 710,
						columnNumber: 27
					}, this)] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 709,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "header-line" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 712,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "lead",
						children: "Хранятся только на этом телефоне / планшете. Выгрузите CSV в конце дня."
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 713,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						id: "leads-list",
						className: "leads-list"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 714,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "footer-buttons",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
							type: "button",
							className: "btn btn-primary",
							onClick: () => window.exportLeads?.(),
							children: "Скачать CSV"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 716,
							columnNumber: 11
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
							type: "button",
							className: "btn btn-ghost",
							onClick: () => window.clearLeads?.(),
							children: "Очистить"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 719,
							columnNumber: 11
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 715,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 708,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
				id: "page-qr",
				className: "page",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { children: "QR-код для выставки" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 727,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "header-line" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 728,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "lead",
						children: "Распечатайте и повесьте у стойки, на визитках и на обложке бумажного каталога. Камера телефона откроет этот каталог."
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 729,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "qr-wrap",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "poster",
							id: "qr-poster",
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "logo",
									style: {
										justifyContent: "center",
										marginBottom: 8
									},
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LogoMark, {}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 739,
										columnNumber: 15
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "logo-word",
										children: [
											"Дик",
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "о" }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 741,
												columnNumber: 20
											}, this),
											"н"
										]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 740,
										columnNumber: 15
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 735,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
									style: {
										fontWeight: 800,
										margin: "0 0 8px"
									},
									children: "Наведите камеру — каталог на телефоне"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 744,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { id: "qr-box" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 748,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { id: "qr-url" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 749,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
									className: "lead",
									style: { marginTop: 8 },
									children: "SUSPA · газовые пружины · Movotec · колёса"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 750,
									columnNumber: 13
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 734,
							columnNumber: 11
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 733,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "footer-buttons",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
							type: "button",
							className: "btn btn-primary",
							onClick: () => window.downloadQR?.(),
							children: "Скачать PNG"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 758,
							columnNumber: 11
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
							type: "button",
							className: "btn btn-ghost",
							onClick: () => window.print(),
							children: "Печать плаката"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 761,
							columnNumber: 11
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 757,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 726,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", {
				className: "tabbar",
				"aria-label": "Нижнее меню",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
						type: "button",
						className: "tab is-active",
						"data-page": "home",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TabIcon, { d: "M4 10 12 4l8 6v10H4z" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 769,
							columnNumber: 11
						}, this), "Каталог"]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 768,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
						type: "button",
						className: "tab",
						"data-page": "config",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TabIcon, { d: "M5 7h14M5 12h14M5 17h8" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 773,
							columnNumber: 11
						}, this), "Конфиг"]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 772,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
						type: "button",
						className: "tab",
						"data-page": "lead",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TabIcon, { d: "M4 6h16v12H4zM4 10h16" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 777,
							columnNumber: 11
						}, this), "Заявка"]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 776,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
						type: "button",
						className: "tab",
						"data-page": "qr",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TabIcon, { d: "M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h2v2h-2zM18 18h2v2h-2z" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 781,
							columnNumber: 11
						}, this), "QR"]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 780,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
						type: "button",
						className: "tab",
						"data-page": "contacts",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TabIcon, { d: "M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4zm-8 8a8 8 0 0 1 16 0" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 785,
							columnNumber: 11
						}, this), "Контакты"]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 784,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 767,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				id: "pdf-template",
				"aria-hidden": "true",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						style: {
							borderBottom: "3px solid #29abe2",
							paddingBottom: 10,
							marginBottom: 20,
							display: "flex",
							justifyContent: "space-between"
						},
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
							style: {
								margin: 0,
								fontSize: 24,
								color: "#2c3e50"
							},
							children: "Техническая спецификация"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 800,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							style: {
								margin: "5px 0 0",
								color: "#7f8c8d",
								fontSize: 14
							},
							children: "Конфигуратор газовых пружин Dikon"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 805,
							columnNumber: 13
						}, this)] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 799,
							columnNumber: 11
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							style: {
								textAlign: "right",
								fontSize: 12,
								color: "#999"
							},
							children: ["Дата: ", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { id: "pdf-date" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 818,
								columnNumber: 19
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 813,
							columnNumber: 11
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 792,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						style: {
							background: "#f0f7fa",
							border: "1px solid #29abe2",
							borderRadius: 8,
							padding: 20,
							textAlign: "center",
							marginBottom: 30
						},
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							style: {
								fontSize: 14,
								color: "#555",
								marginBottom: 5
							},
							children: "АРТИКУЛ ДЛЯ ЗАКАЗА:"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 829,
							columnNumber: 11
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							id: "pdf-article",
							style: {
								fontSize: 28,
								fontWeight: 800,
								color: "#29abe2"
							},
							children: "---"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 834,
							columnNumber: 11
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 821,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("table", {
						style: {
							width: "100%",
							borderCollapse: "collapse",
							marginBottom: 30
						},
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tbody", { children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
								style: {
									padding: 10,
									border: "1px solid #ddd"
								},
								children: "Серия"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 849,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
								style: {
									padding: 10,
									border: "1px solid #ddd"
								},
								id: "pdf-series"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 853,
								columnNumber: 15
							}, this)] }, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 848,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
								style: {
									padding: 10,
									border: "1px solid #ddd"
								},
								children: "Размеры (L / Ход)"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 859,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
								style: {
									padding: 10,
									border: "1px solid #ddd"
								},
								id: "pdf-dims"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 863,
								columnNumber: 15
							}, this)] }, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 858,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
								style: {
									padding: 10,
									border: "1px solid #ddd"
								},
								children: "Усилие (F1)"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 869,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
								style: {
									padding: 10,
									border: "1px solid #ddd"
								},
								id: "pdf-force"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 873,
								columnNumber: 15
							}, this)] }, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 868,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
								style: {
									padding: 10,
									border: "1px solid #ddd"
								},
								children: "Межцентровое расстояние (L1)"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 879,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
								style: {
									padding: 10,
									border: "1px solid #ddd"
								},
								id: "pdf-l1"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 883,
								columnNumber: 15
							}, this)] }, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 878,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
								style: {
									padding: 10,
									border: "1px solid #ddd"
								},
								children: "Тип соединения"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 889,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
								style: {
									padding: 10,
									border: "1px solid #ddd"
								},
								id: "pdf-conn"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 893,
								columnNumber: 15
							}, this)] }, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 888,
								columnNumber: 13
							}, this)
						] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 847,
							columnNumber: 11
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 842,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { children: "Схема пружины" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 900,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
						id: "pdf-main-img",
						alt: "",
						style: {
							maxWidth: "100%",
							maxHeight: 200
						}
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 901,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						style: {
							display: "flex",
							gap: 20,
							marginTop: 20
						},
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							style: { width: "50%" },
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { children: "Сторона B (шток)" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 913,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
									id: "pdf-img-rod",
									alt: "",
									style: { maxHeight: 100 }
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 914,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
									id: "pdf-name-rod",
									style: { fontSize: 12 }
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 917,
									columnNumber: 13
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 910,
							columnNumber: 11
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							style: { width: "50%" },
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { children: "Сторона A (трубка)" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 924,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
									id: "pdf-img-tube",
									alt: "",
									style: { maxHeight: 100 }
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 925,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
									id: "pdf-name-tube",
									style: { fontSize: 12 }
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 928,
									columnNumber: 13
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 921,
							columnNumber: 11
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 905,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 791,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				id: "detailModal",
				className: "modal",
				onClick: (e) => {
					if (e.target === e.currentTarget) window.closeModal?.();
				},
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "modal-content",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
							id: "modal-title",
							style: {
								marginTop: 0,
								color: "#2c3e50"
							},
							children: "Чертёж"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 939,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
							id: "modal-img",
							className: "detail-img",
							alt: "Чертёж"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 945,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { id: "modal-img-slot" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 946,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "modal-btns",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
								type: "button",
								className: "btn-confirm",
								onClick: () => window.closeModal?.(),
								children: "Закрыть"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 948,
								columnNumber: 13
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 947,
							columnNumber: 11
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 938,
					columnNumber: 9
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 935,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				id: "toast",
				className: "toast"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 954,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 55,
		columnNumber: 10
	}, this);
}
//#endregion
export { Home as component };
