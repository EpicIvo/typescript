import gameobject from '../gameobject';
import * as Bounce from '../../node_modules/bounce.js';
import './Observer';

export default class Checkpoint extends gameobject implements Observer{
  constructor() {
    super(100, 100, 'img');
    // Fill element
    this.element.className = 'checkpoint';
    this.element.setAttribute('src', 'img/potion.png');
    // Set position
    this.yPos = window.innerHeight - this.height;
    this.xPos = Math.random() * window.innerWidth;
    this.element.style.transform = 'translate(' + this.xPos + 'px,' + this.yPos + 'px)';
    //Extra vars
    this.animation();
  }
  //animation
  private animation = (): void => {
    let bounce = new Bounce();
    bounce
      .translate({
        from: {x: this.xPos, y: this.yPos},
        to: {x: this.xPos, y: this.yPos - 50},
        duration: 2000,
        stiffness: 1,
        bounces: 0
      })
      .translate({
        from: {x: 0, y: 0},
        to: {x: 0, y: +50},
        duration: 2000,
        delay: 1000,
        stiffness: 1,
        bounces: 0
      })
      .applyTo(this.element);
    // Loop the function
    setTimeout(this.animation, 2000);
  };
  //Observer pattern
  public notify = (): void => {
    this.yPos = window.innerHeight - (this.height * 2);
    this.element.style.transform = 'translate(' + this.xPos + 'px,' + this.yPos + 'px)';
  };
}
