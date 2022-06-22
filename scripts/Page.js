"use strict";

console.log("Page.js: начато чтение файла");//todo

function Page() {
    console.log("Page: вызван конструктор");//todo
    let self = this;
    let container = document.body;


    let viewObj = new PageView(self, container);
    let controllerObj = new PageController(self, container);
    console.log("Page: отработал конструктор");//todo
}

function PageView(modelObj, containerDOM) {
    console.log("PageView: вызван конструктор");//todo
    let self = this;
    let model = modelObj;
    let container = containerDOM;

    console.log("PageView: отработал конструктор");//todo

}

function PageController(modelObj, containerDOM) {
    console.log("PageController: вызван конструктор");//todo

    let self = this;
    let model = modelObj;
    let container = containerDOM;

    console.log("PageController: отработал конструктор");//todo
}

// class Page {
//
//     constructor() {
//         this.#pageSwitchedEvent = new Event("page_switched", {bubbles: true});
//         this.#loadStyle(this.#styleSrc.background)
//             .then(() => {
//                 console.log("готовлюсь к загрузке: Space.js")
//                 this.#loadScript(this.#scriptSrc.background)
//                     .then(() => {
//                         this.#backgroundObj = new Space();
//                         this.#backgroundElementDOM = this.#backgroundObj.getElementDOM();
//                         this.#viewObj.showElement(this.#backgroundElementDOM);
//                     }, reject => console.log(reject))
//             }, reject => console.log(reject));
//
//         console.log("готовлюсь к загрузке: menu.css")
//         this.#loadStyle(this.#styleSrc.menu)
//             .then(() => {
//                 console.log("готовлюсь к загрузке: Menu.js")
//                 this.#loadScript(this.#scriptSrc.menu)
//                     .then(() => {
//                         this.#menuObj = new Menu(this.#elementDOM);
//                     }, reject => console.log(reject))
//             }, reject => console.log(reject));
//
//         console.log("готовлюсь к загрузке: game.css")
//         this.#loadStyle(this.#styleSrc.game)
//             .then(() => {
//                 console.log("готовлюсь к загрузке: Game.js")
//                 this.#loadScript(this.#scriptSrc.game)
//                     .then(() => {
//                         this.#gameObj = new Game();
//                     }, reject => console.log(reject))
//             }, reject => console.log(reject));
//
//         this.#controllerObj = new PageController(this, this.#elementDOM);
//         this.#viewObj = new PageView(this, this.#elementDOM);
//
//
//         window.onload = () => this.switchToStateFromURLHash();
//         console.log("отработал конструктор: Page")
//
//     }
//
//     getEvent() {
//         return this.#pageSwitchedEvent;
//     }
//
//     #loadStyle(src) {
//         return new Promise(function (resolve, reject) {
//             console.log("загружаю стиль " + src)
//             let link = document.createElement("link");
//             link.rel = "stylesheet";
//             link.type = "text/css";
//             link.href = src;
//
//             link.onload = () => resolve(link);
//             link.onerror = () => reject(new Error(`Ошибка загрузки стиля ${link}`));
//
//             document.head.append(link);//todo
//             console.log("стиль загружен " + src)
//         });
//     }
//
//     #loadScript(src) {
//         console.log("загружаю скрипт " + src)
//         return new Promise(function (resolve, reject) {
//             let script = document.createElement("script");
//             script.type = "text/javascript";
//             script.src = src;
//
//             script.onload = () => resolve(script);
//             script.onerror = () => reject(new Error(`Ошибка загрузки скрипта ${src}`));
//
//             document.head.append(script);
//             console.log("скрипт загружен " + src)
//         });
//     }
//
//     switchToState(newHash) {
//         console.log("переключаю на новое состояние " + newHash)
//         location.hash = newHash;
//     }
//
//     switchToStateFromURLHash() {
//         console.log("вызван: switchToStateFromURLHash")
//         let urlHash = window.location.hash;
//         let hash = urlHash.substring(1);
//         console.log("текущий hash: "+hash)
//         let isCorrect = (hash in this.#states);
//         if (!isCorrect) {
//             console.log("некорректный hash: "+hash)
//             this.switchToState(this.#states.main_menu);
//         } else {
//             console.log("hash корректный: "+hash)
//             this.#currentStateStr = hash;
//             this.#showElement(this.#currentStateStr);
//         }
//     }
//
//     #showElement(state) {
//         if(this.#currentElementDOM){
//             this.#currentElementDOM.remove();
//         }
//         console.log("вызван: showElement")
//         switch (state) {
//             case "main_menu":
//                 console.log("готовится к отображению: main_menu")
//                 this.#menuElementDOM = this.#menuObj.createMenu(state, this.#gameObj);
//                 this.#currentElementDOM = this.#menuElementDOM;
//                 // this.#currentElementDOM.dispatchEvent(this.#pageSwitchedEvent);
//                 break;
//             case "start_menu":
//                 console.log("готовится к отображению: start_menu")
//                 this.#menuElementDOM = this.#menuObj.createMenu(state, this.#gameObj);
//                 this.#currentElementDOM = this.#menuElementDOM;
//                 break;
//             case "game":
//                 console.log("готовится к отображению: game")
//                 // this.#viewObj.showElement(this.#gameElementCNVS);
//                 break;
//         }
//         this.#viewObj.showElement(this.#currentElementDOM);
//         console.log("отправлен на отображение: "+this.#currentElementDOM)
//     }
// }
//
// class PageController {
//     #modelObj = null;
//     #elementDOM = null;
//     #handlers = {};
//     #switchToState=null;
//
//     constructor(modelObj, containerDOM) {
//         console.log("вызван конструктор: PageController")
//         this.#modelObj = modelObj;
//         this.#elementDOM = containerDOM;
//
//         this.#switchToState=modelObj.switchToState().bind(modelObj);
//
//         window.addEventListener("hashchange", this.#modelObj.switchToStateFromURLHash.bind(modelObj));
//         this.#elementDOM.addEventListener("page_switched", this.#switchHandlers.bind(this));
//         console.log("отработал конструктор: PageController")
//     }
//
//
//     #switchHandlers(EO) {
//         console.log("вызван switchHandlers")
//         for (let key in this.#handlers) {
//             this.#handlers[key].removeEventListener("click", this.#clickHandle);
//         }
//         console.log("устанавливаются события")
//         EO = EO.target;
//         console.log("раздел для установки событий: "+EO)
//         let id = EO.getAttribute("id");
//         console.log(" id раздела для установки событий: "+id)
//
//         switch (id) {
//             case "menu_window":
//                 console.log("установка событий для: menu_window")
//                 this.#addMainMenuHandlers();
//                 break;
//         }
//
//
//     }
//
//     #addMainMenuHandlers() {
//         console.log("вызван addMainMenuHandlers")
//         this.#handlers.start = document.getElementById("start_btn");
//         this.#handlers.options = document.getElementById("options_btn");
//         this.#handlers.controls = document.getElementById("controls_btn");
//         this.#handlers.score_table = document.getElementById("score_table_btn");
//         this.#handlers.exit = document.getElementById("exit_btn");
//         for (let key in this.#handlers) {
//             this.#handlers[key].addEventListener("click", this.#clickHandle);
//         }
//     }
//
//     #clickHandle(EO) {
//         EO = EO.target;
//         console.log("вызван обработчик clickHandle у элемента: "+EO)
//         let id = EO.getAttribute("id");
//         console.log("id элемента: "+id)
//
//         switch (id) {
//             case  "start_btn":
//                 // this.#switchToState("start_menu");
//                 alert("start_btn")
//                 break;
//             case  "options_btn":
//                 alert("options_btn")
//                 break;
//             case  "controls_btn":
//                 alert("controls_btn")
//                 break;
//             case  "score_table_btn":
//                 alert("score_table_btn")
//                 break;
//             case  "exit_btn":
//                 alert("exit_btn")
//                 break;
//         }
//     }
// }
//
// class PageView {
//     #modelObj = null;
//     #elementDOM = null;
//
//     constructor(modelObj, elementDOM) {
//         console.log("вызван конструктор: PageView")
//         this.#modelObj = modelObj;
//         this.#elementDOM = elementDOM;
//         console.log("отработал конструктор: PageView")
//     }
//
//     showElement(elementDOM) {
//         this.#elementDOM.append(elementDOM);
//         console.log("элемент подключен к html: "+elementDOM)
//         elementDOM.dispatchEvent(this.#modelObj.getEvent());
//         console.log("элемент вызвал событие: "+this.#modelObj.getEvent())
//     }
// }

let page = new Page();

console.log("Page.js: окончено чтение файла");


