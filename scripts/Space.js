"use strict";

function Space() {
    let self = this;
    let view =null;
    let controller = null;
    let spaceDOM=null;
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

    self.getSpaceDOM=function (){
        return spaceDOM;
    }

    let createSpaceDOM = function () {

        function getRandomIntInclusive(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        function getRandomArbitrary(min, max) {
            return Math.random() * (max - min) + min;
        }

        spaceDOM = document.createElement("div");
        spaceDOM.className = spaceClass;
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
            spaceDOM.append(star);
        }
    }

    createSpaceDOM();
}


