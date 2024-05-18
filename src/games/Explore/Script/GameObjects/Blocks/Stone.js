import { loader } from "../../Engine/Init.js";
import { Block } from "../Block.js";
export var Stone;
(function (Stone_1) {
    class Stone extends Block.Block {
        constructor(chunk, x, y, indexX, indexY) {
            super(chunk, x, y, indexX, indexY, 3);
            this.randomStone();
        }
        randomStone() {
            const random = Math.floor(Math.random() * 4);
            if (random < 3)
                this.setImage = loader.getImage("stone1");
            else if (random < 4)
                this.setImage = loader.getImage("stone2");
        }
    }
    Stone_1.Stone = Stone;
})(Stone || (Stone = {}));
