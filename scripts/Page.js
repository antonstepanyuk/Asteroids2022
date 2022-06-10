"use strict";

class Page {
    #view = null;
    #controller = null;
    #container = null;

    constructor() {
    }

    getContainer() {
        return this.#container;
    }

    initialize(controller, view) {
        this.#controller = controller;
        this.#view = view;
        this.#createContainer();
        this.#showBackground();
    }

    #createContainer() {
        this.#container = document.createElement("div");
        this.#container.setAttribute("id", "container");
        this.#container.className = "container";
        document.body.append(this.#container);
    }

    #showBackground() {
        let space = new Space(this.#container);
        space.showStars();
    }

    // #updateView() {
    //     if (this.#view) {
    //         this.#view.update();
    //     }
    // }

}

class PageController {
    #model = null;
    #DOMElement = null;

    // #pageEventListener;
    // #SPAState = {};

    constructor() {
        // this.#pageEventListener = window.addEventListener("onhashchange", this.switchToStateFromURLHash);
    }

    initialize(model, DOMElement) {
        this.#model = model;
        this.#DOMElement = DOMElement;
    }

    // switchToStateFromURLHash() {
    //     let URLHash = window.location.hash;
    //     let state = URLHash.substring(1);
    //
    //     if (state) {
    //         this.#SPAState.pagename = state;
    //     } else {
    //         this.#SPAState.pagename = "main_menu";
    //
    //     }
    //
    // }

}


class PageView {
    #model = null; // с какой моделью работаем
    #DOMElement = null; // внутри какого элемента DOM наша вёрстка

    constructor() {
    }

    initialize(model, DOMElement) {
        this.#model = model;
        this.#DOMElement = DOMElement;
    }

    // updatePage(state) {
    //     switch (state) {
    //         case "main_menu":
    //             let element = document.getElementById(state);//todo
    //             break;
    //     }
    //     location.hash = state;
    // }
}


// function switchToMainPage() {
//     switchToState({pagename: 'Main'});
// }
//
// function switchToPhotoPage(photoId) {
//     switchToState({pagename: 'Photo', photoid: photoId});
// }
//
// function switchToAboutPage() {
//     switchToState({pagename: 'About'});
// }

// переключаемся в состояние, которое сейчас прописано в закладке УРЛ
// switchToStateFromURLHash();


// man.updateView();

