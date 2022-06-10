"use strict";

class Menu {
    #container = null;
    #pageContainer = null;
    #view = null;
    #controller = null;
    #elements = {
        buttons:
            [
                {class: "button", id: "start", text: "START"},
                {class: "button", id: "mode", text: "MODE"},
                {class: "button", id: "options", text: "OPTIONS"},
                {class: "button", id: "controls", text: "SHOW CONTROLS"},
                {class: "button", id: "score", text: "HIGH SCORE TABLE"},
                {class: "button", id: "exit", text: "EXIT"},
            ],
        gameName:{class: "game_name", text: "ASTEROIDS2022"}
    }

    constructor(pageContainer) {
        this.#pageContainer = pageContainer;
    }

    initialize(controller, view) {
        this.#controller = controller;
        this.#view = view;
    }

    #createMenuBoard() {
        this.#container = document.createElement("div");
        this.#container.setAttribute("id", "menu");
        this.#container.className = "menu";
        let gameName=document.createElement("span");
        gameName.className=this.#elements.gameName.class;
        gameName.innerHTML=this.#elements.gameName.text;
        this.#container.append(gameName);
        this.#pageContainer.append(this.#container);
    }

    showMenu() {
        if (!this.#container) {
            this.#createMenuBoard();
        }

        let buttons=this.#elements.buttons;

        for (let i = 0; i < buttons.length; i++) {
            let button=document.createElement("button");
            button.setAttribute("id",buttons[i].id);
            button.className=buttons[i].class;
            let span=document.createElement("span");
            span.innerHTML=buttons[i].text;
            button.append(span);
            this.#container.append(button);
        }



    }
}

class MenuController {
    #model = null;
    #DOMElement = null;

    constructor(model, view) {
    }

    initialize(model, DOMElement) {
        this.#model = model;
        this.#DOMElement = DOMElement;
    }
}

class MenuView {
    #model = null;
    #DOMElement = null;

    constructor() {
    }

    initialize(model, DOMElement) {
        this.#model = model;
        this.#DOMElement = DOMElement;
    }
}


// <div className="menu">
//
//     <span className="game_name">ASTEROIDS2022</span>
//
//
//     <button className="button" id="start_button" type="button" onClick="startGame()">
//         <span>START</span>
//     </button>
//
//     <button className="button" id="mode_button" type="button" onClick="selectMode()">
//         <span>MODE</span>
//     </button>
//
//     <button className="button" id="options_button" type="button" onClick="selectOptions()">
//         <span>OPTIONS</span>
//     </button>
//
//     <button className="button" id="controls_button" type="button" onClick="showControls()">
//         <span>SHOW CONTROLS</span>
//     </button>
//
//     <button className="button" id="score_button" type="button" onClick="showHighScoreTable()">
//         <span>HIGH SCORE TABLE</span>
//     </button>
//
//     <button className="button" id="exit_button" type="button" onClick="exitGame()">
//         <span>EXIT</span>
//     </button>
//
// </div>