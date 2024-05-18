export var Inventory;
(function (Inventory_1) {
    class Inventory {
        constructor() {
            this.show = false;
            this.inventoryArray = new Array(Inventory.ySlots);
            this.leftHandSlot = new Slot(25, 1350);
            this.rightHandSlot = new Slot(175, 1350);
            // Setting Slots For Inventory
            for (let i = 0; i < Inventory.ySlots; i++)
                this.inventoryArray[i] = new Array(Inventory.xSlots);
            this.inventoryArray.forEach((arr, arrIndexY) => {
                for (let arrIndexX = 0; arrIndexX < Inventory.xSlots; arrIndexX++)
                    arr[arrIndexX] = new Slot(25 + arrIndexX * 150, 300 + arrIndexY * 150);
            });
        }
        addItem(item) {
            let slotsWithItem = this.getSlotOfItem(item);
            if (slotsWithItem.length > 0)
                slotsWithItem[0].setItemNum = slotsWithItem[0].getItemNum + 1;
            else {
                for (let i = 0; i < this.getInventoryArray.length; i++) {
                    for (let j = 0; j < this.getInventoryArray[i].length; j++) {
                        let slot = this.getInventoryArray[i][j];
                        if (slot.getItem === null) {
                            slot.setItem = item;
                            slot.setItemNum = slot.getItemNum + 1;
                            i = this.getInventoryArray.length;
                            break;
                        }
                    }
                }
            }
        }
        getSlotOfItem(item) {
            let slotsToReturn = [];
            this.getInventoryArray.forEach(xSlots => xSlots.forEach(slot => {
                if (slot.getItem && slot.getItem.getItemType === item.getItemType)
                    slotsToReturn.push(slot);
            }));
            return slotsToReturn;
        }
        // Getters and Setters
        get getInventoryArray() { return this.inventoryArray; }
        get getLeftHandSlot() { return this.leftHandSlot; }
        get getRightHandSlot() { return this.rightHandSlot; }
        get getShow() { return this.show; }
        set setShow(show) { this.show = show; }
    }
    Inventory.xSlots = 4;
    Inventory.ySlots = 7;
    Inventory_1.Inventory = Inventory;
    class Slot {
        constructor(x, y) {
            this.width = 125;
            this.height = 125;
            this.x = x;
            this.y = y;
            this.item = null;
            this.itemNum = 0;
            this.hovered = false;
        }
        clicked(e) {
        }
        get getX() { return this.x; }
        get getY() { return this.y; }
        get getWidth() { return this.width; }
        get getHeight() { return this.height; }
        get getItem() { return this.item; }
        set setItem(item) { this.item = item; }
        get getItemNum() { return this.itemNum; }
        set setItemNum(itemNum) { this.itemNum = itemNum; }
        get getHovered() { return this.hovered; }
        set setHovered(hovered) { this.hovered = hovered; }
    }
})(Inventory || (Inventory = {}));
