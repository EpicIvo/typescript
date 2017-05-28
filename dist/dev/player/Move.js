"use strict";
class Move {
    //public jumpUp: boolean = false;
    constructor(p, horVel, verVel) {
        this.player = p;
        this.horVel = horVel;
        this.verVel = verVel;
        this.currentY = this.player.yPos;
    }
    moveRight() {
        this.player.xPos += this.horVel;
    }
    moveLeft() {
        this.player.xPos -= this.horVel;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Move;
//# sourceMappingURL=Move.js.map