import { engine } from "./Init.js";
export var Camera;
(function (Camera_1) {
    class Camera {
        constructor() {
            this.x = 0;
            this.y = 0;
            this.zoomVal = 1;
            this.zoomX = 0;
            this.zoomY = 0;
        }
        goTo(x, y) {
            this.setX = x;
            this.setY = y;
        }
        get getX() { return this.x; }
        set setX(x) { this.x = this.roundUntil(x, 5); }
        get getY() { return this.y; }
        set setY(y) { this.y = this.roundUntil(y, 5); }
        setZoom(zoom, centerZoom) {
            let resetValue = engine.getContext.canvas.width / (engine.getContext.canvas.width * this.zoomVal);
            engine.getContext.scale(resetValue, resetValue);
            const originalWidth = engine.getContext.canvas.width;
            const originalHeight = engine.getContext.canvas.height;
            this.zoomVal = zoom / 100;
            engine.getContext.scale(this.zoomVal, this.zoomVal);
            if (centerZoom) {
                this.x = (originalWidth - (originalWidth / (zoom / 100))) / 2 + (this.x - this.zoomX);
                this.y = (originalHeight - (originalHeight / (zoom / 100))) / 2 + (this.y - this.zoomY);
                this.zoomX = (originalWidth - (originalWidth / (zoom / 100))) / 2;
                this.zoomY = (originalHeight - (originalHeight / (zoom / 100))) / 2;
            }
        }
        getZoom() { return this.zoomVal * 100; }
        roundUntil(num, until) {
            return Math.round(num * (Math.pow(10, until))) / (Math.pow(10, until));
        }
    }
    Camera_1.Camera = Camera;
})(Camera || (Camera = {}));
