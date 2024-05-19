import { Neutron } from "../Neutron/Neutron.js";
// Describes Wether Pipe is Facing Up or Down
export var pipeType;
(function (pipeType) {
    pipeType[pipeType["top"] = 0] = "top";
    pipeType[pipeType["bottom"] = 1] = "bottom";
})(pipeType || (pipeType = {}));
export class Pipe extends Neutron.Sprites.Sprite {
    constructor(id, x, height, myPipeType) {
        // Give Pipe Facing Direction
        let y = 0;
        switch (myPipeType) {
            case pipeType.top:
                y + height;
                break;
            case pipeType.bottom:
                y = Neutron.getRender().getHeight - height;
                break;
        }
        super(id, x, y, 200, height, `#31d11f`, 5);
        this.givePoint = true;
    }
    // Movement of Pipe on Screen and Deletion if not needed
    move() {
        this.getMovement.setX = this.getMovement.getX - 10;
        if (this.getMovement.getX + this.getDimensions.getWidth < 0)
            Neutron.getGame().deleteSpriteById(this.getId);
    }
}
