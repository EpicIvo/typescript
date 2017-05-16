import gameobject from '../gameobject';

export default class player extends gameobject {

  private bottomYPos: number = window.innerHeight - 197;

  constructor() {
    super(77.2, 99.6, 'img');
    // Player element
    this.element.className = 'player';
    this.element.setAttribute('src', 'img/player.png');
    this.element.style.webkitTransform = 'translateY(' + this.bottomYPos + 'px)';
    // Keyboard input
    document.addEventListener('keydown', this.keyboardEventListener);
  }

  private keyboardEventListener(event: KeyboardEvent){
    console.log(event);
  }

}
