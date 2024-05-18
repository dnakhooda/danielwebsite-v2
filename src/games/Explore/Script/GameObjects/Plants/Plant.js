import { Entity } from "../../Engine/Entity/Entity.js";
import { loader } from "../../Engine/Init.js";
import { Block } from "../Block.js";
export var Plant;
(function (Plant_1) {
    class Plant extends Entity.Entity {
        constructor(parent, id, x, y) {
            super(`plant${id}`, x, y, Block.Block.width, Block.Block.height);
            this.parent = parent;
            this.plantType = 1;
            this.randomPlant();
        }
        randomPlant() {
            this.plantType = Math.floor(Math.random() * 4) + 1;
            this.setImage = loader.getImage(`plant${this.plantType}`);
        }
        get getPlantType() { return this.plantType; }
        set setParent(parent) { this.parent = parent; }
        get getParent() { return this.parent; }
    }
    Plant_1.Plant = Plant;
})(Plant || (Plant = {}));
