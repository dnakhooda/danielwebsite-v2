import { Entity } from "../../Engine/Entity/Entity.js";
import { game, loader } from "../../Engine/Init.js";
import { Wood } from "../Items/Wood.js";
import { Player } from "../Player.js";
export var Twig;
(function (Twig_1) {
    class Twig extends Entity.Entity {
        constructor(parent, id, x, y) {
            super(`twig${id}`, x, y, 100, 100);
            this.parent = parent;
            this.twigType = Math.floor(Math.random() * 3) + 1;
            this.setImage = loader.getImage(`twig${this.twigType}`);
            this.rotateTwig();
        }
        clickedCameraOffSet(e) {
            const player = game.getEntityByClass(Player.Player)[0];
            player.getInventory.addItem(new Wood.Wood());
            game.removeEntity(this);
        }
        rotateTwig() {
            this.setRotate = Math.floor(Math.random() * 4) * 90;
        }
        set setParent(parent) { this.parent = parent; }
        get getParent() { return this.parent; }
        get getTwigType() { return this.twigType; }
    }
    Twig_1.Twig = Twig;
})(Twig || (Twig = {}));
