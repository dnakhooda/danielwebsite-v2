import { getGame, getLoader, Physics2dPlatformer } from "../Library/EngineLibrary.js";
import { Player } from "./Player.js";
export class Shooter extends Physics2dPlatformer {
    constructor(id, x, y) {
        super(id, x, y, 30, 30, "green", 15);
        this.addCostume("normal", getLoader().getLoadedImageById("shooterImg"));
        this.setCostumeById("normal");
        this.setPhysics2dPlatformerSpritesToCheckCollision(getGame().getSpritesByClass(Player));
    }
}
