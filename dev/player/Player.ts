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
  public collided: boolean = false;

  public hitRightApplicable: boolean = true;
  public hitLeftApplicable: boolean = false;
  public hitTopApplicable: boolean = false;
  public hitBottomApplicable: boolean = true;

  // yPos specifics
  public isOnPlatform: boolean = false;

  public score: number = 0;
  public timeToLive: number;
  public timesUp: boolean = false;
  private counting: number;

  private observerCollection: Array<Observer>;

  private KeyboardInput: KeyboardInput;

  constructor() {
    super(77.2, 99.6, 'img');
    // Player position

    this.yPos = window.innerHeight - this.height - 9;
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
    // Extra vars
    this.timeToLive = 16;
    this.countDown();
    this.observerCollection = new Array<Observer>();
  };

  private calculateOldYPos() {
    if (!this.jumping) {
      this.oldYPos = this.yPos;
    }
  };

  protected countDown = (): void => {
    if (this.timeToLive > 4) {
      this.timeToLive -= 1;
      document.getElementById('timer').innerHTML = "Seconds left: " + this.timeToLive;
      this.counting = setTimeout(this.countDown, 1000);
    } else if (this.timeToLive <= 4 && this.timeToLive > 0) {
      this.notifyObservers();
      document.getElementById('timer').style.color = 'red'
      this.timeToLive -= 1;
      document.getElementById('timer').innerHTML = "Seconds left: " + this.timeToLive;
      this.counting = setTimeout(this.countDown, 1000);
    } else if (this.timeToLive == 0) {
      document.getElementById('timer').style.color = 'white'
      this.timesUp = true;
      this.endGame();
    }
  };

  public endGame = (): void => {
    clearTimeout(this.counting);
    this.element.remove();
  };

  public draw = (): void => {
    this.Behaviour.move();
    if (this.APressed) {
      this.element.style.transform = 'translate(' + this.xPos + 'px, ' + this.yPos + 'px) ScaleX(-1)';
    } else {
      this.element.style.transform = 'translate(' + this.xPos + 'px, ' + this.yPos + 'px) ScaleX(1)';
    }
    // yea
    this.calculateOldYPos();
  };

  //Observer pattern
  public subscribe(o: Observer) {
    this.observerCollection.push(o);
  };

  public unsubscribe(o: Observer) {
    for (let i = 0; i < this.observerCollection.length; i++) {
      if (this.observerCollection[i] == o) {
        this.observerCollection.splice(i, 1);
      }
    }
  };

  public notifyObservers() {
    for (let o in this.observerCollection) {
      for (let i = 0; i < this.observerCollection.length; i++) {
        this.observerCollection[i].notify();
      }
    }
  };
}
