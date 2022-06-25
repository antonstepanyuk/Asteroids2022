"use strict";

class Spaceship{
    containerCNVS=null;
    skinIMG=null;
    x=0;
    y=0;
    dX=0;
    dY=0;
    angle=0;
    dAngle=0;
    life=1;

    constructor(containerCNVS,skinIMG) {
        this.containerCNVS=containerCNVS;
        this.x=containerCNVS.offsetWidth/2;
        this.y=containerCNVS.offsetHeight/2;


    }

    draw(){

    }
    // let ship = new Image();
// ship.src = "../images/spaceships/spaceShip001.png";
// ship.onload = start;

}