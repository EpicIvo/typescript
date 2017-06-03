import gameobject from '../gameobject';
import * as Bounce from '../../node_modules/bounce.js';

export default class Checkpoint extends gameobject {

  private timeToLive: number;
  private counting: number;

  constructor(timeToLive: number) {
    super(100, 100, 'img');
    // Fill element
    this.element.className = 'checkpoint';
    this.element.setAttribute('src', 'img/potion.png');

    // Set position
    this.yPos = window.innerHeight - this.height;
    this.xPos = window.innerWidth - (this.width * 2);
    this.element.style.transform = 'translate(' + this.xPos + 'px,' + this.yPos + 'px)';

    //Extra vars
    this.timeToLive = timeToLive;
    this.countDown();
    this.animation();
  }

  protected countDown = (): void => {
    if (this.timeToLive > 0) {
      this.timeToLive -= 1;
      document.getElementById('timer').innerHTML = "Seconds left: " + this.timeToLive;
      this.counting = setTimeout(this.countDown, 1000);
    } else {
      document.getElementById('timer').innerHTML = "Game over!";
    }
  };

  public endGame = (): void => {
    clearTimeout(this.counting);
    document.getElementById('timer').innerHTML = "Score: " + this.timeToLive;
    this.element.remove();
  };

  //animation
  private animation = (): void => {
    let bounce = new Bounce();
    bounce
      .translate({
        from: {x: this.xPos, y: this.yPos},
        to: {x: this.xPos, y: this.yPos-50},
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
}
