"use strict";
class Util {
    constructor() {
        this.checkCollision = (instance1, instance2) => {
            if (instance1.xPos < instance2.xPos + instance2.width &&
                instance1.xPos + instance1.width > instance2.xPos &&
                instance1.yPos < instance2.yPos + instance2.height &&
                instance1.height + instance1.yPos > instance2.yPos) {
                return true;
            }
        };
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Util;
//# sourceMappingURL=Util.js.map