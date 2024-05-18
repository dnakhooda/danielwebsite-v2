export var Item;
(function (Item_1) {
    let ItemsEnum;
    (function (ItemsEnum) {
        ItemsEnum[ItemsEnum["wood"] = 0] = "wood";
        ItemsEnum[ItemsEnum["none"] = 1] = "none";
    })(ItemsEnum = Item_1.ItemsEnum || (Item_1.ItemsEnum = {}));
    class Item {
        constructor(name) {
            this.name = name;
            this.image = null;
            this.ItemType = ItemsEnum.none;
        }
        get getImage() { return this.image; }
        set setImage(image) { this.image = image; }
        get getItemType() { return this.ItemType; }
        set setItemType(ItemType) { this.ItemType = ItemType; }
        get getName() { return this.name; }
    }
    Item_1.Item = Item;
})(Item || (Item = {}));
