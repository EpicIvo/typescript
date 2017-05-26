"use strict";
const gameobject_1 = require('../gameobject');
class Checkpoint extends gameobject_1.default {
    constructor(timeToLive) {
        super(100, 100, 'img');
        this.countDown = () => {
            if (this.timeToLive > 0) {
                this.timeToLive -= 1;
                document.getElementById('timer').innerHTML = "Seconds left: " + this.timeToLive;
                this.counting = setTimeout(this.countDown, 1000);
            }
            else {
                document.getElementById('timer').innerHTML = "Game over!";
            }
        };
        this.endGame = () => {
            clearTimeout(this.counting);
            document.getElementById('timer').innerHTML = "Score: " + this.timeToLive;
            this.element.remove();
        };
        // Fill element
        this.element.className = 'checkpoint';
        this.element.setAttribute('src', 'img/potion.png');
        // Set position
        this.yPos = window.innerHeight - this.height;
        this.xPos = window.innerWidth - (this.width * 2);
        this.element.style.transform = 'translate(' + this.xPos + 'px,' + this.yPos + 'px)';
        //Extra vars
        this.timeToLive = timeToLive;
        this.countDown();
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Checkpoint;
//# sourceMappingURL=Checkpoint.js.map