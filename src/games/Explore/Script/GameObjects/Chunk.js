import { Game } from "../Engine/Game.js";
import { camera, engine, game } from "../Engine/Init.js";
import { Block } from "./Block.js";
import { Grass } from "./Blocks/Grass.js";
import { Sand } from "./Blocks/Sand.js";
import { Stone } from "./Blocks/Stone.js";
import { Water } from "./Blocks/Water.js";
import { Snow } from "./Blocks/Snow.js";
export var Chunk;
(function (Chunk_1) {
    class Chunk {
        constructor(x, y) {
            // If Chunk is On Screen
            this.isOnScreen = () => this.getX + Chunk.width >= camera.getX && this.x <= camera.getX + engine.getContext.canvas.width && this.getY + Chunk.height >= camera.getY && this.getY <= camera.getY + engine.getContext.canvas.height;
            // Rounding Method
            this.roundUntil = (num, until) => Math.round(num * (Math.pow(10, until))) / (Math.pow(10, until));
            this.x = x;
            this.y = y;
            this.indexX = Math.floor(this.getX / Chunk.width);
            this.indexY = Math.floor(this.getY / Chunk.height);
            this.blocks = this.createBlocks();
        }
        generateInBlockEntities() {
            this.blocks.forEach(blockX => blockX.forEach(block => {
                if (block instanceof Grass.Grass)
                    block.generateInBlockEntities();
            }));
        }
        // Generate Blocks For Chunks
        createBlocks() {
            let toReturn = [];
            for (let i = 0; i < Chunk.blocksInChunkY; i++) {
                toReturn[i] = [];
                for (let j = 0; j < Chunk.blocksInChunkX; j++) {
                    const block = game.findGeneratedBlock(Math.floor(10 * game.getNoiseValue(j + this.indexX * Chunk.blocksInChunkX, i + this.indexY * Chunk.blocksInChunkY)));
                    switch (block) {
                        case Game.Blocks.grass:
                            toReturn[i][j] = new Grass.Grass(this, j * Block.Block.width + this.x, i * Block.Block.height + this.y, j, i);
                            break;
                        case Game.Blocks.sand:
                            toReturn[i][j] = new Sand.Sand(this, j * Block.Block.width + this.x, i * Block.Block.height + this.y, j, i);
                            break;
                        case Game.Blocks.water:
                            toReturn[i][j] = new Water.Water(this, j * Block.Block.width + this.x, i * Block.Block.height + this.y, j, i);
                            break;
                        case Game.Blocks.stone:
                            toReturn[i][j] = new Stone.Stone(this, j * Block.Block.width + this.x, i * Block.Block.height + this.y, j, i);
                            break;
                        case Game.Blocks.snow:
                            toReturn[i][j] = new Snow.Snow(this, j * Block.Block.width + this.x, i * Block.Block.height + this.y, j, i);
                            break;
                    }
                }
            }
            return toReturn;
        }
        // Getters
        get getX() { return this.x; }
        set setX(x) { this.x = this.roundUntil(x, 5); }
        get getY() { return this.y; }
        set setY(y) { this.y = this.roundUntil(y, 5); }
        get getIndexX() { return this.indexX; }
        get getIndexY() { return this.indexY; }
        get getBlocks() { return this.blocks; }
    }
    Chunk.blocksInChunkX = 8;
    Chunk.blocksInChunkY = 8;
    Chunk.width = Block.Block.width * Chunk.blocksInChunkX;
    Chunk.height = Block.Block.height * Chunk.blocksInChunkY;
    Chunk_1.Chunk = Chunk;
})(Chunk || (Chunk = {}));
