import Player from "./player/Player";
import Checkpoint from "./checkpoint/Checkpoint";

class Game {
  constructor() {
    let player1: Player = new Player();
    let checkpoint1: Checkpoint = new Checkpoint(16);
    this.gameLoop();
  }

  gameLoop = (): void => {
    requestAnimationFrame(this.gameLoop);
  }
}

// hier starten we de applicatie
window.addEventListener("load", function () {
  new Game();
});
