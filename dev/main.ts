import Player from "./player/Player";
import Checkpoint from "./checkpoint/Checkpoint";

class Game {

  private player:Player;
  private checkpoints: Array<Checkpoint> = [];

  constructor() {
    this.player = new Player();
    let checkpoints: Array<Checkpoint> = new Array<Checkpoint>(16);
    requestAnimationFrame(() => this.gameLoop());
  }

  gameLoop = (): void => {

    this.player.draw();
    // Loop the game
    requestAnimationFrame(() => this.gameLoop());
  }
}

// hier starten we de applicatie
window.addEventListener("load", function () {
  new Game();
});
