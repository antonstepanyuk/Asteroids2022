// "use strict";
//
// class Menu {
//     #containerDOM = null;
//     #pageContainerDOM = null;
//     #viewObj = null;
//     #controllerObj = null;
//
//     constructor(pageContainer) {
//         this.#pageContainerDOM = pageContainer;
//     }
//
//     initialize(controller, view) {
//         this.#controllerObj = controller;
//         this.#viewObj = view;
//     }
//
//
//
//     showMenu() {
//         if (!this.#containerDOM) {
//             this.#createMenuBoard();
//         }
//         this.#containerDOM.style.display = "flex";
//         let buttons = this.#elements.buttons;
//
//
//         for (let i = 0; i < buttons.length; i++) {
//             let button = document.createElement("button");
//             button.setAttribute("id", buttons[i].id);
//             button.className = buttons[i].class;
//             let span = document.createElement("span");
//             span.innerHTML = buttons[i].text;
//             button.append(span);
//             this.#containerDOM.append(button);
//         }
//
//     }
//
//
//     closeMenu() {
//         this.#containerDOM.style.display = "none";
//
//     }
// }
//
//
// class MenuController {
//     #model = null;
//     #DOMElement = null;
//
//     constructor() {
//     }
//
//     initialize(model, DOMElement) {
//         this.#model = model;
//         this.#DOMElement = DOMElement;
//     }
// }
//
// class MenuView {
//     #model = null;
//     #DOMElement = null;
//     #elements = {
//         buttons:
//             [
//                 {class: "button", id: "start", text: "START"},
//                 {class: "button", id: "mode", text: "MODE"},
//                 {class: "button", id: "options", text: "OPTIONS"},
//                 {class: "button", id: "controls", text: "SHOW CONTROLS"},
//                 {class: "button", id: "score", text: "HIGH SCORE TABLE"},
//                 {class: "button", id: "exit", text: "EXIT"},
//             ],
//         gameName: {class: "game_name", text: "ASTEROIDS2022"}
//     }
//
//     constructor() {
//     }
//
//     initialize(model, DOMElement) {
//         this.#model = model;
//         this.#DOMElement = DOMElement;
//     }
//     showMenu() {
//         if (!this.#model.#container) {
//             this.#createMenuBoard();
//         }
//         this.#container.style.display = "flex";
//         let buttons = this.#elements.buttons;
//
//
//         for (let i = 0; i < buttons.length; i++) {
//             let button = document.createElement("button");
//             button.setAttribute("id", buttons[i].id);
//             button.className = buttons[i].class;
//             let span = document.createElement("span");
//             span.innerHTML = buttons[i].text;
//             button.append(span);
//             this.#container.append(button);
//         }
//
//     }
//
//     #showMenuBoard() {
//         this.#DOMElement = document.createElement("div");
//         this.#DOMElement.setAttribute("id", "menu");
//         this.#DOMElement.className = "menu";
//         let gameNameDOM = document.createElement("span");
//         gameNameDOM.className = this.#elements.gameName.class;
//         gameNameDOM.innerHTML = this.#elements.gameName.text;
//         this.#DOMElement.append(gameNameDOM);
//         this.#pageContainerDOM.append(this.#containerDOM);
//     }
//
//
//     closeMenu() {
//         this.#container.style.display = "none";
//
//     }
//
// }
//
//
// // <div className="menu">
// //
// //     <span className="game_name">ASTEROIDS2022</span>
// //
// //
// //     <button className="button" id="start_button" type="button" onClick="startGame()">
// //         <span>START</span>
// //     </button>
// //
// //     <button className="button" id="mode_button" type="button" onClick="selectMode()">
// //         <span>MODE</span>
// //     </button>
// //
// //     <button className="button" id="options_button" type="button" onClick="selectOptions()">
// //         <span>OPTIONS</span>
// //     </button>
// //
// //     <button className="button" id="controls_button" type="button" onClick="showControls()">
// //         <span>SHOW CONTROLS</span>
// //     </button>
// //
// //     <button className="button" id="score_button" type="button" onClick="showHighScoreTable()">
// //         <span>HIGH SCORE TABLE</span>
// //     </button>
// //
// //     <button className="button" id="exit_button" type="button" onClick="exitGame()">
// //         <span>EXIT</span>
// //     </button>
// //
// // </div>