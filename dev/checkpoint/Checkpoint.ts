import gameobject from '../gameobject';

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
  }

  protected countDown = (): void => {
    if (this.timeToLive > 0) {
      this.timeToLive -= 1;
      document.getElementById('timer').innerHTML = "Seconds left: " + this.timeToLive;
      this.counting = setTimeout(this.countDown, 1000);
    } else {
      document.getElementById('timer').innerHTML = "Game over!";
    }
  }

  public endGame = (): void => {
    clearTimeout(this.counting);
    document.getElementById('timer').innerHTML = "Score: " + this.timeToLive;
    this.element.remove();
  }

}
