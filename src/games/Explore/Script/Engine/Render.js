import { Block } from "../GameObjects/Block.js";
import { Grass } from "../GameObjects/Blocks/Grass.js";
import { Sand } from "../GameObjects/Blocks/Sand.js";
import { Snow } from "../GameObjects/Blocks/Snow.js";
import { Stone } from "../GameObjects/Blocks/Stone.js";
import { Water } from "../GameObjects/Blocks/Water.js";
import { Player } from "../GameObjects/Player.js";
import { drawFunc, updateFunc } from "../Main.js";
import { Engine } from "./Engine.js";
import { camera, controller, engine, game, loader, update } from "./Init.js";
export var Render;
(function (Render_1) {
    class Render {
        constructor(context) {
            // Get Context
            this.ctx = context;
            this.ctx.imageSmoothingEnabled = false;
            // Set Up Draw Loop
            this.FPSCounter = new FPSCounter();
            this.doLoadingImage();
            this.todoAfterStop = { then: (fun) => this.todoAfterStopFunc = fun };
            this.stopVal = false;
        }
        // Starters and Stoppers
        start() {
            this.stopVal = false;
            this.loop();
        }
        stop() {
            this.stopVal = true;
            return this.todoAfterStop;
        }
        // Clear Canvas
        clear() {
            this.ctx.fillStyle = "#000";
            this.ctx.fillRect(0, 0, this.ctx.canvas.width / (camera.getZoom() / 100), this.ctx.canvas.height / (camera.getZoom() / 100));
        }
        // Looped Functions
        draw() {
            this.clear();
            const chunks = game.getChunks;
            chunks.forEach(chunk => chunk.getBlocks.forEach(row => row.forEach(block => {
                if (block instanceof Sand.Sand || block instanceof Water.Water || block instanceof Grass.Grass)
                    this.drawBlock(block);
            })));
            this.addGrassSandTextures();
            game.getEntities.forEach((entity, index) => {
                if (entity instanceof Player.Player && index < game.getEntities.length - 1) {
                    game.getEntities.splice(index, 1);
                    game.getEntities.push(entity);
                }
                else {
                    this.drawEntity(entity);
                    entity.draw();
                }
            });
            chunks.forEach(chunk => chunk.getBlocks.forEach(row => row.forEach(block => {
                if (!(block instanceof Sand.Sand) && !(block instanceof Water.Water) && !(block instanceof Grass.Grass))
                    this.drawBlock(block);
            })));
            this.addOtherTextures();
            this.addBlockLighting();
            controller.getHighlightedBlocks.forEach(block => {
                switch (block.getHighlighted) {
                    case Block.Highlighted.low:
                        this.ctx.fillStyle = `#fff`;
                        this.ctx.globalAlpha = 0.4;
                        break;
                    case Block.Highlighted.medium:
                        this.ctx.fillStyle = `#fff`;
                        this.ctx.globalAlpha = 0.6;
                        break;
                    case Block.Highlighted.high:
                        this.ctx.fillStyle = `#ff0`;
                        this.ctx.globalAlpha = 0.8;
                        break;
                }
                this.ctx.fillRect(block.getX - camera.getX, block.getY - camera.getY, Block.Block.width, Block.Block.height);
                this.ctx.globalAlpha = 1;
            });
            if (engine.inDev) {
                this.ctx.fillStyle = "#fff";
                this.ctx.font = "60px Arial";
                this.ctx.fillText(`FPS:${this.getFPS}`, 10, 60, undefined);
                this.ctx.fillText(`TPS:${update.getTPS}`, 10, 140, undefined);
            }
        }
        loop() {
            this.FPSCounter.newTick();
            if (engine.loopStyle === Engine.loop.seperate || engine.loopStyle === Engine.loop.togetherRender) {
                this.draw();
                drawFunc();
            }
            if (engine.loopStyle === Engine.loop.togetherRender) {
                game.getEntities.forEach(entity => entity.update());
                for (const chain in game.getEventChain) {
                    const theChain = game.getEventChain[chain];
                    if (theChain.length < 1)
                        break;
                    if (theChain[0] instanceof Function) {
                        if (theChain[0]())
                            theChain.shift();
                    }
                    else {
                        theChain[0][0]++;
                        if (theChain[0][0] >= theChain[0][1])
                            theChain.shift();
                    }
                }
                controller.update();
                updateFunc();
            }
            if (!this.stopVal)
                window.requestAnimationFrame(this.loop.bind(this));
            else
                this.todoAfterStopFunc();
        }
        // Drawing
        drawBlock(block) {
            this.ctx.fillStyle = block.getColor;
            if (block.getImage === undefined)
                this.ctx.fillRect(block.getX - camera.getX, block.getY - camera.getY, Block.Block.width, Block.Block.height);
            else
                this.ctx.drawImage(block.getImage, block.getX - camera.getX, block.getY - camera.getY, Block.Block.width, Block.Block.height);
        }
        drawEntity(entity) {
            this.ctx.save();
            // Drawing
            this.ctx.globalAlpha = entity.getColor[3];
            this.ctx.fillStyle = `rgb(${entity.getColor[0]}, ${entity.getColor[1]}, ${entity.getColor[2]})`;
            this.ctx.translate(entity.getX - camera.getX + entity.getWidth / 2, entity.getY - camera.getY + entity.getHeight / 2);
            this.ctx.rotate(entity.getRotate * (Math.PI / 180));
            if (entity.getImage === undefined)
                this.ctx.fillRect(-(entity.getWidth / 2), -(entity.getHeight / 2), entity.getWidth, entity.getHeight);
            else
                this.ctx.drawImage(entity.getImage, -(entity.getWidth / 2), -(entity.getHeight / 2), entity.getWidth, entity.getHeight);
            this.ctx.restore();
        }
        doLoadingImage() {
            this.clear();
            if (engine.inDev) {
                this.ctx.font = "500px Time New Roman";
                this.ctx.fillStyle = "#fff";
                this.ctx.fillText("Loading", this.ctx.canvas.width / 2 - 850, this.ctx.canvas.height / 2 + 100);
            }
        }
        // Lighting
        setLightLevelForAllBlocks(lightLevel) {
            game.getChunks.forEach(chunk => {
                chunk.getBlocks.forEach(chunkX => {
                    chunkX.forEach(block => block.setLightLevel = lightLevel);
                });
            });
        }
        addBlockLighting() {
            game.getChunks.forEach(chunk => {
                chunk.getBlocks.forEach(chunkX => {
                    chunkX.forEach(block => {
                        this.ctx.fillStyle = "#000";
                        this.ctx.globalAlpha = block.getLightLevel;
                        this.ctx.fillRect(block.getX - camera.getX, block.getY - camera.getY, Block.Block.width, Block.Block.height);
                        this.ctx.globalAlpha = 1;
                    });
                });
            });
        }
        // Other Textures
        addGrassSandTextures() {
            game.getChunks.forEach(chunk => {
                chunk.getBlocks.forEach(chunkX => {
                    chunkX.forEach(block => {
                        if (block instanceof Sand.Sand) {
                            const blocksAround = block.getBlocksNextTo();
                            if (blocksAround.up instanceof Water.Water)
                                this.ctx.drawImage(loader.getImage("sand-up"), block.getX - camera.getX, block.getY - camera.getY - Block.Block.height, Block.Block.width, Block.Block.height);
                            if (blocksAround.down instanceof Water.Water)
                                this.ctx.drawImage(loader.getImage("sand-down"), block.getX - camera.getX, block.getY - camera.getY + Block.Block.height, Block.Block.width, Block.Block.height);
                            if (blocksAround.left instanceof Water.Water)
                                this.ctx.drawImage(loader.getImage("sand-left"), block.getX - camera.getX - Block.Block.width, block.getY - camera.getY, Block.Block.width, Block.Block.height);
                            if (blocksAround.right instanceof Water.Water)
                                this.ctx.drawImage(loader.getImage("sand-right"), block.getX - camera.getX + Block.Block.width, block.getY - camera.getY, Block.Block.width, Block.Block.height);
                            if (blocksAround.up instanceof Water.Water && blocksAround.right instanceof Water.Water)
                                this.ctx.drawImage(loader.getImage("sand-up-right"), block.getX - camera.getX + Block.Block.width, block.getY - camera.getY - Block.Block.height, Block.Block.width, Block.Block.height);
                            if (blocksAround.up instanceof Water.Water && blocksAround.left instanceof Water.Water)
                                this.ctx.drawImage(loader.getImage("sand-up-left"), block.getX - camera.getX - Block.Block.width, block.getY - camera.getY - Block.Block.height, Block.Block.width, Block.Block.height);
                            if (blocksAround.down instanceof Water.Water && blocksAround.right instanceof Water.Water)
                                this.ctx.drawImage(loader.getImage("sand-down-right"), block.getX - camera.getX + Block.Block.width, block.getY - camera.getY + Block.Block.height, Block.Block.width, Block.Block.height);
                            if (blocksAround.down instanceof Water.Water && blocksAround.left instanceof Water.Water)
                                this.ctx.drawImage(loader.getImage("sand-down-left"), block.getX - camera.getX - Block.Block.width, block.getY - camera.getY + Block.Block.height, Block.Block.width, Block.Block.height);
                        }
                    });
                });
            });
            game.getChunks.forEach(chunk => {
                chunk.getBlocks.forEach(chunkX => {
                    chunkX.forEach(block => {
                        if (block instanceof Grass.Grass) {
                            const blocksAround = block.getBlocksNextTo();
                            if (blocksAround.up instanceof Sand.Sand || blocksAround.up instanceof Water.Water)
                                this.ctx.drawImage(loader.getImage("grass-up"), block.getX - camera.getX, block.getY - camera.getY - Block.Block.height, Block.Block.width, Block.Block.height);
                            if (blocksAround.down instanceof Sand.Sand || blocksAround.down instanceof Water.Water)
                                this.ctx.drawImage(loader.getImage("grass-down"), block.getX - camera.getX, block.getY - camera.getY + Block.Block.height, Block.Block.width, Block.Block.height);
                            if (blocksAround.left instanceof Sand.Sand || blocksAround.left instanceof Water.Water)
                                this.ctx.drawImage(loader.getImage("grass-left"), block.getX - camera.getX - Block.Block.width, block.getY - camera.getY, Block.Block.width, Block.Block.height);
                            if (blocksAround.right instanceof Sand.Sand || blocksAround.right instanceof Water.Water)
                                this.ctx.drawImage(loader.getImage("grass-right"), block.getX - camera.getX + Block.Block.width, block.getY - camera.getY, Block.Block.width, Block.Block.height);
                            if ((blocksAround.up instanceof Sand.Sand || blocksAround.up instanceof Water.Water) && (blocksAround.right instanceof Sand.Sand || blocksAround.right instanceof Water.Water))
                                this.ctx.drawImage(loader.getImage("grass-up-right"), block.getX - camera.getX + Block.Block.width, block.getY - camera.getY - Block.Block.height, Block.Block.width, Block.Block.height);
                            if ((blocksAround.up instanceof Sand.Sand || blocksAround.up instanceof Water.Water) && (blocksAround.left instanceof Sand.Sand || blocksAround.left instanceof Water.Water))
                                this.ctx.drawImage(loader.getImage("grass-up-left"), block.getX - camera.getX - Block.Block.width, block.getY - camera.getY - Block.Block.height, Block.Block.width, Block.Block.height);
                            if ((blocksAround.down instanceof Sand.Sand || blocksAround.down instanceof Water.Water) && (blocksAround.right instanceof Sand.Sand || blocksAround.right instanceof Water.Water))
                                this.ctx.drawImage(loader.getImage("grass-down-right"), block.getX - camera.getX + Block.Block.width, block.getY - camera.getY + Block.Block.height, Block.Block.width, Block.Block.height);
                            if ((blocksAround.down instanceof Sand.Sand || blocksAround.down instanceof Water.Water) && (blocksAround.left instanceof Sand.Sand || blocksAround.left instanceof Water.Water))
                                this.ctx.drawImage(loader.getImage("grass-down-left"), block.getX - camera.getX - Block.Block.width, block.getY - camera.getY + Block.Block.height, Block.Block.width, Block.Block.height);
                        }
                    });
                });
            });
        }
        addOtherTextures() {
            game.getChunks.forEach(chunk => {
                chunk.getBlocks.forEach(chunkX => {
                    chunkX.forEach(block => {
                        if (block instanceof Stone.Stone) {
                            const blocksAround = block.getBlocksNextTo();
                            if (blocksAround.up instanceof Grass.Grass || blocksAround.up instanceof Sand.Sand || blocksAround.up instanceof Water.Water)
                                this.ctx.drawImage(loader.getImage("stone-up"), block.getX - camera.getX, block.getY - camera.getY - Block.Block.height, Block.Block.width, Block.Block.height);
                            if (blocksAround.down instanceof Grass.Grass || blocksAround.down instanceof Sand.Sand || blocksAround.down instanceof Water.Water)
                                this.ctx.drawImage(loader.getImage("stone-down"), block.getX - camera.getX, block.getY - camera.getY + Block.Block.height, Block.Block.width, Block.Block.height);
                            if (blocksAround.left instanceof Grass.Grass || blocksAround.left instanceof Sand.Sand || blocksAround.left instanceof Water.Water)
                                this.ctx.drawImage(loader.getImage("stone-left"), block.getX - camera.getX - Block.Block.width, block.getY - camera.getY, Block.Block.width, Block.Block.height);
                            if (blocksAround.right instanceof Grass.Grass || blocksAround.right instanceof Sand.Sand || blocksAround.right instanceof Water.Water)
                                this.ctx.drawImage(loader.getImage("stone-right"), block.getX - camera.getX + Block.Block.width, block.getY - camera.getY, Block.Block.width, Block.Block.height);
                            if ((blocksAround.up instanceof Grass.Grass || blocksAround.up instanceof Sand.Sand || blocksAround.up instanceof Water.Water) && (blocksAround.right instanceof Grass.Grass || blocksAround.right instanceof Sand.Sand || blocksAround.right instanceof Water.Water))
                                this.ctx.drawImage(loader.getImage("stone-up-right"), block.getX - camera.getX + Block.Block.width, block.getY - camera.getY - Block.Block.height, Block.Block.width, Block.Block.height);
                            if ((blocksAround.up instanceof Grass.Grass || blocksAround.up instanceof Sand.Sand || blocksAround.up instanceof Water.Water) && (blocksAround.left instanceof Grass.Grass || blocksAround.left instanceof Sand.Sand || blocksAround.left instanceof Water.Water))
                                this.ctx.drawImage(loader.getImage("stone-up-left"), block.getX - camera.getX - Block.Block.width, block.getY - camera.getY - Block.Block.height, Block.Block.width, Block.Block.height);
                            if ((blocksAround.down instanceof Grass.Grass || blocksAround.down instanceof Sand.Sand || blocksAround.down instanceof Water.Water) && (blocksAround.right instanceof Grass.Grass || blocksAround.right instanceof Sand.Sand || blocksAround.right instanceof Water.Water))
                                this.ctx.drawImage(loader.getImage("stone-down-right"), block.getX - camera.getX + Block.Block.width, block.getY - camera.getY + Block.Block.height, Block.Block.width, Block.Block.height);
                            if ((blocksAround.down instanceof Grass.Grass || blocksAround.down instanceof Sand.Sand || blocksAround.down instanceof Water.Water) && (blocksAround.left instanceof Grass.Grass || blocksAround.left instanceof Sand.Sand || blocksAround.left instanceof Water.Water))
                                this.ctx.drawImage(loader.getImage("stone-down-left"), block.getX - camera.getX - Block.Block.width, block.getY - camera.getY + Block.Block.height, Block.Block.width, Block.Block.height);
                        }
                    });
                });
            });
            game.getChunks.forEach(chunk => {
                chunk.getBlocks.forEach(chunkX => {
                    chunkX.forEach(block => {
                        if (block instanceof Snow.Snow) {
                            const blocksAround = block.getBlocksNextTo();
                            if (blocksAround.up instanceof Stone.Stone || blocksAround.up instanceof Grass.Grass || blocksAround.up instanceof Sand.Sand || blocksAround.up instanceof Water.Water)
                                this.ctx.drawImage(loader.getImage("snow-up"), block.getX - camera.getX, block.getY - camera.getY - Block.Block.height, Block.Block.width, Block.Block.height);
                            if (blocksAround.down instanceof Stone.Stone || blocksAround.down instanceof Grass.Grass || blocksAround.down instanceof Sand.Sand || blocksAround.down instanceof Water.Water)
                                this.ctx.drawImage(loader.getImage("snow-down"), block.getX - camera.getX, block.getY - camera.getY + Block.Block.height, Block.Block.width, Block.Block.height);
                            if (blocksAround.left instanceof Stone.Stone || blocksAround.left instanceof Grass.Grass || blocksAround.left instanceof Sand.Sand || blocksAround.left instanceof Water.Water)
                                this.ctx.drawImage(loader.getImage("snow-left"), block.getX - camera.getX - Block.Block.width, block.getY - camera.getY, Block.Block.width, Block.Block.height);
                            if (blocksAround.right instanceof Stone.Stone || blocksAround.right instanceof Grass.Grass || blocksAround.right instanceof Sand.Sand || blocksAround.right instanceof Water.Water)
                                this.ctx.drawImage(loader.getImage("snow-right"), block.getX - camera.getX + Block.Block.width, block.getY - camera.getY, Block.Block.width, Block.Block.height);
                            if ((blocksAround.up instanceof Stone.Stone || blocksAround.up instanceof Grass.Grass || blocksAround.up instanceof Sand.Sand || blocksAround.up instanceof Water.Water) && (blocksAround.right instanceof Stone.Stone || blocksAround.right instanceof Grass.Grass || blocksAround.right instanceof Sand.Sand || blocksAround.right instanceof Water.Water))
                                this.ctx.drawImage(loader.getImage("snow-up-right"), block.getX - camera.getX + Block.Block.width, block.getY - camera.getY - Block.Block.height, Block.Block.width, Block.Block.height);
                            if ((blocksAround.up instanceof Stone.Stone || blocksAround.up instanceof Grass.Grass || blocksAround.up instanceof Sand.Sand || blocksAround.up instanceof Water.Water) && (blocksAround.left instanceof Stone.Stone || blocksAround.left instanceof Grass.Grass || blocksAround.left instanceof Sand.Sand || blocksAround.left instanceof Water.Water))
                                this.ctx.drawImage(loader.getImage("snow-up-left"), block.getX - camera.getX - Block.Block.width, block.getY - camera.getY - Block.Block.height, Block.Block.width, Block.Block.height);
                            if ((blocksAround.down instanceof Stone.Stone || blocksAround.down instanceof Grass.Grass || blocksAround.down instanceof Sand.Sand || blocksAround.down instanceof Water.Water) && (blocksAround.right instanceof Stone.Stone || blocksAround.right instanceof Grass.Grass || blocksAround.right instanceof Sand.Sand || blocksAround.right instanceof Water.Water))
                                this.ctx.drawImage(loader.getImage("snow-down-right"), block.getX - camera.getX + Block.Block.width, block.getY - camera.getY + Block.Block.height, Block.Block.width, Block.Block.height);
                            if ((blocksAround.down instanceof Stone.Stone || blocksAround.down instanceof Grass.Grass || blocksAround.down instanceof Sand.Sand || blocksAround.down instanceof Water.Water) && (blocksAround.left instanceof Stone.Stone || blocksAround.left instanceof Grass.Grass || blocksAround.left instanceof Sand.Sand || blocksAround.left instanceof Water.Water))
                                this.ctx.drawImage(loader.getImage("snow-down-left"), block.getX - camera.getX - Block.Block.width, block.getY - camera.getY + Block.Block.height, Block.Block.width, Block.Block.height);
                        }
                    });
                });
            });
        }
        // Empty Funcs
        todoAfterStopFunc() { }
        // Getters
        get getFPS() { return this.FPSCounter.getFPS; }
    }
    Render_1.Render = Render;
    // FPS Counter Class
    class FPSCounter {
        constructor() {
            this.fpsCount = 0;
            this.fps = 0;
            const worker = new Worker("./Script/Engine/Workers/Logs.js");
            worker.postMessage("start");
            worker.onmessage = e => {
                this.fps = this.fpsCount;
                this.fpsCount = 0;
            };
        }
        newTick() { this.fpsCount++; }
        get getFPS() { return this.fps; }
    }
})(Render || (Render = {}));
