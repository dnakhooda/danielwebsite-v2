import { getGame, Physics2dPlatformer } from "../Library/EngineLibrary.js";
import { Player } from "./Player.js";
export class Ice extends Physics2dPlatformer {
    constructor(id, x, y) {
        super(id, x, y, 30, 30, "lightblue", 5);
        this.setPhysics2dPlatformerSpritesToCheckCollision(getGame().getSpritesByClass(Player));
    }
}
