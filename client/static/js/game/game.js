import { Controller } from "../controller/controller.js";
import { GameBoard } from "../view/board/gameBoard.js"

export class Game {
    constructor() {
        this.lastTime = 0;
        this.deltaTime = 0;
        this.timeRemaining = 180;
        this.currentTimePerSeconde = null;

        this.ui = null;
        this.gameBoard = new GameBoard(this);
        this.controller = new Controller(this);

        this.player = null;
        this.ghosts = null;
        
        this.score = 0;
        this.maxScore = 0;
        this.lives = 5;

        this.animationFrameId = null;
        this.gameLoop = this.gameLoop.bind(this);
    }

    init() {
        console.log('Initializing game...');

        this.gameBoard.createBoard();

        this.startGameLoop();

        console.log('Game initialized successfully');
    }

    startGameLoop() {
        this.lastTime = performance.now();
        this.animationFrameId = requestAnimationFrame((timestamp) => this.gameLoop(timestamp)); //
    }

    cancelGameLoop() {
        cancelAnimationFrame(this.animationFrameId);
    }

    gameLoop(timestamp) {
        if (!this.lastTime) this.lastTime = timestamp;

        // Calculate delta time (time between frames)
        this.deltaTime = (timestamp - this.lastTime) / 1000;
        this.lastTime = timestamp;

        if (this.deltaTime > 0.1) this.deltaTime = 0.1;

        this.timeRemaining -= this.deltaTime;
        if (this.currentTimePerSeconde != Math.ceil(this.timeRemaining)) {
            this.currentTimePerSeconde = Math.ceil(this.timeRemaining);
            console.log(Math.ceil(this.timeRemaining))
        };

        this.animationFrameId = requestAnimationFrame((timestamp) => this.gameLoop(timestamp));
    }
}