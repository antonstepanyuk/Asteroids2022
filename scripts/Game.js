"use strict";

function Game() {
    let self = this;

    let gameDOM = null;
    let controlsDOM = null;
    let canvas = null;
    let context = null;
    let asteroids = {};
    let lasers = {};

    let modeSpeed = {
        easy: 1,
        medium: 2,
        hard: 3
    };
    let options = {
        mode: "",
        skin:"",
        sounds: true,
        music: true,
        vibration: false,
        fullscreen: false
    };
    let controls = {
        accelerate: "w",
        rotate_left: "a",
        rotate_right: "d",
        fire: "space",
    };
    let elements = {
        game_window: {
            id: "game_window",
            class: "game_window",
        },
        interface: {
            lives: "",
            score: ""
        },
        buttons: {
            game_menu: {class: "_btn", id: "_btn", text: ""},
            controls: "",
        }
    };

    self.getGameDOM = function () {
        return gameDOM;
    }

    self.setOption = function (option, value) {
        options[option] = value;
    }

    self.getOption = function (option) {
        return options[option];
    }


    // self.updateState = function () {
    // }

    self.createGameDOM = function () {
        gameDOM = document.createElement("div");
        gameDOM.id = elements.game_window.id;
        gameDOM.className = elements.game_window.class;
    }
    // let createCanvas = function () {
    //     canvas = document.createElement("canvas");
    //     canvas.id = "canvas";
    //     canvas.className = "canvas";
    //     canvas.width = pageDOM.offsetWidth;
    //     canvas.height = pageDOM.offsetHeight;
    // }
    //
    // let createContext = function () {
    //     context = canvas.getContext("2d");
    // }


    // createGameDOM();
    // createCanvas();
    // createContext();
}

// function GameView(gameObj, gameContainerDOM) {
//     let self = this;
//     let game = gameObj;
//     let gameDOM = gameContainerDOM;
//
// }
//
// function GameController(gameObj, gameContainerDOM) {
//     let self = this;
//     let game = gameObj;
//     let gameDOM = gameContainerDOM;
//
//     window.addEventListener("hashchange", game.updateState);
// }

// // var canvas = document.getElementById("myCanvas");
// // var ctx = canvas.getContext("2d");
// // var ballRadius = 10;
// // var x = canvas.width/2;
// // var y = canvas.height-30;
// // var dx = 2;
// // var dy = -2;
// // var paddleHeight = 10;
// // var paddleWidth = 75;
// // var paddleX = (canvas.width-paddleWidth)/2;
// // var rightPressed = false;
// // var leftPressed = false;
// // var brickRowCount = 5;
// // var brickColumnCount = 3;
// // var brickWidth = 75;
// // var brickHeight = 20;
// // var brickPadding = 10;
// // var brickOffsetTop = 30;
// // var brickOffsetLeft = 30;
// // var score = 0;
// // var lives = 3;
// //
// // var bricks = [];
// // for(var c=0; c<brickColumnCount; c++) {
// //     bricks[c] = [];
// //     for(var r=0; r<brickRowCount; r++) {
// //         bricks[c][r] = { x: 0, y: 0, status: 1 };
// //     }
// // }
// //
// // document.addEventListener("keydown", keyDownHandler, false);
// // document.addEventListener("keyup", keyUpHandler, false);
// // document.addEventListener("mousemove", mouseMoveHandler, false);
// //
// // function keyDownHandler(e) {
// //     if(e.key == "Right" || e.key == "ArrowRight") {
// //         rightPressed = true;
// //     }
// //     else if(e.key == "Left" || e.key == "ArrowLeft") {
// //         leftPressed = true;
// //     }
// // }
// //
// // function keyUpHandler(e) {
// //     if(e.key == "Right" || e.key == "ArrowRight") {
// //         rightPressed = false;
// //     }
// //     else if(e.key == "Left" || e.key == "ArrowLeft") {
// //         leftPressed = false;
// //     }
// // }
// //
// // function mouseMoveHandler(e) {
// //     var relativeX = e.clientX - canvas.offsetLeft;
// //     if(relativeX > 0 && relativeX < canvas.width) {
// //         paddleX = relativeX - paddleWidth/2;
// //     }
// // }
// // function collisionDetection() {
// //     for(var c=0; c<brickColumnCount; c++) {
// //         for(var r=0; r<brickRowCount; r++) {
// //             var b = bricks[c][r];
// //             if(b.status == 1) {
// //                 if(x > b.x && x < b.x+brickWidth && y > b.y && y < b.y+brickHeight) {
// //                     dy = -dy;
// //                     b.status = 0;
// //                     score++;
// //                     if(score == brickRowCount*brickColumnCount) {
// //                         alert("YOU WIN, CONGRATS!");
// //                         document.location.reload();
// //                     }
// //                 }
// //             }
// //         }
// //     }
// // }
// //
// // function drawBall() {
// //     ctx.beginPath();
// //     ctx.arc(x, y, ballRadius, 0, Math.PI*2);
// //     ctx.fillStyle = "#0095DD";
// //     ctx.fill();
// //     ctx.closePath();
// // }
// // function drawPaddle() {
// //     ctx.beginPath();
// //     ctx.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight);
// //     ctx.fillStyle = "#0095DD";
// //     ctx.fill();
// //     ctx.closePath();
// // }
// // function drawBricks() {
// //     for(var c=0; c<brickColumnCount; c++) {
// //         for(var r=0; r<brickRowCount; r++) {
// //             if(bricks[c][r].status == 1) {
// //                 var brickX = (r*(brickWidth+brickPadding))+brickOffsetLeft;
// //                 var brickY = (c*(brickHeight+brickPadding))+brickOffsetTop;
// //                 bricks[c][r].x = brickX;
// //                 bricks[c][r].y = brickY;
// //                 ctx.beginPath();
// //                 ctx.rect(brickX, brickY, brickWidth, brickHeight);
// //                 ctx.fillStyle = "#0095DD";
// //                 ctx.fill();
// //                 ctx.closePath();
// //             }
// //         }
// //     }
// // }
// // function drawScore() {
// //     ctx.font = "16px Arial";
// //     ctx.fillStyle = "#0095DD";
// //     ctx.fillText("Score: "+score, 8, 20);
// // }
// // function drawLives() {
// //     ctx.font = "16px Arial";
// //     ctx.fillStyle = "#0095DD";
// //     ctx.fillText("Lives: "+lives, canvas.width-65, 20);
// // }
// //
// // function draw() {
// //     ctx.clearRect(0, 0, canvas.width, canvas.height);
// //     drawBricks();
// //     drawBall();
// //     drawPaddle();
// //     drawScore();
// //     drawLives();
// //     collisionDetection();
// //
// //     if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
// //         dx = -dx;
// //     }
// //     if(y + dy < ballRadius) {
// //         dy = -dy;
// //     }
// //     else if(y + dy > canvas.height-ballRadius) {
// //         if(x > paddleX && x < paddleX + paddleWidth) {
// //             dy = -dy;
// //         }
// //         else {
// //             lives--;
// //             if(!lives) {
// //                 alert("GAME OVER");
// //                 document.location.reload();
// //             }
// //             else {
// //                 x = canvas.width/2;
// //                 y = canvas.height-30;
// //                 dx = 3;
// //                 dy = -3;
// //                 paddleX = (canvas.width-paddleWidth)/2;
// //             }
// //         }
// //     }
// //
// //     if(rightPressed && paddleX < canvas.width-paddleWidth) {
// //         paddleX += 7;
// //     }
// //     else if(leftPressed && paddleX > 0) {
// //         paddleX -= 7;
// //     }
// //
// //     x += dx;
// //     y += dy;
// //     requestAnimationFrame(draw);
// // }
// //
// // draw();
//
// class Game {
//     // #modes={
//     //     easy:false,
//     //     medium:true,
//     //     hard:false
//     // }
//
//     #elementCNVS = null;
//     #contextCNVS = null;
//     #spaceShipObj = null;
//     #currentMode=null;
//     #currentScore=null;
//
//
//     constructor() {
//
//         this.#currentMode="medium";
//
//         console.log("готовлюсь к загрузке: space_ship.png")
//         this.#loadImage(this.#skinSrc)
//             .then(result => {
//                         this.#skin = result.value;
//                     }, reject => console.log(reject))
//         console.log("отработал конструктор: Game")
//     }
//
//     getCurrentMode(){
//         return this.#currentMode;
//     }
//     // getSkin(){
//     //     return this.#skin;
//     // }
//
//     #loadImage(src) {
//         return new Promise(function (resolve, reject) {
//             console.log("загружаю image " + src)
//             let image = document.createElement("img");
//             image.src = src;
//
//             image.onload = () => resolve(image);
//             image.onerror = () => reject(new Error(`Ошибка загрузки изображения ${image}`));
//
//             console.log("image загружен " + src)
//         });
//     }
//
//
//
// getElementCNVS(){
//     return this.#elementCNVS
// }
// initialize() {
//     this.createCanvas();
//
//     this.draw();
// }
//
//
//
// draw() {
//     this.#contextCNVS.clearRect(0, 0, this.#contextCNVS.width, this.#contextCNVS.height);
//
//     requestAnimationFrame(this.draw);
// }
//
//
// }
//
// function start() {
//     setInterval(draw, 10);
// }
//
// function draw() {
//     context.clearRect(0, 0, canvas.width, canvas.height);
//     // context.translate(x, x);
//     context.rotate(rotateAngle);
//     // context.drawImage(logoImage, 0, 0);
//     context.drawImage(ship, x += dx, y += dy);
// }
//
// menu_window.addEventListener("keydown", move);
// menu_window.addEventListener("keyup", stop);
//
//
// function move(EO) {
//     let key = EO.key;
//     switch (key) {
//         case "ArrowUp":
//             dy = -2;
//             break;
//         case "ArrowDown":
//             dy = 2;
//             break;
//         case "ArrowLeft":
//             rotateAngle = -1;
//             break;
//         case "ArrowRight":
//             rotateAngle = 1;
//             break;
//     }
// }
//
// function stop(EO) {
//     let key = EO.key;
//     switch (key) {
//         case "ArrowUp":
//         case "ArrowDown":
//             dy = 0;
//             break;
//         case "ArrowLeft":
//             // rotateAngle=-1;
//             break;
//         case "ArrowRight":
//             // rotateAngle=1;
//             break;
//     }
// }
//
// console.log("окончено чтение файла: Game.js")
