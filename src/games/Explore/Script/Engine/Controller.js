import { Block } from "../GameObjects/Block.js";
import { Player } from "../GameObjects/Player.js";
import { camera, engine, game } from "./Init.js";
export var Controller;
(function (Controller_1) {
    class Controller {
        constructor() {
            this.mouseX = 0;
            this.mouseY = 0;
            this.mouseXCameraOffSet = 0;
            this.mouseYCameraOffSet = 0;
            this.highlightedBlocks = [];
            this.keydown = {};
            this.mouseOverEntities = [];
            document.addEventListener('contextmenu', event => event.preventDefault());
            document.addEventListener("keydown", e => {
                this.keydown[e.key] = true;
                game.getEntities.forEach(entity => {
                    entity.onKeyDown(e);
                });
            });
            document.addEventListener("keyup", e => {
                this.keydown[e.key] = false;
                game.getEntities.forEach(entity => {
                    entity.onKeyUp(e);
                });
            });
            document.addEventListener("mousedown", e => {
                const canvas = engine.getContext.canvas;
                const canvasBounds = canvas.getBoundingClientRect();
                this.mouseX = ((e.clientX - canvas.offsetLeft) * (canvas.width / canvasBounds.width));
                this.mouseY = ((e.clientY - canvas.offsetTop) * (canvas.height / canvasBounds.height));
                const x = this.mouseX;
                const y = this.mouseY;
                game.getEntities.forEach(entity => {
                    entity.onMouseDown(e);
                    if (x >= entity.getX && x <= entity.getX + entity.getWidth && y >= entity.getY && y <= entity.getY + entity.getHeight)
                        entity.clicked(e);
                    if (this.mouseXCameraOffSet >= entity.getX && this.mouseXCameraOffSet <= entity.getX + entity.getWidth && this.mouseYCameraOffSet >= entity.getY && this.mouseYCameraOffSet <= entity.getY + entity.getHeight)
                        entity.clickedCameraOffSet(e);
                });
                const players = game.getEntityByClass(Player.Player);
                players.forEach(player => {
                    player.getInventory.getInventoryArray.forEach(arrX => arrX.forEach(slot => {
                        if (x >= slot.getX && x <= slot.getX + slot.getWidth && y >= slot.getY && y <= slot.getY + slot.getHeight)
                            slot.clicked(e);
                    }));
                });
            });
            document.addEventListener("mousemove", e => {
                const canvas = engine.getContext.canvas;
                const canvasBounds = canvas.getBoundingClientRect();
                this.mouseX = ((e.clientX - canvas.offsetLeft) * (canvas.width / canvasBounds.width));
                this.mouseY = ((e.clientY - canvas.offsetTop) * (canvas.height / canvasBounds.height));
                const x = this.mouseX;
                const y = this.mouseY;
                this.mouseOverEntities = [];
                game.getEntities.forEach(entity => {
                    entity.onMouseMove(e);
                    if (this.mouseXCameraOffSet >= entity.getX && this.mouseXCameraOffSet <= entity.getX + entity.getWidth && this.mouseYCameraOffSet >= entity.getY && this.mouseYCameraOffSet <= entity.getY + entity.getHeight)
                        this.mouseOverEntities.push(entity);
                });
                const players = game.getEntityByClass(Player.Player);
                players.forEach(player => {
                    player.getInventory.getInventoryArray.forEach(arrX => arrX.forEach(slot => {
                        if (x >= slot.getX && x <= slot.getX + slot.getWidth && y >= slot.getY && y <= slot.getY + slot.getHeight)
                            slot.setHovered = true;
                        else
                            slot.setHovered = false;
                    }));
                });
            });
        }
        getKey(key) {
            if (!this.keydown[key])
                return false;
            return true;
        }
        update() {
            this.mouseXCameraOffSet = this.mouseX + camera.getX;
            this.mouseYCameraOffSet = this.mouseY + camera.getY;
            game.getChunks.forEach(chunk => chunk.getBlocks.forEach(blockX => blockX.forEach(block => {
                this.highlightedBlocks = this.highlightedBlocks.filter((item) => item != block);
                block.setHighlighted = Block.Highlighted.none;
            })));
            const block = game.getBlock(this.mouseXCameraOffSet, this.mouseYCameraOffSet);
            const player = game.getEntityByClass(Player.Player)[0];
            if (block !== undefined) {
                if (Math.sqrt(Math.pow(block.getX - player.getX, 2) + Math.pow(block.getY - player.getY, 2)) < 500)
                    block.setHighlighted = Block.Highlighted.high;
                else
                    block.setHighlighted = Block.Highlighted.low;
                this.highlightedBlocks.push(block);
            }
        }
        get getMouseOverEntities() { return this.mouseOverEntities; }
        get getMouseX() { return this.mouseX; }
        get getMouseY() { return this.mouseY; }
        get getHighlightedBlocks() { return this.highlightedBlocks; }
        get getMouseXCameraOffSet() { return this.mouseXCameraOffSet; }
        get getMouseYCameraOffSet() { return this.mouseYCameraOffSet; }
    }
    Controller_1.Controller = Controller;
})(Controller || (Controller = {}));
