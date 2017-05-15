import Player, {default as player} from './player/player';

class Main {
    constructor() {
      let player1:Player = new Player();
    }
}

// hier starten we de applicatie
window.addEventListener("load", function() {
    new Main();
});
