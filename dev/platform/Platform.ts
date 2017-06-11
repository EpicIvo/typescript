import gameobject from '../gameobject';

export default class Platform extends gameobject {

  constructor(yPos: number, xPos: number) {
    super(400, 40, 'div');
    // Fill element
    this.element.className = 'platform';
    this.element.style.backgroundColor = 'brown';
    // Set position
    this.yPos = window.innerHeight - this.height - yPos;
    this.xPos = window.innerWidth - (this.width * xPos);
    this.element.style.transform = 'translate(' + this.xPos + 'px,' + this.yPos + 'px)';
  }
}

