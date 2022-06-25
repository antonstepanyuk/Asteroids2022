"use strict";

function PageController(pageObj, pageContainerDOM) {
    let self = this;
    let page = pageObj;
    let pageDOM = pageContainerDOM;
    let handlers = {
        click: [],
        touch: [],
        // change:[]todo
    };

    self.startPage = function () {
        page.showSpace();
        page.hideLoading();
        page.updateState();
    }

    let showLoading = function () {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', page.showLoading);
        } else {
            page.showLoading();
        }
    }

    let handleEvent = function (EO) {
        EO = EO.target;
        let id = EO.getAttribute("id");

        let newState=null;
        let value=null;
        switch (id) {
            case "start_btn":
                newState = "game_settings";
                page.switchState(newState);
                break;

            case "easy_btn":
            case "medium_btn":
            case "hard_btn":
                value=EO.value;
                page.switchMode(value);
                break;
            case "spaceship_blue":
            case "spaceship_green":
            case "spaceship_orange":
                value=EO.value;
                page.switchSkin(value);
                break;
            case "play_btn":
                page.startGame();
                break;
            case"return_btn":
                newState="main_menu";
                page.switchState(newState);
                break;

        }
    }


    let deleteHandlers = function () {
        for (let i = 0; i < handlers.click.length; i++) {
            handlers.click[i].removeEventListener("click", handleEvent);
        }
        handlers.click=[];
        for (let i = 0; i < handlers.touch.length; i++) {
            handlers.touch[i].removeEventListener("click", handleEvent);//todo touch!!!
        }
        handlers.touch=[];
        // for (let i=0;i<handlers.change.length;i++){
        //     handlers.change[i].removeEventListener("change",handleEvent);//todo CHANGE
        // }
    }

    let setHandlers = function () {
        let state = page.getCurrentState();
        switch (state) {
            case "main_menu":
                let start = document.getElementById("start_btn");
                start.addEventListener("click", handleEvent);
                handlers.click.push(start);
                break;
            case "game_settings":
                let easyMode = document.getElementById("easy_btn");
                easyMode.addEventListener("click",handleEvent);
                handlers.click.push(easyMode);

                let mediumMode = document.getElementById("medium_btn");
                mediumMode.addEventListener("click",handleEvent);
                handlers.click.push(mediumMode);

                let hardMode = document.getElementById("hard_btn");
                hardMode.addEventListener("click",handleEvent);
                handlers.click.push(hardMode);

                let blueSkin = document.getElementById("spaceship_blue");
                blueSkin.addEventListener("click",handleEvent);
                handlers.click.push(blueSkin);

                let greenSkin = document.getElementById("spaceship_green");
                greenSkin.addEventListener("click",handleEvent);
                handlers.click.push(greenSkin);

                let orangeSkin = document.getElementById("spaceship_orange");
                orangeSkin.addEventListener("click",handleEvent);
                handlers.click.push(orangeSkin);

                let play=document.getElementById("play_btn");
                play.addEventListener("click",handleEvent);
                handlers.click.push(play);

                let back=document.getElementById("return_btn");
                back.addEventListener("click",handleEvent);
                handlers.click.push(back);

                break;
            // case "options":
            // case "controls"://меняет hash switchState(hash)
            // case "high_scores":
            // case "game_menu":
            //     menuDOM = menu.createMenu(state);
            //     view.showState(currentDOM, menuDOM);
            //     currentDOM = menuDOM;
            //     break;
            // case "game":
            //     gameDOM = game.createGameDOM();
            //     view.showState(currentDOM, gameDOM);
            //     currentDOM = gameDOM;
            //     break;
        }
    }


    window.addEventListener("load", () => setTimeout(self.startPage, 100));//todo
    window.addEventListener("hashchange", () => {
        page.updateState();
        setHandlers();
    });
    window.addEventListener("state_switched", setHandlers);
    window.addEventListener("ready_to_switch", deleteHandlers);

    showLoading();
}

// #switchHandlers(EO) {
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