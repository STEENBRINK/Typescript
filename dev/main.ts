/// <reference path="vector/vector2.ts"/>
/// <reference path="vector/rectangle.ts"/>

namespace Game {

    import v = Vector;

    export class Snippets {

        constructor(){
            let vect:v.Example = new v.Example();
            let dr:Draggable.Example = new Draggable.Example();
        }
       
    } 
}

window.addEventListener("load", () => new Game.Snippets());