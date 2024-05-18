import { Entity } from "../../Engine/Entity/Entity.js";
import { loader } from "../../Engine/Init.js";
export var Twig;
(function (Twig_1) {
    class Twig extends Entity.Entity {
        constructor(id, x, y) {
            super(`twig${id}`, x, y, 200, 360, 0);
            this.setImage = loader.getImage("twig");
        }
    }
    Twig_1.Twig = Twig;
})(Twig || (Twig = {}));
