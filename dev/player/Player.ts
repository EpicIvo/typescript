import gameobject from '../gameobject';
import Behaviour from './Behaviour';
import Move from './Move';

export default class Player extends gameobject {
  public Behaviour: Behaviour;

  constructor() {
    super(77.2, 99.6, 'img');
    // Behaviours
    this.Behaviour = new Move(this);
    // Player position
    this.yPos = window.innerHeight - (this.heigth * 1.2);
    this.xPos = 20;
    // Player element
    this.element.className = 'player';
    this.element.setAttribute('src', 'img/player.png');
    this.element.style.transform = 'translate(' + this.xPos + 'px,' + this.yPos + 'px)';
    // Keyboard input
    document.addEventListener('keydown', this.keyboardEventListener);
  }

  private keyboardEventListener = (event: KeyboardEvent): void => {
    switch (event.key) {
      case "d":
        this.Behaviour.moveRight();
        break;
      case "a":
        this.Behaviour.moveLeft();
        break;
      case " ":
      default:
        console.log(event.key);
        break;
    }
  }

}
