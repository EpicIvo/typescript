import { GameObject } from './gameobject';

class Main {
    constructor() {
       let mOne:GameObject = new GameObject("Ivo");
       let mTwo:GameObject = new GameObject("Hi");
    }
} 

console.log('hi');

// hier starten we de applicatie
window.addEventListener("load", function() {
    new Main();
});
