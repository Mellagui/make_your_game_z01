import { Game } from "./game/game.js"

const game = new Game();

document.addEventListener("DOMContentLoaded", () => {
    game.init();
});