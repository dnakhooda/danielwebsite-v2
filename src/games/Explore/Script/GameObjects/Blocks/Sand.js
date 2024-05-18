import { loader } from "../../Engine/Init.js";
import { Block } from "../Block.js";
export var Sand;
(function (Sand_1) {
    class Sand extends Block.Block {
        constructor(chunk, x, y, indexX, indexY) {
            super(chunk, x, y, indexX, indexY, 1);
            this.randomSand();
        }
        randomSand() {
            const random = Math.floor(Math.random() * 2);
            if (random < 1)
                this.setImage = loader.getImage("sand1");
            else if (random < 2)
                this.setImage = loader.getImage("sand2");
        }
    }
    Sand_1.Sand = Sand;
})(Sand || (Sand = {}));
