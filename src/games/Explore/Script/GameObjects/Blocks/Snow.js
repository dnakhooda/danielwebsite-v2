import { loader } from "../../Engine/Init.js";
import { Block } from "../Block.js";
export var Snow;
(function (Snow_1) {
    class Snow extends Block.Block {
        constructor(chunk, x, y, indexX, indexY) {
            super(chunk, x, y, indexX, indexY, 4);
            this.setImage = loader.getImage("snow1");
        }
    }
    Snow_1.Snow = Snow;
})(Snow || (Snow = {}));
