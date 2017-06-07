import Player from "./player/Player";
import Checkpoint from "./checkpoint/Checkpoint";
import Util from "./utils/Util";
import Platform from "./platform/Platform";

class Game {

  private static instance: Game;

  private util: Util;

  private player: Player;
  private checkpoint1: Checkpoint;
  private platform: Platform;

  private constructor() {
    this.util = new Util();
    this.player = new Player();
    this.checkpoint1 = new Checkpoint(16);
    this.platform = new Platform();

    requestAnimationFrame(() => this.gameLoop());
  }

  public static getInstance = (): Game => {
    if (!Game.instance) {
      Game.instance = new Game();
    }
    return Game.instance;
  };

  gameLoop = (): void => {
    console.log(this.player.verVel);
    this.player.draw();
    // Checkpoint collision
    if(this.util.checkCollision(this.player, this.checkpoint1)){
      this.gameEnd();
    }
    // Platform collision
    this.util.checkForPlatformCollision(this.player, this.platform);
    this.util.checkForScreenBorders(this.player);
    // Loop the game
    requestAnimationFrame(() => this.gameLoop());
  };

  gameEnd = (): void => {
    this.checkpoint1.endGame();
    this.player = null;
    this.checkpoint1 = null;
    this.player.element.removeChild(this.player.element);
    this.checkpoint1.element.removeChild(this.checkpoint1.element);
  }
}

// hier starten we de applicatie
window.addEventListener("load", function () {
  let game = Game.getInstance();
});
