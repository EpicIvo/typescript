import Player from './Player';

interface Behaviour {
  player:Player
  moveRight(): void;
  moveLeft(): void;
}

export default Behaviour;
