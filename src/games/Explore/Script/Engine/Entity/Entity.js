import { engine } from "../Init.js";
export var Entity;
(function (Entity_1) {
    let Place;
    (function (Place) {
        Place[Place["center"] = 0] = "center";
    })(Place = Entity_1.Place || (Entity_1.Place = {}));
    class Entity {
        constructor(id, x, y, width, height) {
            this.id = id;
            this.x = x;
            this.y = y;
            this.width = width;
            this.height = height;
            this.rotate = 0;
            this.color = [255, 255, 255, 1.0];
        }
        goTo(x, y) {
            this.setX = x;
            this.setY = y;
        }
        to(to) {
            switch (to) {
                case Place.center:
                    this.goTo(engine.getContext.canvas.width / 2 - this.width / 2, engine.getContext.canvas.height / 2 - this.height / 2);
                    break;
            }
        }
        update() { }
        draw() { }
        onKeyDown(e) { }
        onKeyUp(e) { }
        onMouseDown(e) { }
        onMouseMove(e) { }
        clicked(e) { }
        clickedCameraOffSet(e) { }
        get getX() { return this.x; }
        set setX(x) { this.x = this.roundUntil(x, 5); }
        get getY() { return this.y; }
        set setY(y) { this.y = this.roundUntil(y, 5); }
        get getWidth() { return this.width; }
        set setWidth(width) { this.width = this.roundUntil(width, 5); }
        get getHeight() { return this.height; }
        set setHeight(height) { this.height = this.roundUntil(height, 5); }
        get getRotate() { return this.rotate; }
        set setRotate(rotate) { this.rotate = rotate; }
        get getColor() { return this.color; }
        setColor(r, g, b, alpha) { this.color = [this.roundUntil(r, 0), this.roundUntil(g, 0), this.roundUntil(b, 0), this.roundUntil(alpha, 2)]; }
        get getImage() { return this.image; }
        set setImage(image) { this.image = image; }
        roundUntil(num, until) {
            return Math.round(num * (Math.pow(10, until))) / (Math.pow(10, until));
        }
    }
    Entity_1.Entity = Entity;
})(Entity || (Entity = {}));
