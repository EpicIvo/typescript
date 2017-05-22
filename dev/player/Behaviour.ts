import Player from './Player';

interface Behaviour {
  player:Player

  //jumpUp: boolean;

  moveRight(): void;
  moveLeft(): void;
  // jump(): void;
}

export default Behaviour;
