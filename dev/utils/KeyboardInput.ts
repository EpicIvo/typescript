import Player from "../player/Player";
import Keyboard from "./KeyInputs";

namespace keyHandlers {
  export class KeyboardInput {

    private player: Player;

    constructor(player: Player) {
      this.player = player;
    }

    public keyboardDownEventListener = (event: KeyboardEvent): void => {
      switch (event.keyCode) {
        case Keyboard.RIGHT:
          this.player.DPressed = true;
          break;
        case Keyboard.LEFT:
          this.player.horVel *= -1;
          this.player.APressed = true;
          break;
        case Keyboard.UP:
          this.player.spacebarPressed = true;
          break;
        default:
          break;
      }
    };

    public keyboardUpEventListener = (event: KeyboardEvent): void => {
      switch (event.keyCode) {
        case Keyboard.RIGHT:
          this.player.DPressed = false;
          break;
        case Keyboard.LEFT:
          this.player.APressed = false;
          break;
        case Keyboard.UP:
          this.player.spacebarPressed = false;
          break;
        default:
          break;
      }
    };
  }
}

export default keyHandlers;
