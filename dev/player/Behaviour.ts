import Player from './Player';

interface Behaviour {
  player:Player

  move(): void;
}

export default Behaviour;
