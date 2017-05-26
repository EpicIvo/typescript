"use strict";
class GameObject {
    constructor(width, height, element) {
        this.height = height;
        this.width = width;
        this.element = document.createElement(element);
        this.element.style.height = this.height.toString() + 'px';
        this.element.style.width = this.width.toString() + 'px';
        document.body.appendChild(this.element);
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = GameObject;
//# sourceMappingURL=gameobject.js.map