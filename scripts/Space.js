"use strict";

console.log("Space.js: начато чтение файла");//todo
class Space {
    #controllerObj = null;
    #viewObj = null;
    // #pageContainerDOM = document.body;
    #containerDOM = null;
    #starClassNameStr = "star";
    #spaceClassNameStr = "space";
    #amount = 200;
    #size = {
        min: 1,
        max: 8
    }
    #duration = {
        min: 5,
        max: 15,
    }

    constructor() {
        console.log("Space: вызван конструктор");//todo
        this.#createContainerDOM();
        this.#viewObj = new SpaceView(this, this.#containerDOM);
        this.#controllerObj = new SpaceController(this, this.#containerDOM);
        console.log("Space: отработал конструктор");//todo
    }

    // getPageContainerDOM() {
    //     console.log("Space: запрошен containerDOM");//todo
    //     return this.#pageContainerDOM;
    // }

    #createContainerDOM() {
        console.log("Space: начато создание и наполнение containerDOM");//todo
        function getRandomIntInclusive(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        function getRandomArbitrary(min, max) {
            return Math.random() * (max - min) + min;
        }

        this.#containerDOM = document.createElement("div");
        console.log("Space: создан containerDOM");//todo
        this.#containerDOM.className = this.#spaceClassNameStr;
        console.log("Space: наполняется containerDOM");//todo
        for (let i = 0; i < this.#amount; i++) {
            let star = document.createElement("div");
            star.className = this.#starClassNameStr;
            let size = getRandomIntInclusive(this.#size.min, this.#size.max);
            star.style.cssText = `
                width: ${size}px;
                height: ${size}px;
                left: ${getRandomArbitrary(0, 100)}%;
                top: ${getRandomArbitrary(0, 100)}%;
                box-shadow: 0 0 ${size}px ${size / 2}px #023c5d;
                animation-duration: ${getRandomIntInclusive(this.#duration.min, this.#duration.max)}s;`;
            this.#containerDOM.append(star);
        }
        console.log("Space: оконченно создание и наполнение containerDOM");//todo
    }

    showSpace() {
        console.log("Space:  запрошено отображение containerDOM");//todo
        this.#viewObj.showSpace();
    }
}

class SpaceView {
    #modelObj = null;
    #containerDOM = null;

    constructor(modelObj, containerDOM) {
        console.log("SpaceView: вызван конструктор");//todo
        this.#modelObj = modelObj;
        this.#containerDOM = containerDOM;
        console.log("SpaceView: отработал конструктор");//todo
    }

    showSpace() {
        // this.#spaceObj.getPageContainerDOM().append(this.#containerDOM);
       document.body.append(this.#containerDOM);
        console.log("SpaceView: containerDOM подключен к DOM ");//todo
    }
}

class SpaceController {
    #modelObj = null;
    #containerDOM = null;

    constructor(modelObj, containerDOM) {
        console.log("SpaceController: вызван конструктор");//todo
        this.#modelObj = modelObj;
        this.#containerDOM = containerDOM;
        this.#showSpace();
        console.log("SpaceController: отработал конструктор");//todo
    }

    #showSpace(){
        console.log("SpaceController: запрашивается отображение containerDOM");//todo
        if (document.readyState == 'loading') {
            // ещё загружается, ждём события//todo
            console.log("SpaceController: устанавливается событие DOMContentLoaded");//todo
            document.addEventListener('DOMContentLoaded', this.#modelObj.showSpace());
        } else {
            // DOM готов!//todo
            console.log("SpaceController: DOMContentLoaded, запрашивается отображение");//todo
            this.#modelObj.showSpace()
        }
    }
}




let spaceObj = new Space();

console.log("Space.js: окончено чтение файла");
