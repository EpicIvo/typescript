import { Message } from './message';

class Main {
    constructor() {
       let mOne:Message = new Message("Je");
       let mTwo:Message = new Message("moeder");
    }
} 

console.log('hi');

// hier starten we de applicatie
window.addEventListener("load", function() {
    new Main();
});
