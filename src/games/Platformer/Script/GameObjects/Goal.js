import { SpriteObj } from "../Library/EngineLibrary.js";
export class Goal extends SpriteObj {
    constructor(id, x, y) {
        super(id, x, y, 30, 30, "yellow", 5);
    }
}
