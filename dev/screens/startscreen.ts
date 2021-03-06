/// <reference path="firstscreen.ts"/>

class StartScreen extends FirstScreen {
    constructor() {
        super('start');

        let btn = document.createElement("button");
        this.div.appendChild(btn);
        btn.innerHTML = "Start Game";

        btn.addEventListener("click", this.onStartClick.bind(this));

    }

    //zorgt voor het starten van de game
    onStartClick(): void {
        this.div.remove();
        Game.getInstance().showGameScreen();
    }
}