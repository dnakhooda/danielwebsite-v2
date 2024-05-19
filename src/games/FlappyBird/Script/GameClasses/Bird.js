import { Neutron } from "../Neutron/Neutron.js";
export class Bird extends Neutron.Sprites.Sprite {
    constructor(x, y) {
        super(`bird`, x, y, 80, 80, `blue`, 10);
        // Setting Variables
        this.gravityY = 10;
        this.gravityAcc = 0.1;
        this.boost = false;
        this.boostTimer = 200;
    }
    // Bird Movement
    doMovement() {
        this.gravityAcc *= 1.07;
        if (Neutron.getController().getKey("s"))
            this.gravityAcc += 0.5;
        this.gravityY += this.gravityAcc;
        this.getMovement.setY = this.getMovement.getY + this.gravityY;
        if (this.gravityY > 15)
            this.gravityY = 15;
        if (this.gravityAcc > 3)
            this.gravityAcc = 3;
        if (Neutron.getController().getKey(" ") && this.gravityY > -10) {
            this.gravityY = -10;
            this.gravityAcc = 0.1;
        }
        this.boostTimer++;
        if (this.boostTimer > 200) {
            this.setColor = "green";
            this.boost = true;
            this.boostTimer = 0;
        }
        if (Neutron.getController().getKey("w") && this.boost) {
            this.setColor = "blue";
            this.gravityY = -25;
            this.gravityAcc = 0.1;
            this.boost = false;
        }
        this.setRotation = this.gravityY;
    }
}
