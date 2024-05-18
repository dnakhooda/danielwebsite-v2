import { loader } from "../../Engine/Init.js";
import { Block } from "../Block.js";
export var Water;
(function (Water_1) {
    class Water extends Block.Block {
        constructor(chunk, x, y, indexX, indexY) {
            super(chunk, x, y, indexX, indexY, 0);
            this.setImage = loader.getImage("water1");
        }
    }
    Water_1.Water = Water;
})(Water || (Water = {}));
