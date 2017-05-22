import Behaviour from './Behaviour';
import Player from './Player';

export default class Move implements Behaviour{

  public player: Player;

  private horVel: number;
  private verVel: number;

  private currentY: number;
  //public jumpUp: boolean = false;

  constructor(p: Player, horVel: number, verVel: number){
    this.player = p;
    this.horVel = horVel;
    this.verVel = verVel;
    this.currentY = this.player.yPos;
  }
  public moveRight(){
    this.player.xPos += this.horVel;
  }
  public moveLeft(){
    this.player.xPos -= this.horVel;
  }

  //TODO: fix this jumping dude!
  // public jump(){
  //   if (this.player.yPos > this.currentY - 100 && this.jumpUp) {
  //     this.verVel *= 0.999;
  //     this.player.yPos -= this.verVel;
  //   } else if (this.player.yPos < this.currentY){
  //     this.jumpUp = false;
  //   }
  //
  //   if (!this.jumpUp && this.player.yPos < this.currentY){
  //     this.verVel *= 1.001;
  //     this.player.yPos += this.verVel;
  //   }
  //
  // }
}
