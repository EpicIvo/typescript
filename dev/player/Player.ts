import gameobject from '../gameobject';

export default class Player extends gameobject {

  constructor() {
    super(77.2, 99.6, 'img');
    // Player position
    this.yPos = window.innerHeight - (this.heigth * 1.2);
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
    this.xPos += 15;
    this.element.style.transform = 'translate(' + this.xPos + 'px, ' + this.yPos + 'px) ScaleX(1)';
  }

  public moveLeft(){
    this.xPos -= 15;
    this.element.style.transform = 'translate(' + this.xPos + 'px, ' + this.yPos + 'px) ScaleX(-1)';
  }

  private keyboardEventListener = (event: KeyboardEvent): void => {
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
