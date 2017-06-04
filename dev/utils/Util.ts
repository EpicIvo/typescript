import HitRight from "../player/player-states/HitRight";
import HitLeft from "../player/player-states/HitLeft";
import Move from "../player/player-states/Move";

export default class Util {
  checkCollision = (instance1: any, instance2: any): boolean => {
    if (
      instance1.xPos < instance2.xPos + instance2.width &&
      instance1.xPos + instance1.width > instance2.xPos &&
      instance1.yPos < instance2.yPos + instance2.height &&
      instance1.height + instance1.yPos > instance2.yPos
    ) {
      return true;
    }
  }
  checkForScreenBorders = (player: any): void => {
    // Left and right
    if (player.xPos + (player.width * 1.40) > window.innerWidth) { // Ugly af tho
      player.Behaviour = new HitRight(player);
    } else if (player.xPos + (player.width * 0.15) < 0) {
      player.Behaviour = new HitLeft(player);
    } else {
      player.Behaviour = new Move(player);
    }
  };
}
