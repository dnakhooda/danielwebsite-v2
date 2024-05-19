import { getGame, SpriteObj } from "../Library/EngineLibrary.js";
export class PlayerHealth extends SpriteObj {
    constructor() {
        super("PlayerHealth", getGame().getCamera().getX() + 5, getGame().getCamera().getY() + 5, 100, 25, "red", 30);
    }
}
