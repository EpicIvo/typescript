import gameobject from '../gameobject';
import Behaviour from './Behaviour';
import Move from './Move';

export default class Player extends gameobject {
  public Behaviour: Behaviour;

  private horVel: number;
  public verVel: number;

  private DPressed: boolean = false;
  private APressed: boolean = false;
  //public jumping: boolean = false;

  private rightBorderHit: boolean = false;
  private leftBorderHit: boolean = false;
  private bottomBorderHit: boolean = false;

  constructor() {
    super(77.2, 99.6, 'img');
    // Player position
    this.yPos = window.innerHeight - (this.height * 1.2);
    this.xPos = 20;
    this.horVel = 10;
    this.verVel = 8;
    // Player element
    this.element.className = 'player';
    this.element.setAttribute('src', 'img/player.png');
    this.element.style.transform = 'translate(' + this.xPos + 'px,' + this.yPos + 'px)';
    // Keyboard input
    document.addEventListener('keydown', this.keyboardDownEventListener);
    document.addEventListener('keyup', this.keyboardUpEventListener);
    // Behaviours
    this.Behaviour = new Move(this, this.horVel, this.verVel);
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

    // if (this.jumping && this.DPressed){
    //   this.Behaviour.jump();
    //   this.element.style.transform = 'translate(' + this.xPos + 'px, ' + this.yPos + 'px) ScaleX(1)';
    // }else if (this.jumping) {
    //   this.Behaviour.jump();
    //   this.element.style.transform = 'translate(' + this.xPos + 'px, ' + this.yPos + 'px) ScaleX(-1)';
    // }
  };

  private checkForScreenBorders = (): void => {
    // Left and right
    if (this.xPos + (this.width * 1.40) > window.innerWidth){ // Ugly af tho
      this.rightBorderHit = true;
    } else if (this.xPos + (this.width * 0.15) < 0){
      this.leftBorderHit = true;
    }else{
      this.leftBorderHit = false;
      this.rightBorderHit = false;
    }
    // Bottom
    if (this.xPos > window.innerHeight){
      this.bottomBorderHit = true;
      //this.jumping = false;
      this.verVel = 2;
    }
  };

  public keyboardDownEventListener = (event: KeyboardEvent): void => {
    switch (event.key) {
      case "d":
        this.DPressed = true;
        break;
      case "a":
        this.horVel *= -1;
        this.APressed = true;
        break;
      case " ":
        //this.jumping = true;
        //this.Behaviour.jumpUp = true;
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
        break;
      default:
        break;
    }
  };

}
