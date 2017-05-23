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
}
