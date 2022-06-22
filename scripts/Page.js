"use strict";

console.log("Page.js: начато чтение файла");//todo

function Page() {
    console.log("Page: вызван конструктор");//todo
    let self = this;
    let container = document.body;
    let currentState = "";
    let states = {//todo is mobile orientation
        main_menu: "main_menu",//todo start,options,controls,scores,credits,exit
        game_start: "game_start",//todo mode,skins,return, play, new game, saves, username
        options: "options",//todo sounds,music,vibration,fullscreen, return
        controls: "controls",//todo show controls, change, mobile controls
        high_scores: "high_scores",//todo table select user
        game: "game",//todo score,lives,ships,audio,asteroids,laser
        game_menu: "game_menu"//todo game menu
        //todo PAGE EXITS!!!!!

    };

    self.switchState = function (newState) {
        window.location.hash = newState;
        console.log("Page: преключен state на " + newState);//todo
    }

    self.updateState = function () {
        console.log("Page: запрошено обновление состояния");//todo
        let hash = window.location.hash;
        let state = hash.substring(1);
        if (!state) {
            console.log("Page: state пустой, переход в main_menu");//todo
            self.switchState(states.main_menu);
        } else if (state in states) {
            currentState = state;
            view.showState(currentState);
            console.log("Page: state корректный, запрошено отображение " + currentState);//todo
        } else {
            self.switchState(currentState);
            console.log("Page: state некорректный, выполняется переход на текущий state "+currentState);//todo
        }
    }

    self.showState = function (state) {
        view.showState(state);
    }

    let view = new PageView(self, container);
    let controller = new PageController(self, container);
    console.log("Page: отработал конструктор");//todo
}

function PageView(modelObj, containerDOM) {
    console.log("PageView: вызван конструктор");//todo
    let self = this;
    let model = modelObj;
    let container = containerDOM;

    self.showState = function (state) {
        switch (state) {
            case "":
                break;
        }
    }
    console.log("PageView: отработал конструктор");//todo
}

function PageController(modelObj, containerDOM) {
    console.log("PageController: вызван конструктор");//todo

    let self = this;
    let model = modelObj;
    let container = containerDOM;
    //         this.#switchToState=modelObj.switchToState().bind(modelObj);


    window.addEventListener("hashchange", model.updateState);
    model.updateState();
    console.log("PageController: отработал конструктор");//todo
}

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

let page = new Page();

console.log("Page.js: окончено чтение файла");//todo


