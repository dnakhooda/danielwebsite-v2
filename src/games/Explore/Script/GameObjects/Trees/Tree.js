import { Entity } from "../../Engine/Entity/Entity.js";
import { loader } from "../../Engine/Init.js";
export var Tree;
(function (Tree_1) {
    class Tree extends Entity.Entity {
        constructor(id, x, y) {
            super(`tree${id}`, x, y, 200, 360, 0);
            this.setImage = loader.getImage("tree1");
        }
    }
    Tree_1.Tree = Tree;
})(Tree || (Tree = {}));
