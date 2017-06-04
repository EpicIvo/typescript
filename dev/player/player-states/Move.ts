import Behaviour from '../Behaviour';
import Player from '../Player';

export default class Move implements Behaviour {

  public player: Player;

  constructor(p: Player) {
    this.player = p;
  }

  public move() {

    if (this.player.spacebarPressed) {
      if (!this.player.jumping){
        this.player.verVel = 20;
        this.player.jumping = true;
      }
    }

    if (this.player.jumping){
      this.player.yPos -= this.player.verVel;
      this.player.verVel -= this.player.gravity;

      if (this.player.yPos >= this.player.oldYPos) {
          this.player.jumping = false;
        }
    }

    if (this.player.DPressed) {
      this.player.horVel = 10;
    } else if (this.player.APressed) {
      this.player.horVel = -10;
    } else {
      this.player.horVel = 0;
    }
    this.player.xPos += this.player.horVel;
  }
}
