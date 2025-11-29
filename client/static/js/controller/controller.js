export class Controller {
    constructor(game) {
        this.game = game;

        this.directions = {
            'ArrowUp': 'up',
            'ArrowDown': 'down',
            'ArrowLeft': 'left',
            'ArrowRight': 'right'
        };

        this.setupEventListeners();
    }

    setupEventListeners() {

    }
}