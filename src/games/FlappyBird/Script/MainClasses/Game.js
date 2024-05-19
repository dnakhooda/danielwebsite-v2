import { Pipe, pipeType } from "../GameClasses/Pipes.js";
import { Neutron } from "../Neutron/Neutron.js";
export class Game extends Neutron.Game {
    constructor() {
        super();
        // Setting Variables
        this.pipeIdNumber = 0;
        this.score = 0;
        this.pipeTimer = 0;
        // Setting Score From Local Storage
        this.highScore = localStorage.getItem("highScore");
        if (this.highScore === null) {
            this.highScore = "0";
            localStorage.setItem("highScore", this.highScore);
        }
    }
    // Creates New Pipe At Beginning of Map
    createNewPipe() {
        const topHeight = Math.floor(Math.random() * (Neutron.getRender().getHeight * (3 / 4)));
        let gapHeight = 800 - (this.score * 10);
        if (gapHeight < 200)
            gapHeight = 200;
        this.addNewSprite(new Pipe(`pipe${this.getNewPipeId}`, Neutron.getRender().getWidth, topHeight, pipeType.top));
        this.addNewSprite(new Pipe(`pipe${this.getNewPipeId}`, Neutron.getRender().getWidth, Neutron.getRender().getHeight - (topHeight + gapHeight), pipeType.bottom));
    }
    // Gets A New Unique Id For Pipe
    get getNewPipeId() {
        this.pipeIdNumber++;
        return this.pipeIdNumber;
    }
}
