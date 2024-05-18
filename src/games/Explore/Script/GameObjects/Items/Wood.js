import { loader } from "../../Engine/Init.js";
import { Item } from "./Item.js";
export var Wood;
(function (Wood_1) {
    class Wood extends Item.Item {
        constructor() {
            super("Wood");
            this.setImage = loader.getImage("wood");
            this.setItemType = Item.ItemsEnum.wood;
        }
    }
    Wood_1.Wood = Wood;
})(Wood || (Wood = {}));
