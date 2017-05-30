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
    if (player.xPos + (player.width * 1.40) > window.innerWidth){ // Ugly af tho
      player.rightBorderHit = true;
    } else if (player.xPos + (player.width * 0.15) < 0){
      player.leftBorderHit = true;
    }else{
      player.leftBorderHit = false;
      player.rightBorderHit = false;
    }
    // Bottom
    if (player.xPos > window.innerHeight){
      player.bottomBorderHit = true;
      //this.jumping = false;
      player.verVel = 2;
    }
  };
}
