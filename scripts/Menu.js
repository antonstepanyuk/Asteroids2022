"use strict";

function Menu() {
    let self = this;
    let menuDOM = null;
    //     game_settings: "game_start",//todo mode,skins,return, play, new game, saves, username

    let elements = {
        menu_window: {
            id: "menu_window",
            class: "menu_window",
            logo_class: "logo",
            logo: "ASTEROIDS2022"
        },
        main_menu: {
            class: "menu_section",
            id: "main_menu_section",
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
        game_settings: {
            class: "game_settings_menu_section",
            id: "game_settings_section",
            name_class: "menu_section_name",
            text: "GAME SETTINGS",
            mode_section: {
                class: "mode_section",
                id: "mode_section",
                name_class: "game_settings_name",
                text: "SELECT MODE",
                buttons: {
                    easy: {class: "mode_section_btn", id: "easy_btn", name: "mode", value: "easy", text: "EASY"},
                    medium: {
                        class: "mode_section_btn",
                        id: "medium_btn",
                        name: "mode",
                        value: "medium",
                        text: "MEDIUM"
                    },
                    hard: {class: "mode_section_btn", id: "hard_btn", name: "mode", value: "hard", text: "HARD"},
                },
                error: {
                    class:"message",
                    id: "mode_message",
                    icon_span: {class: "error material-icons", text: "warning_amber"},
                }
            },
            skin_section: {
                class: "skin_section",
                id: "skin_section",
                name_class: "game_settings_name",
                text: "SELECT YOUR SPACESHIP",
                buttons: {
                    spaceship_blue: {
                        class: "skin_section_btn",
                        id: "spaceship_blue",
                        name: "skin",
                        value: "spaceship_blue"
                    },//todo
                    spaceship_green: {
                        class: "skin_section_btn",
                        id: "spaceship_green",
                        name: "skin",
                        value: "spaceship_green"
                    },//todo
                    spaceship_orange: {
                        class: "skin_section_btn",
                        id: "spaceship_orange",
                        name: "skin",
                        value: "spaceship_orange"
                    },//todo
                },
                error: {
                    class:"message",
                    id: "skin_message",
                    icon_span: {class: "error material-icons", text: "warning_amber"},
                }
            },
            buttons: {
                play: {class: "main_menu_btn", id: "play_btn", text: "PLAY"},
                return: {class: "main_menu_btn", id: "return_btn", text: "RETURN"},
            }
        },
        options: {},
        controls: {},
        high_scores: {},
        credits: {},
        game: {},
        game_menu: {}
    };
//     <span className="material-icons">
// done
// </span>
//     <span className="material-icons">
// screen_rotation
// </span>
//     <span className="material-icons">
// toggle_on
// </span>
//     <span className="material-icons">
// toggle_off
// </span>
//     <span className="material-icons">
// volume_up
// </span>
//     <span className="material-icons">
// volume_off
// </span>
//     <span className="material-icons">
// warning_amber
// </span>
//     <span className="material-icons">
// smartphone
// </span>
//     <span className="material-icons">
// vibration
// </span>
//     <span className="material-icons">
// edgesensor_high
// </span>
//     <span className="material-icons">
// no_cell
// </span>
//     <span className="material-icons">
// check_box
// </span>
//     <span className="material-icons">
// disabled_by_default
// </span>
//     <span className="material-icons">
// favorite
// </span>
//     <span className="material-icons">
// favorite_border
// </span>
//     <span className="material-icons">
// mobile_off
// </span>

    let createMainMenu = function () {
        let mainMenu = document.createElement("div");
        mainMenu.id = elements.main_menu.id;
        mainMenu.className = elements.main_menu.class;

        let mainMenuName = document.createElement("span");
        mainMenuName.className = elements.main_menu.name_class;
        mainMenuName.innerHTML = elements.main_menu.text;

        mainMenu.append(mainMenuName);

        for (let key in elements.main_menu.buttons) {

            let mainMenuButton = document.createElement("button");
            mainMenuButton.id = elements.main_menu.buttons[key].id;
            mainMenuButton.className = elements.main_menu.buttons[key].class;
            mainMenuButton.type = "button";
            mainMenuButton.innerHTML = elements.main_menu.buttons[key].text

            mainMenu.append(mainMenuButton);
        }
        return mainMenu;
    }

    let createGameSettings = function () {//todo
        let gameSettings = document.createElement("div");
        gameSettings.id = elements.game_settings.id;
        gameSettings.className = elements.game_settings.class;

        let gameSettingsName = document.createElement("span");
        gameSettingsName.className = elements.game_settings.name_class;
        gameSettingsName.innerHTML = elements.game_settings.text;

        gameSettings.append(gameSettingsName);


        let modeSection = document.createElement("div");
        modeSection.id = elements.game_settings.mode_section.id;
        modeSection.className = elements.game_settings.mode_section.class;

        gameSettings.append(modeSection);

        let modeSectionName = document.createElement("span");
        modeSectionName.className = elements.game_settings.mode_section.name_class;
        modeSectionName.innerHTML = elements.game_settings.mode_section.text;

        modeSection.append(modeSectionName);

        let game = page.getGameObj();//todo

        let modeButtonDiv = document.createElement("div");

        for (let key in elements.game_settings.mode_section.buttons) {
            let modeInput = document.createElement("input");
            modeInput.type = "radio";
            modeInput.id = elements.game_settings.mode_section.buttons[key].id;
            modeInput.className = elements.game_settings.mode_section.buttons[key].class;
            modeInput.name = elements.game_settings.mode_section.buttons[key].name;
            modeInput.value = elements.game_settings.mode_section.buttons[key].value;

            let modeLabel = document.createElement("label");
            modeLabel.setAttribute("for", elements.game_settings.mode_section.buttons[key].id);
            modeLabel.innerHTML = elements.game_settings.mode_section.buttons[key].text;

            modeButtonDiv.append(modeInput);
            modeButtonDiv.append(modeLabel);
        }

        modeSection.append(modeButtonDiv);

        let modeError = document.createElement("div");
        modeError.id = elements.game_settings.mode_section.error.id;
        modeError.className=elements.game_settings.mode_section.error.class;
        modeError.style.opacity = "0";

        gameSettings.append(modeError);

        let modeIcon = document.createElement("span");
        modeIcon.className = elements.game_settings.mode_section.error.icon_span.class;
        modeIcon.innerHTML = elements.game_settings.mode_section.error.icon_span.text;

        modeError.append(modeIcon);
        //
        // let modeMessage = document.createElement("span");
        // modeMessage.className = elements.game_settings.mode_section.error.message.class;
        // modeMessage.innerHTML = elements.game_settings.mode_section.error.message.text;
        //
        // modeError.append(modeMessage);

        let skinSection = document.createElement("div");
        skinSection.id = elements.game_settings.skin_section.id;
        skinSection.className = elements.game_settings.skin_section.class;

        gameSettings.append(skinSection);

        let skinSectionName = document.createElement("span");
        skinSectionName.className = elements.game_settings.skin_section.name_class;
        skinSectionName.innerHTML = elements.game_settings.skin_section.text;

        skinSection.append(skinSectionName);

        let resourceLoader = page.getResourceLoaderObj();

        let skinButtonDiv = document.createElement("div");

        for (let key in elements.game_settings.skin_section.buttons) {

            let skinInput = document.createElement("input");
            skinInput.type = "radio";
            skinInput.id = elements.game_settings.skin_section.buttons[key].id;
            skinInput.className = elements.game_settings.skin_section.buttons[key].class;
            skinInput.name = elements.game_settings.skin_section.buttons[key].name;
            skinInput.value = elements.game_settings.skin_section.buttons[key].value;

            let skinLabel = document.createElement("label");
            skinLabel.setAttribute("for", elements.game_settings.skin_section.buttons[key].id);
            skinLabel.append(resourceLoader.getImages().spaceships.full[key].img);

            skinButtonDiv.append(skinInput);
            skinButtonDiv.append(skinLabel);
        }

        skinSection.append(skinButtonDiv);

        let skinError = document.createElement("div");
        skinError.id = elements.game_settings.skin_section.error.id;
        skinError.className=elements.game_settings.skin_section.error.class;
        skinError.style.opacity = "0";

        gameSettings.append(skinError);

        let skinIcon = document.createElement("span");
        skinIcon.className = elements.game_settings.skin_section.error.icon_span.class;
        skinIcon.innerHTML = elements.game_settings.skin_section.error.icon_span.text;

        skinError.append(skinIcon);
        //
        // let skinMessage = document.createElement("span");
        // skinMessage.className = elements.game_settings.skin_section.error.message.class;
        // skinMessage.innerHTML = elements.game_settings.skin_section.error.message.text;
        //
        // skinError.append(skinMessage);

        for (let key in elements.game_settings.buttons) {
            let gameSettingsButton = document.createElement("button");
            gameSettingsButton.id = elements.game_settings.buttons[key].id;
            gameSettingsButton.className = elements.game_settings.buttons[key].class;

            gameSettingsButton.type = "button";
            gameSettingsButton.innerHTML = elements.game_settings.buttons[key].text;

            gameSettings.append(gameSettingsButton);
        }

        return gameSettings;
    }


    let createMenuDOM = function () {
        menuDOM = document.createElement("div");
        menuDOM.id = elements.menu_window.id;
        menuDOM.className = elements.menu_window.class;

        let logo = document.createElement("span");
        logo.className = elements.menu_window.logo_class;
        logo.innerHTML = elements.menu_window.logo;

        menuDOM.append(logo);
        return menuDOM;
    }


    self.createMenu = function (state) {
        // let states = {//todo is mobile orientation
        //     game_settings: "game_start",//todo mode,skins,return, play, new game, saves, username
        //     options: "options",//todo sounds,music,vibration,fullscreen, return
        //     controls: "controls",//todo show controls, change, mobile controls
        //     high_scores: "high_scores",//todo table select user
        //     game: "game",//todo score,lives,ships,audio,asteroids,laser
        //     game_menu: "game_menu"//todo game menu
        createMenuDOM();
        let section;
        switch (state) {
            case "main_menu":
                section = createMainMenu();
                break;
            case "game_settings":
                section = createGameSettings();
                break;
            case "options":
                break;
            case "controls":
                break;
            case "high_scores":
                break;
            case "game_menu":
                break;

        }
        menuDOM.append(section);
        return menuDOM;
    }
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
//