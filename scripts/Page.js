"use strict";

function Page() {
    let self = this;
    let pageDOM = document.body;
    let menuDOM = null;
    let gameDOM = null;
    let loadingDOM = null;
    let currentState = "";
    let currentDOM = null;
    let scriptSrc = {
        PageView: "/scripts/PageView.js",
        PageController: "/scripts/PageController.js",
        Space: "/scripts/Space.js",
        ResourceLoader: "/scripts/ResourceLoader.js",
        Menu: "/scripts/Menu.js",
        Asteroid: "/scripts/Asteroid.js",
        Spaceship: "/scripts/Spaceship.js",
        PlayersSpaceship: "/scripts/PlayersSpaceship.js",
        UFO: "/scripts/UFO.js",
        Game: "/scripts/Game.js"
    };
    let view = null;//todo
    let controller = null;//todo
    let space = null;
    let resourceLoader = null;
    let menu = null;
    let game = null;

    let switchEvent = new Event("state_switched", {bubbles: true});
    let readyToSwitch = new Event("ready_to_switch", {bubbles: true});
    let gameStart = new Event("game_start", {bubbles: true});

    let states = [//todo is mobile orientation
        "main_menu",//todo start,options,controls,scores,credits,exit
        "game_settings",//todo mode,skins,return, play, new game, saves, username
        "options",//todo sounds,music,vibration,fullscreen, return
        "controls",//todo show controls, change, mobile controls
        "high_scores",//todo table select user
        "game",//todo score,lives,ships,audio,asteroids,laser
        "game_menu"//todo game menu
        //todo PAGE EXITS!!!!!

    ];

    self.getPageDOM = function () {
        return pageDOM;
    }

    self.getCurrentState = function () {
        return currentState;
    }

    self.getResourceLoaderObj = function () {
        return resourceLoader;
    }
    self.getMenuObj = function () {
        return menu;
    }
    self.getGameObj = function () {
        return game;
    }

    self.startGame = function () {
        let mode = game.getOption("mode");
        let skin = game.getOption("skin");
        if (mode && skin) {
            page.switchState("game");
        }
        if (!mode) {
            view.showAlert("mode_message");
        }
        if (!skin) {
            view.showAlert("skin_message");
        }
    }

    self.switchMode = function (mode) {
        game.setOption("mode", mode);
        view.hideAlert("mode_message");
    }

    self.switchSkin = function (skin) {
        game.setOption("skin", skin);
        view.hideAlert("skin_message");
    }

    self.switchState = function (newState) {
        window.location.hash = newState;
    }

    self.updateState = function () {
        let hash = window.location.hash;
        let state = hash.substring(1);
        if (!state) {
            self.switchState("main_menu");
        } else if (states.includes(state)) {//todo game to game menu
            currentState = state;
            showState(currentState);
        } else {
            self.switchState(currentState);
        }
    }

    let loadScript = function (src) {
        return new Promise(function (resolve, reject) {
            let script = document.createElement("script");
            script.type = "text/javascript";
            script.src = src;

            script.onload = () => resolve(script);
            script.onerror = () => reject(new Error(`Ошибка загрузки скрипта ${src}`));

            document.head.append(script);
        });
    }

    let initializeApp = function () {

        loadScript(scriptSrc.PageView)
            .then(result => {
                view = new PageView(self, pageDOM);
                loadScript(scriptSrc.PageController)
                    .then(result => {
                        controller = new PageController(self, pageDOM);
                    }, reject => console.log(reject));
            }, reject => console.log(reject));

        loadScript(scriptSrc.Space)
            .then(result => {
                space = new Space();
            }, reject => console.log(reject));

        loadScript(scriptSrc.ResourceLoader)
            .then(result => {
                resourceLoader = new ResourceLoader();
            }, reject => console.log(reject));

        loadScript(scriptSrc.Menu)
            .then(result => {
                menu = new Menu();
            }, reject => console.log(reject));

        loadScript(scriptSrc.Asteroid)
            .then(result => {
            }, reject => console.log(reject));

        loadScript(scriptSrc.Spaceship)
            .then(result => {
            }, reject => console.log(reject));

        loadScript(scriptSrc.PlayersSpaceship)
            .then(result => {
            }, reject => console.log(reject));

        loadScript(scriptSrc.UFO)
            .then(result => {
            }, reject => console.log(reject));

        loadScript(scriptSrc.Game)
            .then(result => {
                game = new Game();
            }, reject => console.log(reject));
    }

    self.showSpace = function () {
        view.showSpace(space.getSpaceDOM());
    }

    self.showLoading = function () {
        loadingDOM = document.createElement("span");
        loadingDOM.className = "loading";
        loadingDOM.innerHTML = "LOADING, PLEASE WAIT";
        view.showLoading(loadingDOM);
    }

    self.hideLoading = function () {
        view.hideLoading(loadingDOM);
    }

    let showState = function (state) {
        switch (state) {
            case "main_menu":
            case "game_settings":
            case "options":
            case "controls":
            case "high_scores":
            case "game_menu":
                menuDOM = menu.createMenu(state);
                if (currentDOM) {
                    currentDOM.dispatchEvent(readyToSwitch);
                }
                view.showState(currentDOM, menuDOM);
                menuDOM.dispatchEvent(switchEvent);
                currentDOM = menuDOM;
                break;
            case "game":
                gameDOM = game.getGameDOM();
                if (!currentDOM) {
                    self.switchState("main_menu");
                    return;
                } else {
                    currentDOM.dispatchEvent(readyToSwitch);
                }
                view.showState(currentDOM, gameDOM);
                gameDOM.dispatchEvent(gameStart);
                currentDOM = gameDOM;
                break;
        }
    }

    initializeApp();
}


//

let page = new Page();

