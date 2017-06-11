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
    } else if (!player.collided) {
      player.Behaviour = new Move(player);
    }
  };
  checkForPlatformCollision = (player: any, platform: any): void => {

    if (player.xPos + player.width < platform.xPos + 20) {
      player.hitRightApplicable = true;
    } else {
      player.hitRightApplicable = false;
    }
    if (player.xPos > platform.xPos + platform.width - 30) {
      player.hitLeftApplicable = true;
    } else {
      player.hitLeftApplicable = false;
    }

    if (player.yPos + player.height > platform.yPos + platform.height) {
      player.hitBottomApplicable = true;
    } else {
      player.hitBottomApplicable = false;
    }
    if (player.height + player.yPos < platform.yPos) {
      player.hitTopApplicable = true;
    } else {
      player.hitTopApplicable = false;
    }

    if (
      player.hitRightApplicable &&
      player.xPos + player.width > platform.xPos &&
      player.yPos < platform.yPos + platform.height &&
      player.height + player.yPos > platform.yPos
    ) {
      player.collided = true;
      player.Behaviour = new HitRight(player);
    } else if (
      player.hitLeftApplicable &&
      player.xPos < platform.xPos + platform.width + 10 &&
      player.yPos < platform.yPos + platform.height &&
      player.height + player.yPos > platform.yPos
    ) {
      player.collided = true;
      player.Behaviour = new HitLeft(player);
    } else if (!player.hitRightApplicable && !player.hitLeftApplicable) {
      if (!player.hitBottomApplicable && player.height + player.yPos >= platform.yPos) {
        player.verVel = 0;
        player.jumping = false;
        player.isOnPlatform = true;
      } else if (!player.hitTopApplicable && player.yPos < platform.yPos + (platform.height - 15)){
        player.verVel = -1;
      }
    }  else {
      player.isOnPlatform = false;
      player.collided = false;
    }

    // General floating check
    if (player.yPos < window.innerHeight - player.height - 9 && !(!player.hitRightApplicable && !player.hitLeftApplicable)){ // Alright, please don't ask. Somehow this does work...
      player.jumping = true;
    }

  };
}
