import Player from "./player/Player";
import Checkpoint from "./checkpoint/Checkpoint";
import Util from "./utils/Util";

class Game {

  private util: Util;

  private player: Player;
  private checkpoint1: Checkpoint;

  constructor() {
    this.util = new Util();
    this.player = new Player();
    this.checkpoint1 = new Checkpoint(16);
    requestAnimationFrame(() => this.gameLoop());
  }

  gameLoop = (): void => {
    if(this.util.checkCollision(this.player, this.checkpoint1)){
      this.gameEnd();
    }
    this.player.draw();
    // Loop the game
    requestAnimationFrame(() => this.gameLoop());
  }

  gameEnd = (): void => {
    this.checkpoint1.endGame();
  }

}

// hier starten we de applicatie
window.addEventListener("load", function () {
  new Game();
});
