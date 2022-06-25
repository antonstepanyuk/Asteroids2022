"use strict";

function PageView(pageObj, pageContainerDOM) {
    let self = this;
    let page = pageObj;
    let pageDOM = pageContainerDOM;
    // let menuDOM = page.getMenuDOM();
    // let gameDOM = page.getGameDOM();
    //

    self.showState = function (currentDOM,newDOM) {
        if(currentDOM){
            currentDOM.remove();
        }
        pageDOM.append(newDOM);
    }

    self.showSpace=function (spaceDOM){
        pageDOM.append(spaceDOM);
    }

    self.showLoading = function (loadingDOM) {
        pageDOM.append(loadingDOM);
    }
    self.hideLoading = function (loadingDOM) {
        loadingDOM.remove();
    }

    self.switchMode=function (elementDOM,className){
        elementDOM.className=className;
        // if(className)
    }

    self.showAlert=function (id){
        document.getElementById(id).style.opacity="0.8";
    }
    self.hideAlert=function (id){
        document.getElementById(id).style.opacity="0";
    }



}