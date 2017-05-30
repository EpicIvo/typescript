import Behaviour from './Behaviour';
import Player from './Player';

export default class Move implements Behaviour{

  public player: Player;

  constructor(p: Player){
    this.player = p;
  }

  public move(){
    if (this.player.DPressed && this.player.rightBorderHit == false){
      this.player.horVel = 10;
    } else if (this.player.APressed && this.player.leftBorderHit == false){
      this.player.horVel = -10;
    }else{
      this.player.horVel = 0;
    }
    this.player.xPos += this.player.horVel;
  }
}
