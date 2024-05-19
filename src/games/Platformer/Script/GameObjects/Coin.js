import { getLoader, SpriteObj } from "../Library/EngineLibrary.js";
export class Coin extends SpriteObj {
    constructor(id, x, y) {
        super(id, x, y, 30, 30, "yellow", 20);
        this.addCostume("normal", getLoader().getLoadedImageById("coin"));
        this.setCostumeById("normal");
    }
}
