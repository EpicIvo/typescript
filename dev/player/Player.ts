import gameobject from '../gameobject';
import Behaviour from './Behaviour';
import Move from './player-states/Move';
import KeyboardInput from '../utils/KeyboardInput';

export default class Player extends gameobject {
  public Behaviour: Behaviour;

  public horVel: number;
  public verVel: number;
  public gravity: number;

  public DPressed: boolean = false;
  public APressed: boolean = false;
  public spacebarPressed: boolean = false;
  public jumping: boolean = false;

  public oldYPos: number;

  //public rightBorderHit: boolean = false;
  //public leftBorderHit: boolean = false;
  //private bottomBorderHit: boolean = false;

  private KeyboardInput: KeyboardInput;

  constructor() {
    super(77.2, 99.6, 'img');
    // Player position
    this.yPos = window.innerHeight - (this.height * 1.2);
    this.xPos = 20;
    this.gravity = 1;
    // Player element
    this.element.className = 'player';
    this.element.setAttribute('src', 'img/player.png');
    this.element.style.transform = 'translate(' + this.xPos + 'px,' + this.yPos + 'px)';
    // Keyboard input
    this.KeyboardInput = new KeyboardInput(this);
    document.addEventListener('keydown', this.KeyboardInput.keyboardDownEventListener);
    document.addEventListener('keyup', this.KeyboardInput.keyboardUpEventListener);
    // Behaviours
    this.Behaviour = new Move(this);
  }

  private calculateOldYPos(){
    if(!this.jumping){
      this.oldYPos = this.yPos;
    }
  }

  public draw = (): void => {
    this.Behaviour.move();
    if (this.APressed){
      this.element.style.transform = 'translate(' + this.xPos + 'px, ' + this.yPos + 'px) ScaleX(-1)';
    }else {
      this.element.style.transform = 'translate(' + this.xPos + 'px, ' + this.yPos + 'px) ScaleX(1)';
    }
    // yea
    this.calculateOldYPos();
  };
}
