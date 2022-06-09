"use strict";

function toggleFullScreen(EO) {
    EO=EO||window.event;
    let element=EO.target||EO.srcElement;
    if(document.fullscreenElement){
        document.exitFullscreen();
    }else{
        element.requestFullscreen();
    }
}
