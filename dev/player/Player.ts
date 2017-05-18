import gameobject from '../gameobject';
import Behaviour from './Behaviour';
import Move from './Move';

export default class Player extends gameobject {
  public Behaviour: Behaviour;

  private speed: number;

  private DPressed: boolean = false;
  private APressed: boolean = false;

  private rightBorderHit: boolean = false;
  private leftBorderHit: boolean = false;

  constructor() {
    super(77.2, 99.6, 'img');
    // Player position
    this.yPos = window.innerHeight - (this.heigth * 1.2);
    this.xPos = 20;
    this.speed = 10;
    // Player element
    this.element.className = 'player';
    this.element.setAttribute('src', 'img/player.png');
    this.element.style.transform = 'translate(' + this.xPos + 'px,' + this.yPos + 'px)';
    // Keyboard input
    document.addEventListener('keydown', this.keyboardDownEventListener);
    document.addEventListener('keyup', this.keyboardUpEventListener);
    // Behaviours
    this.Behaviour = new Move(this, this.speed);
  }

  public draw = (): void => {
    this.checkForScreenBorders();
    if (this.DPressed && this.rightBorderHit == false){
      this.Behaviour.moveRight();
      this.element.style.transform = 'translate(' + this.xPos + 'px, ' + this.yPos + 'px) ScaleX(1)';
    }
    if (this.APressed && this.leftBorderHit == false){
      this.Behaviour.moveLeft();
      this.element.style.transform = 'translate(' + this.xPos + 'px, ' + this.yPos + 'px) ScaleX(-1)';
    }
  };

  private checkForScreenBorders = (): void => {
    if (this.xPos + (this.width * 1.40) > window.innerWidth){ // Ugly af tho
      console.log("Hit right border");
      this.rightBorderHit = true;
    } else if (this.xPos + (this.width * 0.15) < 0){
      console.log("Hit left border");
      this.leftBorderHit = true;
    }else{
      this.leftBorderHit = false;
      this.rightBorderHit = false;
    }
  };

  public keyboardDownEventListener = (event: KeyboardEvent): void => {
    switch (event.key) {
      case "d":
        this.DPressed = true;
        break;
      case "a":
        this.speed *= -1;
        this.APressed = true;
        break;
      case " ":
        this.Behaviour.jump();
        break;
      default:
        break;
    }
  };

  public keyboardUpEventListener = (event: KeyboardEvent): void => {
    switch (event.key) {
      case "d":
        this.DPressed = false;
        break;
      case "a":
        this.APressed = false;
        break;
      case " ":
        this.Behaviour.jump();
        break;
      default:
        break;
    }
  };

}
