"use strict";

console.log("Space.js: начато чтение файла");//todo

function Space() {
    console.log("Space: вызван конструктор");//todo
    let self = this;
    let container=document.body;

    let createSpaceDOM = function () {
        console.log("Space: начато создание и наполнение container");//todo
        let amount = 200;
        let size = {
            min: 1,
            max: 8
        };
        let duration = {
            min: 5,
            max: 15,
        };
        let starClass = "star";
        let spaceClass = "space";

        function getRandomIntInclusive(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        function getRandomArbitrary(min, max) {
            return Math.random() * (max - min) + min;
        }

        let container = document.createElement("div");
        console.log("Space: создан container");//todo
        container.className = spaceClass;
        console.log("Space: наполняется container");//todo
        for (let i = 0; i < amount; i++) {
            let star = document.createElement("div");
            star.className = starClass;
            let starSize = getRandomIntInclusive(size.min, size.max);
            star.style.cssText = `
                width: ${starSize}px;
                height: ${starSize}px;
                left: ${getRandomArbitrary(0, 100)}%;
                top: ${getRandomArbitrary(0, 100)}%;
                box-shadow: 0 0 ${starSize}px ${starSize / 2}px #023c5d;
                animation-duration: ${getRandomIntInclusive(duration.min, duration.max)}s;`;
            container.append(star);
        }
        console.log("Space: оконченно создание и наполнение container");//todo
        return container;
    }
    self.showSpace = function () {
        console.log("Space:  запрошено отображение container");//todo
        view.showSpace(spaceDOM);
    }

    let spaceDOM = createSpaceDOM();
    let view = new SpaceView(self, container);
    let controller = new SpaceController(self, container);
    console.log("Space: отработал конструктор");//todo
}

function SpaceView(modelObj, containerDOM) {
    console.log("SpaceView: вызван конструктор");//todo
    let self = this;
    let model=modelObj;
    let container=containerDOM;

    self.showSpace = function (spaceDOM) {
        container.append(spaceDOM);
        console.log("SpaceView: containerDOM подключен к DOM ");//todo
    }
    console.log("SpaceView: отработал конструктор");//todo
}

function SpaceController(modelObj, containerDOM) {
    console.log("SpaceController: вызван конструктор");//todo
    let self = this;
    let model=modelObj;
    let container=containerDOM;

    let showSpace = function () {
        console.log("SpaceController: запрашивается отображение containerDOM");//todo
        if (document.readyState === 'loading') {
            // ещё загружается, ждём события//todo
            console.log("SpaceController: устанавливается событие DOMContentLoaded");//todo
            document.addEventListener('DOMContentLoaded', model.showSpace);
        } else {
            // DOM готов!//todo
            console.log("SpaceController: DOMContentLoaded, запрашивается отображение");//todo
            model.showSpace();
        }
    }
    showSpace();
    console.log("SpaceController: отработал конструктор");//todo
}


let spaceObj = new Space();

console.log("Space.js: окончено чтение файла");
