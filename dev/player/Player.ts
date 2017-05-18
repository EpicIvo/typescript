import gameobject from '../gameobject';

export default class player extends gameobject {

  constructor() {
    super(77.2, 99.6, 'img');
    // Player position
    this.yPos = window.innerHeight - 197;
    this.xPos = 20;
    // Player element
    this.element.className = 'player';
    this.element.setAttribute('src', 'img/player.png');
    this.element.style.transform = 'translate(' + this.xPos + 'px,' + this.yPos + 'px)';
    // Keyboard input
    document.addEventListener('keydown', this.keyboardEventListener);
    this.moveRight();
  }

  public moveRight(){
    this.xPos += 10;
    this.element.style.transform = 'translate(' + this.xPos + 'px, ' + this.yPos + 'px) ScaleX(1)';
  }

  public moveLeft(){
    this.xPos -= 10;
    this.element.style.transform = 'translate(' + this.xPos + 'px, ' + this.yPos + 'px) ScaleX(-1)';
  }

  keyboardEventListener = (event: KeyboardEvent): void => {
    switch (event.key) {
      case "d":
        this.moveRight();
        break;
      case "a":
        this.moveLeft();
        break;
      default:
        break;
    }
  }

}
