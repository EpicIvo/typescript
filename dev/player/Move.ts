import Behaviour from './Behaviour';
import Player from './Player';

export default class Move implements Behaviour{
  public player: Player;
  constructor(p: Player){
    this.player = p;
  }
  public moveRight(){
    this.player.xPos += 15;
    this.player.element.style.transform = 'translate(' + this.player.xPos + 'px, ' + this.player.yPos + 'px) ScaleX(1)';
  }
  public moveLeft(){
    this.player.xPos -= 15;
    this.player.element.style.transform = 'translate(' + this.player.xPos + 'px, ' + this.player.yPos + 'px) ScaleX(-1)';
  }
}
