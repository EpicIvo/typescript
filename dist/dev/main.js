"use strict";
const Player_1 = require("./player/Player");
const Checkpoint_1 = require("./checkpoint/Checkpoint");
const Util_1 = require("./utils/Util");
class Game {
    constructor() {
        this.gameLoop = () => {
            if (this.util.checkCollision(this.player, this.checkpoint1)) {
                this.gameEnd();
            }
            this.player.draw();
            // Loop the game
            requestAnimationFrame(() => this.gameLoop());
        };
        this.gameEnd = () => {
            this.checkpoint1.endGame();
            this.player = null;
            this.player.element.removeChild(this.player.element);
        };
        this.util = new Util_1.default();
        this.player = new Player_1.default();
        this.checkpoint1 = new Checkpoint_1.default(16);
        requestAnimationFrame(() => this.gameLoop());
    }
}
Game.getInstance = () => {
    if (!Game.instance) {
        Game.instance = new Game();
    }
    return Game.instance;
};
// hier starten we de applicatie
window.addEventListener("load", function () {
    let game = Game.getInstance();
});
//# sourceMappingURL=main.js.map