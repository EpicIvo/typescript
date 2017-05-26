"use strict";
const gameobject_1 = require('../gameobject');
class Light extends gameobject_1.default {
    constructor() {
        super(100, 100, 'img');
        this.element.className = 'light';
        this.element.setAttribute('src', 'img/light.png');
        // Set position
        this.yPos = window.innerHeight - this.height;
        this.xPos = window.innerWidth - (this.width * 2);
        this.element.style.transform = 'translate(' + this.xPos + 'px,' + this.yPos + 'px)';
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Light;
//# sourceMappingURL=Light.js.map