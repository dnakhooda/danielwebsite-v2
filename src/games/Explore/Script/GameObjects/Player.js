import { Entity } from "../Engine/Entity/Entity.js";
import { camera, controller, engine, game, loader } from "../Engine/Init.js";
import { Block } from "./Block.js";
import { Grass } from "./Blocks/Grass.js";
import { Sand } from "./Blocks/Sand.js";
import { Chunk } from "./Chunk.js";
import { Inventory } from "./Inventory.js";
export var Player;
(function (Player_1) {
    let Direction;
    (function (Direction) {
        Direction[Direction["left"] = 0] = "left";
        Direction[Direction["right"] = 1] = "right";
        Direction[Direction["up"] = 2] = "up";
        Direction[Direction["down"] = 3] = "down";
    })(Direction || (Direction = {}));
    class Player extends Entity.Entity {
        constructor() {
            super("player", 0, 0, 100, 100);
            this.setColor(100, 100, 255, 1);
            this.direction = Direction.up;
            this.speed = 5;
            this.doCollision = true;
            this.chunkIn = this.checkChunkIn();
            this.hearts = 5;
            this.maxHearts = 5;
            this.armors = 0;
            this.maxArmors = 5;
            this.inventory = new Inventory.Inventory();
            this.setImage = loader.getImage("player");
        }
        onKeyDown(e) {
            switch (e.key.toLocaleLowerCase()) {
                case "e":
                    this.inventory.setShow = !this.inventory.getShow;
                    break;
            }
        }
        // Update
        update() {
            // Controls
            const brokenCollision = this.hasBrokenCollision();
            const collision = this.getCollisionBlocks();
            if (controller.getKey("w") || controller.getKey("ArrowUp")) {
                this.setY = this.getY - this.speed;
                this.setRotate = 0;
                if (brokenCollision.topLeft && collision.topLeft !== undefined)
                    this.setY = collision.topLeft.getY + Block.Block.height + 0.1;
                if (brokenCollision.topRight && collision.topRight !== undefined)
                    this.setY = collision.topRight.getY + Block.Block.height + 0.1;
            }
            else if (controller.getKey("s") || controller.getKey("ArrowDown")) {
                this.setY = this.getY + this.speed;
                this.setRotate = 180;
                if (brokenCollision.bottomLeft && collision.bottomLeft !== undefined)
                    this.setY = collision.bottomLeft.getY - this.getHeight - 0.1;
                if (brokenCollision.bottomRight && collision.bottomRight !== undefined)
                    this.setY = collision.bottomRight.getY - this.getHeight - 0.1;
            }
            else if (controller.getKey("a") || controller.getKey("ArrowLeft")) {
                this.setX = this.getX - this.speed;
                this.setRotate = 270;
                if (brokenCollision.topLeft && collision.topLeft !== undefined)
                    this.setX = collision.topLeft.getX + Block.Block.width + 0.1;
                if (brokenCollision.bottomLeft && collision.bottomLeft !== undefined)
                    this.setX = collision.bottomLeft.getX + Block.Block.width + 0.1;
            }
            else if (controller.getKey("d") || controller.getKey("ArrowRight")) {
                this.setX = this.getX + this.speed;
                this.setRotate = 90;
                if (brokenCollision.topRight && collision.topRight !== undefined)
                    this.setX = collision.topRight.getX - this.getWidth - 0.1;
                if (brokenCollision.bottomRight && collision.bottomRight !== undefined)
                    this.setX = collision.bottomRight.getX - this.getWidth - 0.1;
            }
            if (controller.getKey("s") || controller.getKey("w") || controller.getKey("a") || controller.getKey("d") ||
                controller.getKey("ArrowUp") || controller.getKey("ArrowDown") || controller.getKey("ArrowRight") || controller.getKey("ArrowLeft"))
                this.chunkIn = this.checkChunkIn();
        }
        // Will Not Spawn In Water
        spawn() {
            while (true) {
                const collision = this.hasBrokenCollision();
                if (collision.bottomLeft || collision.bottomRight || collision.topLeft || collision.topRight)
                    this.setY = this.getY - Block.Block.height;
                else
                    break;
            }
            camera.goTo(this.getX - engine.getContext.canvas.width / 2 + this.getWidth / 2, this.getY - engine.getContext.canvas.height / 2 + this.getHeight / 2);
        }
        // Chunk Loading
        loadChunksAround() {
            const chunkPlayerIn = game.getChunks.filter((chunk => (chunk.getX === this.chunkIn.chunkXTop && chunk.getY === this.chunkIn.chunkYTop) || (chunk.getX === this.chunkIn.chunkXBottom && chunk.getY === this.chunkIn.chunkYTop) || (chunk.getX === this.chunkIn.chunkXTop && chunk.getY === this.chunkIn.chunkYBottom) || (chunk.getX === this.chunkIn.chunkXBottom && chunk.getY === this.chunkIn.chunkYBottom)));
            game.getChunks.forEach(chunk => {
                if (!chunk.isOnScreen())
                    game.removeChunk(chunk);
            });
            const chunksHeight = 5;
            const chunkWidth = 5;
            chunkPlayerIn.forEach(chunk => {
                for (let height = 0; height < chunksHeight; height++)
                    for (let width = 0; width < chunkWidth; width++) {
                        const chunkX = chunk.getX + (Chunk.Chunk.width * width) - (Chunk.Chunk.width * Math.floor(chunkWidth / 2));
                        const chunkY = chunk.getY + (Chunk.Chunk.height * (height)) - (Chunk.Chunk.height * Math.floor(chunksHeight / 2));
                        if (game.getChunk(chunkX, chunkY).length < 1)
                            game.addChunk(new Chunk.Chunk(chunkX, chunkY));
                    }
            });
        }
        // Collision
        getCollisionBlocks() {
            return {
                topLeft: game.getBlock(this.getX, this.getY),
                topRight: game.getBlock(this.getX + this.getWidth, this.getY),
                bottomLeft: game.getBlock(this.getX, this.getY + this.getHeight),
                bottomRight: game.getBlock(this.getX + this.getWidth, this.getY + this.getHeight),
            };
        }
        hasBrokenCollision() {
            const collision = this.getCollisionBlocks();
            return {
                topLeft: !(collision.topLeft instanceof Grass.Grass || collision.topLeft instanceof Sand.Sand),
                topRight: !(collision.topRight instanceof Grass.Grass || collision.topRight instanceof Sand.Sand),
                bottomLeft: !(collision.bottomLeft instanceof Grass.Grass || collision.bottomLeft instanceof Sand.Sand),
                bottomRight: !(collision.bottomRight instanceof Grass.Grass || collision.bottomRight instanceof Sand.Sand),
            };
        }
        // Get Chunk In Info
        checkChunkIn() {
            const chunkXTop = Math.floor(this.getX / Chunk.Chunk.width) * Chunk.Chunk.width;
            const chunkYTop = Math.floor(this.getY / Chunk.Chunk.height) * Chunk.Chunk.height;
            const chunkXBottom = Math.floor((this.getX + this.getWidth) / Chunk.Chunk.width) * Chunk.Chunk.width;
            const chunkYBottom = Math.floor((this.getY + this.getHeight) / Chunk.Chunk.height) * Chunk.Chunk.height;
            const returnObject = {
                chunkXTop: chunkXTop,
                chunkYTop: chunkYTop,
                chunkXBottom: chunkXBottom,
                chunkYBottom: chunkYBottom,
            };
            if (this.chunkIn !== returnObject)
                this.loadChunksAround();
            return returnObject;
        }
        // Getters & Setters
        get getChunkIn() { return this.chunkIn; }
        get getInventory() { return this.inventory; }
        get getDirection() { return this.direction; }
        get getHearts() { return this.hearts; }
        set setHearts(hearts) { this.hearts = hearts; }
        get getMaxHearts() { return this.maxHearts; }
        set setMaxHearts(maxHearts) { this.maxHearts = maxHearts; }
        get getArmors() { return this.armors; }
        set setArmors(armors) { this.armors = armors; }
        get getMaxArmors() { return this.maxArmors; }
        set setMaxArmors(maxArmors) { this.maxArmors = maxArmors; }
        get getDoCollision() { return this.doCollision; }
        set setDoCollision(doCollision) { this.doCollision = doCollision; }
    }
    Player_1.Player = Player;
})(Player || (Player = {}));
