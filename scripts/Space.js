"use strict";

class Space {
    amount = 200;
    size = {
        min: 1,
        max: 8
    }
    duration = {
        min: 5,
        max: 15,
    }
    #spaceContainerDOM=null;
    starClassNameStr = "star";
    spaceClassNameStr = "space";

    constructor() {
        this.#createSpace();
    }

    getSpaceContainerDOM(){
        return this.#spaceContainerDOM;
    }

    #createSpace() {
        function getRandomIntInclusive(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        function getRandomArbitrary(min, max) {
            return Math.random() * (max - min) + min;
        }

        this.#spaceContainerDOM = document.createElement("div");
        this.#spaceContainerDOM.className = this.spaceClassNameStr;

        for (let i = 0; i < this.amount; i++) {
            let star = document.createElement("div");
            star.className = this.starClassNameStr;
            let size = getRandomIntInclusive(this.size.min, this.size.max);
            star.style.cssText = `
                width: ${size}px;
                height: ${size}px;
                left: ${getRandomArbitrary(0, 100)}%;
                top: ${getRandomArbitrary(0, 100)}%;
                box-shadow: 0 0 ${size}px ${size / 2}px #023c5d;
                animation-duration: ${getRandomIntInclusive(this.duration.min, this.duration.max)}s;`;
            this.#spaceContainerDOM.append(star);
        }
    }
}