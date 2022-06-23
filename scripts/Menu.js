"use strict";

console.log("Menu.js: начато чтение файла");//todo

function Menu() {
    console.log("Menu: вызван конструктор");//todo
    let self = this;
    let elements = {
        menu_window: {
            id: "menu_window",
            class: "menu_window",
            logo_class: "logo",
            logo: "ASTEROIDS2022"
        },
        main_menu: {
            id: "main_menu_section",
            class: "menu_section",
            name_class: "menu_section_name",
            text: "MAIN MENU",
            buttons: {
                start: {class: "main_menu_btn", id: "start_btn", text: "START"},
                options: {class: "main_menu_btn", id: "options_btn", text: "OPTIONS"},
                controls: {
                    class: "main_menu_btn",
                    id: "controls_btn",
                    text: "SHOW CONTROLS"
                },
                high_scores: {
                    class: "main_menu_btn",
                    id: "score_table_btn",
                    text: "HIGH SCORE TABLE"
                },
                credits: {
                    class: "main_menu_btn",
                    id: "credits_btn",
                    text: "CREDITS"
                },
                exit: {class: "main_menu_btn", id: "exit_btn", text: "EXIT"}
            },
        },
        game_settings: {},
        options: {},
        controls: {},
        high_scores: {},
        credits: {},
        game: {},
        game_menu: {}
    };

    let createMenuSection = function (state) {
        console.log("Menu: создается секция " + state);//todo

        // menu_window.append(text);
        // let states = {//todo is mobile orientation
        //     main_menu: "main_menu",//todo start,options,controls,scores,credits,exit
        //     game_settings: "game_start",//todo mode,skins,return, play, new game, saves, username
        //     options: "options",//todo sounds,music,vibration,fullscreen, return
        //     controls: "controls",//todo show controls, change, mobile controls
        //     high_scores: "high_scores",//todo table select user
        //     game: "game",//todo score,lives,ships,audio,asteroids,laser
        //     game_menu: "game_menu"//todo game menu
        function createMainMenu() {
            console.log("Menu: создается MainMenu");//todo

            let container = document.createElement("div");
            container.id = elements.main_menu.id;
            container.className = elements.main_menu.class;

            let name = document.createElement("span");
            name.className = elements.main_menu.name_class;
            name.innerHTML = elements.main_menu.text;

            container.append(name);

            for (let key in elements.main_menu.buttons) {

                let button = document.createElement("button");
                button.id = elements.main_menu.buttons[key].id;
                button.className = elements.main_menu.buttons[key].class;
                button.type = "button";
                button.innerHTML = elements.main_menu.buttons[key].text

                container.append(button);
            }

            console.log("Menu: создан MainMenu");//todo
            return container;
        }

        let section;


        switch (state) {
            case "main_menu":
                section = createMainMenu();
                break;
            case "game_settings":
                break;
            case "options":
                break;
            case "controls":
                break;
            case "high_scores":
                break;
            case "game":
                break;
            case "game_menu":
                break;

        }
        console.log("Menu: создана секция " + state);//todo
        return section;
    }

    self.createMenuWindow = function (state) {
        console.log("Menu: создается MenuWindow");//todo

        let menuWindow = document.createElement("div");
        menuWindow.id = elements.menu_window.id;
        menuWindow.className = elements.menu_window.class;

        let logo = document.createElement("span");
        logo.className = elements.menu_window.logo_class;
        logo.innerHTML = elements.menu_window.logo;

        menuWindow.append(logo);
        menuWindow.append(createMenuSection(state));
        console.log("Menu: создан MenuWindow");//todo
        return menuWindow;
    }

    console.log("Menu: отработал конструктор");//todo
}

// let createStartMenu=function (gameObj)
// {
//     console.log("создаю секцию start")
//
//     let buttons = {
//         easy: {class: "menu_btn", id: "easy_mode_btn", text: "EASY", value: "easy"},
//         medium: {class: "menu_btn", id: "medium_btn", text: "MEDIUM", value: "medium"},
//         hard: {
//             class: "menu_btn",
//             id: "hard_btn",
//             text: "HARD",
//             value: "hard"
//         },
//         play: {
//             class: "menu_btn",
//             id: "play_btn",
//             text: "PLAY"
//         },
//         return: {class: "menu_btn", id: "return_btn", text: "RETURN"},
//     };
//
//     let section = document.createElement("div");
//     section.setAttribute("id", "start_menu_section");
//     section.className = "menu_section";
//
//     let text = document.createElement("span");
//     text.className = "menu_section_name";
//     text.innerHTML = "SELECT MODE";
//
//     section.append(text);
//
//     for (let key in buttons) {
//         let button = document.createElement("button");
//         button.id = `${buttons[key].id}`;
//         button.className = `${buttons[key].class}`;
//         button.type = "button";
//         button.innerHTML = `${buttons[key].text}`;
//         button.value = `${buttons[key].value}`;
//         if (buttons[key].value === gameObj.getCurrentMode()) {
//             button.append(this.#images[key]);
//         }
//
//         section.append(button);
//     }
//     console.log("возвращаю готовую секцию меню start: " + section)
//     return section;
// }
//
//
// #createMainMenu()
// {
//
//
//
//
//     menu_window.append(section);
//     console.log("возвращаю готовое окно: " + menu_window)
//     return menu_window;
// }
//

let menu=new Menu();
let el=menu.createMenuWindow("main_menu");
document.body.append(el);
console.log("Menu.js: окончено чтение файла");
