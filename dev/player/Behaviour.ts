import Player from './Player';

interface Behaviour {
  player:Player
  moveRight(): void;
  moveLeft(): void;
  jump(): void;
}

export default Behaviour;
