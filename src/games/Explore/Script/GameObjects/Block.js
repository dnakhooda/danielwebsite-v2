import { game } from "../Engine/Init.js";
import { Chunk } from "./Chunk.js";
export var Block;
(function (Block_1) {
    let Highlighted;
    (function (Highlighted) {
        Highlighted[Highlighted["none"] = 0] = "none";
        Highlighted[Highlighted["low"] = 1] = "low";
        Highlighted[Highlighted["medium"] = 2] = "medium";
        Highlighted[Highlighted["high"] = 3] = "high";
    })(Highlighted = Block_1.Highlighted || (Block_1.Highlighted = {}));
    class Block {
        constructor(chunk, x, y, indexX, indexY, level) {
            this.chunk = chunk;
            this.x = x;
            this.y = y;
            this.indexX = indexX;
            this.indexY = indexY;
            this.color = "#000";
            this.lightLevel = 0;
            this.level = level;
            this.highlighted = Highlighted.none;
        }
        // Get Blocks Around
        getBlocksNextTo() {
            let leftBlock = undefined;
            if (this.indexX > 0)
                leftBlock = this.chunk.getBlocks[this.indexY][this.indexX - 1];
            else {
                const chunk = game.getChunk(this.chunk.getX - Chunk.Chunk.width, this.chunk.getY)[0];
                if (chunk !== undefined)
                    leftBlock = chunk.getBlocks[this.indexY][Chunk.Chunk.blocksInChunkX - 1];
            }
            let rightBlock = undefined;
            if (this.indexX < Chunk.Chunk.blocksInChunkX - 1)
                rightBlock = this.chunk.getBlocks[this.indexY][this.indexX + 1];
            else {
                const chunk = game.getChunk(this.chunk.getX + Chunk.Chunk.width, this.chunk.getY)[0];
                if (chunk !== undefined)
                    rightBlock = chunk.getBlocks[this.indexY][0];
            }
            let upBlock = undefined;
            if (this.indexY > 0)
                upBlock = this.chunk.getBlocks[this.indexY - 1][this.indexX];
            else {
                const chunk = game.getChunk(this.chunk.getX, this.chunk.getY - Chunk.Chunk.height)[0];
                if (chunk !== undefined)
                    upBlock = chunk.getBlocks[Chunk.Chunk.blocksInChunkY - 1][this.indexX];
            }
            let downBlock = undefined;
            if (this.indexX < Chunk.Chunk.blocksInChunkY)
                if (this.chunk.getBlocks[this.indexY + 1] !== undefined)
                    downBlock = this.chunk.getBlocks[this.indexY + 1][this.indexX];
                else {
                    const chunk = game.getChunk(this.chunk.getX, this.chunk.getY + Chunk.Chunk.height)[0];
                    if (chunk !== undefined)
                        downBlock = chunk.getBlocks[0][this.indexX];
                }
            return { left: leftBlock, right: rightBlock, up: upBlock, down: downBlock };
        }
        clicked(e) { }
        // Getters
        get getColor() { return this.color; }
        set setColor(color) { this.color = color; }
        get getX() { return this.x; }
        get getY() { return this.y; }
        get getIndexX() { return this.indexX; }
        get getIndexY() { return this.indexY; }
        get getChunk() { return this.chunk; }
        get getImage() { return this.image; }
        set setImage(image) { this.image = image; }
        get getLightLevel() { return this.lightLevel; }
        set setLightLevel(lightLevel) { this.lightLevel = lightLevel; }
        get getHighlighted() { return this.highlighted; }
        set setHighlighted(highlighted) { this.highlighted = highlighted; }
        get getLevel() { return this.level; }
    }
    Block.width = 100;
    Block.height = 100;
    Block_1.Block = Block;
})(Block || (Block = {}));
