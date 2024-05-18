import { game, loader } from "../../Engine/Init.js";
import { Block } from "../Block.js";
import { Plant } from "../Plants/Plant.js";
import { Twig } from "../Twigs/Twig.js";
export var Grass;
(function (Grass_1) {
    class Grass extends Block.Block {
        constructor(chunk, x, y, indexX, indexY) {
            super(chunk, x, y, indexX, indexY, 2);
            this.randomGrass();
            this.entityInside = null;
        }
        randomGrass() {
            const random = Math.floor(Math.random() * 10);
            if (random < 2)
                this.setImage = loader.getImage("grass1");
            else if (random < 7)
                this.setImage = loader.getImage("grass2");
            else if (random < 9)
                this.setImage = loader.getImage("grass3");
            else if (random < 11)
                this.setImage = loader.getImage("grass4");
        }
        generateInBlockEntities() {
            if (Math.floor(Math.random() * 200) === 1) {
                const plant = new Plant.Plant(this, 1, this.getX, this.getY);
                this.entityInside = plant;
                game.addEntity(plant);
            }
            else if (Math.floor(Math.random() * 200) === 1) {
                const twig = new Twig.Twig(this, 1, this.getX, this.getY);
                this.entityInside = twig;
                game.addEntity(twig);
            }
        }
        get getEntityInside() { return this.entityInside; }
    }
    Grass_1.Grass = Grass;
})(Grass || (Grass = {}));
