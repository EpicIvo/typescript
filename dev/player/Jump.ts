import Behaviour from './Behaviour';
import Player from './Player';
import Move from "./Move";

export default class Jump implements Behaviour{

  public player: Player;

  constructor(p: Player){
    this.player = p;
  }

  public move(){
    const originalYpos: number = window.innerHeight - (this.player.height * 1.2);
    if(!this.player.jumping){
      this.player.verVel = 20;
      this.player.jumping = true;
    }else{
      this.player.yPos -= this.player.verVel;
      this.player.verVel -= this.player.gravity;
      if (this.player.yPos >= originalYpos){
        this.player.jumping = false;
        this.player.Behaviour = new Move(this.player);
      }
      if(this.player.DPressed && !this.player.rightBorderHit){
        this.player.horVel = 10;
      }else if (this.player.APressed && !this.player.leftBorderHit){
        this.player.horVel = -10;
      }else{
        this.player.horVel = 0;
      }
      this.player.xPos += this.player.horVel;
    }
  }
}
