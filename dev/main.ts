import Player from "./player/Player";
import Checkpoint from "./checkpoint/Checkpoint";
import Util from "./utils/Util";
import Platform from "./platform/Platform";

class Game {

  private static instance: Game;

  private util: Util;

  private player: Player;
  private checkpoint: Checkpoint;
  private platform: Platform;

  private constructor() {
    this.util = new Util();
    this.player = new Player();
    this.checkpoint = new Checkpoint();
    this.platform = new Platform(150, 3);

    this.player.subscribe(this.checkpoint);

    requestAnimationFrame(() => this.gameLoop());
  }

  public static getInstance = (): Game => {
    if (!Game.instance) {
      Game.instance = new Game();
    }
    return Game.instance;
  };

  gameLoop = (): void => {
    this.player.draw();
    // Checkpoint collision
    if (this.util.checkCollision(this.player, this.checkpoint)) {
      this.checkpoint.element.remove();
      this.player.timeToLive += 1;
      this.player.score += 1;
      this.checkpoint = new Checkpoint();
      this.player.subscribe(this.checkpoint);
    }
    //Times up?
    if (this.player.timesUp) {
      this.player.endGame();
      this.gameEnd();
      document.getElementById('timer').innerHTML = "Score: " + this.player.score;
    }
    // Platform collision
    this.util.checkForPlatformCollision(this.player, this.platform);
    this.util.checkForScreenBorders(this.player);
    // Loop the game
    requestAnimationFrame(() => this.gameLoop());
  };

  gameEnd = (): void => {
    this.player.unsubscribe(this.checkpoint);
    this.player.endGame();
    this.player.element.remove();
    this.platform.element.remove();
    this.checkpoint.element.remove();
    document.body.style.fontSize = '150px';
  }
}

// hier starten we de applicatie
window.addEventListener("load", function () {
  let game = Game.getInstance();
});
