"use strict";

class Page {
    #viewObj = null;
    #controllerObj = null;
    #containerDOM = null;
    #currentHashStr = null;
    #spaceObj = null;
    #pageHashes=
        {
            menu:"MENU",
        };

    constructor() {
    }

    initialize() {
        this.#createContainerDOM();
        this.#viewObj = new PageView(this, this.#containerDOM);
        this.#controllerObj = new PageController(this, this.#containerDOM);
        this.#spaceObj = new Space();
        this.#showBackground();
        this.switchPageSection();
    }

    #createContainerDOM() {
        this.#containerDOM = document.createElement("div");
        this.#containerDOM.setAttribute("id", "container");
        this.#containerDOM.className = "container";
        document.body.append(this.#containerDOM);
    }

    #showBackground() {
        this.#viewObj.showBackground(this.#spaceObj);
    }

    switchPageSection() {
        let urlHashStr = window.location.hash;
        let newHashStr = urlHashStr.substring(1);
        console.log(`пытаюсь перейти на "${newHashStr}"`)

        if (newHashStr === this.#currentHashStr) {
            console.log(`тот же хэш новый ${newHashStr} и старый ${this.#currentHashStr}`)
            return;
        }
        if (newHashStr in this.#pageHashes) {
            this.#currentHashStr = newHashStr;
            console.log(`перехожу на "${newHashStr}"`)
        } else {
            this.#currentHashStr = this.#pageHashes.menu  ;
            console.log(`перехожу на "${this.#currentHashStr}"`)
        }
        this.#viewObj.showPageSection(this.#currentHashStr);
    }

}

class PageController {
    #modelObj = null;
    #elementDOM = null;

    constructor(modelObj, elementDOM) {
        this.#modelObj = modelObj;
        this.#elementDOM = elementDOM;
        window.addEventListener("hashchange", this.#modelObj.switchPageSection.bind(this.#modelObj));
    }

}

class PageView {
    #modelObj = null;
    #elementDOM = null;

    constructor(modelObj, elementDOM) {
        this.#modelObj = modelObj;
        this.#elementDOM = elementDOM;
    }

    showBackground(spaceObj) {
        this.#elementDOM.append(spaceObj.getSpaceContainerDOM());
    }

    showPageSection(hashStr) {
        // location.hash=hashStr;
        switch (hashStr) {
            case "111":
                console.log("перешел 111");
                break;
            case "222":
                console.log("перешел 222");
                break;
            default:
                console.log(`перешел на "${hashStr}"`)
                break;
        }
    }
}

//
// class PageView {
//         ;
//     }
//
//
//
//
//     }
// }


