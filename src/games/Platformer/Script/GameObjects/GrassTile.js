import { getGame, getLoader, Physics2dPlatformer } from "../Library/EngineLibrary.js";
import { Player } from "./Player.js";
export class GrassTile extends Physics2dPlatformer {
    constructor(id, x, y) {
        super(id, x, y, 30, 30, "green", 10);
        for (let i = 1; i < 28; i++) {
            this.addCostume(`pl${i}`, getLoader().getLoadedImageById(`pl${i}`));
        }
        ;
        this.setPhysics2dPlatformerSpritesToCheckCollision(getGame().getSpritesByClass(Player));
    }
}
