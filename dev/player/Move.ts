import Behaviour from './Behaviour';
import Player from './Player';

export default class Move implements Behaviour{

  public player: Player;

  private speed: number;

  constructor(p: Player, speed: number){
    this.player = p;
    this.speed = speed;
  }
  public moveRight(){
    this.player.xPos += this.speed;
  }
  public moveLeft(){
    this.player.xPos = this.player.xPos - this.speed;
  }
  public jump(){
    console.log("jump");
  }
}
