import { Block } from "../GameObjects/Block.js";
import { Chunk } from "../GameObjects/Chunk.js";
import { makeRectangle } from "../Library/fractel.js";
import { makeNoise2D } from "../Library/noise.js";
import { engine, render } from "./Init.js";
export var Game;
(function (Game_1) {
    let Blocks;
    (function (Blocks) {
        Blocks[Blocks["grass"] = 0] = "grass";
        Blocks[Blocks["sand"] = 1] = "sand";
        Blocks[Blocks["water"] = 2] = "water";
        Blocks[Blocks["stone"] = 3] = "stone";
        Blocks[Blocks["snow"] = 4] = "snow";
        Blocks[Blocks["air"] = 5] = "air";
    })(Blocks = Game_1.Blocks || (Game_1.Blocks = {}));
    class Game {
        constructor() {
            // World Generation
            this.getNoiseValue = (x, y) => makeRectangle(y, x, this.noise, { frequency: 0.062, octaves: 3 });
            // Chunks
            this.addChunk = (chunk) => {
                if (this.alreadyGeneratedChunks.filter(checkChunk => chunk.getX === checkChunk[0] && chunk.getY === checkChunk[1]).length < 1) {
                    this.alreadyGeneratedChunks.push([chunk.getX, chunk.getY]);
                    chunk.generateInBlockEntities();
                }
                this.chunks.push(chunk);
            };
            this.removeChunk = (remChunk) => this.chunks = this.chunks.filter(chunk => chunk !== remChunk);
            this.clearChunk = () => this.chunks = [];
            this.getChunk = (x, y) => this.chunks.filter(chunk => (chunk.getX === x && chunk.getY === y));
            // Entities
            this.addEntity = (entity) => this.entities.push(entity);
            this.clearEntities = () => this.entities = [];
            // Events
            this.chainEvent = (events, id) => this.eventChain[id] = events;
            this.getChainEvent = (id) => this.eventChain[id];
            this.wait = (seconds) => [0, seconds * engine.getSetTPS];
            this.resetTimedEvent = (unique) => delete this.timedEventId[unique];
            this.resetAllTimedEvents = () => this.timedEventId = {};
            this.entities = [];
            this.eventChain = {};
            this.timedEventId = {};
            this.chunks = [];
            this.alreadyGeneratedChunks = [];
            this.time = [0, 0, 0];
            this.seed = Math.floor(Math.random() * 100000);
            this.noise = makeNoise2D(this.seed);
        }
        findGeneratedBlock(num) {
            if (num < -3)
                return Blocks.water;
            if (num < -2)
                return Blocks.sand;
            if (num < 4)
                return Blocks.grass;
            if (num < 6)
                return Blocks.stone;
            if (num > 5)
                return Blocks.snow;
            return Blocks.air;
        }
        // Blocks
        getBlock(x, y) {
            const chunk = this.getChunk(Math.floor(x / Chunk.Chunk.width) * Chunk.Chunk.width, Math.floor(y / Chunk.Chunk.height) * Chunk.Chunk.height)[0];
            let toReturn;
            if (chunk === undefined)
                return undefined;
            chunk.getBlocks.forEach(blockX => {
                blockX.forEach(block => {
                    if (block.getX === Math.floor(x / Block.Block.width) * Block.Block.width && block.getY === Math.floor(y / Block.Block.height) * Block.Block.height)
                        toReturn = block;
                });
            });
            return toReturn;
        }
        // Time
        doTime() {
            this.time[0]++;
            if (this.time[0] > engine.getSetTPS) {
                this.time[0] = 0;
                this.time[1]++;
            }
            if (this.time[1] > 59) {
                this.time[1] = 0;
                this.time[2]++;
            }
            if (this.time[2] > 19)
                this.time[2] = 0;
            this.changeLightLevels();
        }
        changeLightLevels() {
            if (this.getTime[2] >= 18)
                render.setLightLevelForAllBlocks(0.2);
            else if (this.getTime[2] >= 16)
                render.setLightLevelForAllBlocks(0.5);
            else if (this.getTime[2] >= 14)
                render.setLightLevelForAllBlocks(0.8);
            else if (this.getTime[2] >= 12)
                render.setLightLevelForAllBlocks(0.85);
            else if (this.getTime[2] >= 10)
                render.setLightLevelForAllBlocks(0.8);
            else if (this.getTime[2] >= 8)
                render.setLightLevelForAllBlocks(0.5);
            else if (this.getTime[2] >= 6)
                render.setLightLevelForAllBlocks(0.2);
            else if (this.getTime[2] >= 4)
                render.setLightLevelForAllBlocks(0.1);
            else if (this.getTime[2] >= 2)
                render.setLightLevelForAllBlocks(0.1);
            else if (this.getTime[2] >= 0)
                render.setLightLevelForAllBlocks(0.1);
        }
        removeEntity(entity) {
            const index = this.entities.indexOf(entity);
            this.entities.splice(index, 1);
            return undefined;
        }
        getEntityByClass(objectClass) {
            let returnList = [];
            this.entities.forEach(entity => {
                if (entity instanceof objectClass)
                    returnList.push(entity);
            });
            return returnList;
        }
        addToChainEvent(event, id) {
            if (!this.eventChain[id])
                this.eventChain[id] = [];
            this.eventChain[id].push(event);
        }
        timedEvent(unique, times) {
            if (!this.timedEventId.hasOwnProperty(unique)) {
                this.timedEventId[unique] = 0;
                return true;
            }
            if (this.timedEventId[unique] < times - 1) {
                this.timedEventId[unique]++;
                return true;
            }
            return false;
        }
        // Getters
        get getEventChain() { return this.eventChain; }
        get getEntities() { return this.entities; }
        get getChunks() { return this.chunks; }
        get getSeed() { return this.seed; }
        get getTime() { return this.time; }
    }
    Game_1.Game = Game;
})(Game || (Game = {}));
