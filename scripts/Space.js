"use strict";

window.addEventListener("load", () => console.log("window loaded Space"));
document.addEventListener("DOMContentLoaded", () => console.log("DOMContentLoaded Space"));

console.log("Space.js: начато чтение файла");//todo

function Space() {
    console.log("Space: вызван конструктор");//todo
    let self = this;

    let createContainerDOM = function () {
        console.log("Space: начато создание и наполнение containerDOM");//todo
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
        console.log("Space: создан containerDOM");//todo
        container.className = spaceClass;
        console.log("Space: наполняется containerDOM");//todo
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
        console.log("Space: оконченно создание и наполнение containerDOM");//todo
        return container;
    }
    self.showSpace = function () {
        console.log("Space:  запрошено отображение containerDOM");//todo
        viewObj.showSpace();
    }

    let containerDOM = createContainerDOM();
    let viewObj = new SpaceView(self, containerDOM);
    let controllerObj = new SpaceController(self, containerDOM);

    console.log("Space: отработал конструктор");//todo
}

function SpaceView(modelObj, containerDOM) {
    console.log("SpaceView: вызван конструктор");//todo
    let self = this;

    self.showSpace = function () {
        document.body.append(containerDOM);
        console.log("SpaceView: containerDOM подключен к DOM ");//todo
    }
    console.log("SpaceView: отработал конструктор");//todo
}

function SpaceController(modelObj, containerDOM) {
    console.log("SpaceController: вызван конструктор");//todo
    let self = this;

    let showSpace = function () {
        console.log("SpaceController: запрашивается отображение containerDOM");//todo
        if (document.readyState === 'loading') {
            // ещё загружается, ждём события//todo
            console.log("SpaceController: устанавливается событие DOMContentLoaded");//todo
            document.addEventListener('DOMContentLoaded', modelObj.showSpace);
        } else {
            // DOM готов!//todo
            console.log("SpaceController: DOMContentLoaded, запрашивается отображение");//todo
            modelObj.showSpace();
        }
    }
    showSpace();
    console.log("SpaceController: отработал конструктор");//todo
}


let spaceObj = new Space();

console.log("Space.js: окончено чтение файла");
