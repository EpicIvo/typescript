import gameobject from '../gameobject';

export default class Platform extends gameobject {

  constructor() {
    super(400, 40, 'div');
    // Fill element
    this.element.className = 'platform';
    this.element.style.backgroundColor = 'brown';
    // Set position
    this.yPos = window.innerHeight - this.height - 150;
    this.xPos = window.innerWidth - (this.width * 3);
    this.element.style.transform = 'translate(' + this.xPos + 'px,' + this.yPos + 'px)';
  }
}
