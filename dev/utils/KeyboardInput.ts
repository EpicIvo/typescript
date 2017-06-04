import Player from "../player/Player";

export default class KeyboardInput{

  private player: Player;

  constructor(player: Player){
    this.player = player;
  }

  public keyboardDownEventListener = (event: KeyboardEvent): void => {
    switch (event.key) {
      case "d":
        this.player.DPressed = true;
        break;
      case "a":
        this.player.horVel *= -1;
        this.player.APressed = true;
        break;
      case " ":
        this.player.spacebarPressed = true;
        //this.player.Behaviour = new Jump(this.player);
        break;
      default:
        break;
    }
  };

  public keyboardUpEventListener = (event: KeyboardEvent): void => {
    switch (event.key) {
      case "d":
        this.player.DPressed = false;
        break;
      case "a":
        this.player.APressed = false;
        break;
      case " ":
        this.player.spacebarPressed = false;
        break;
      default:
        break;
    }
  };

}
