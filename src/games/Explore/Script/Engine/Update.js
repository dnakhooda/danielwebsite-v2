import { drawFunc, updateFunc } from "../Main.js";
import { Engine } from "./Engine.js";
import { controller, engine, game, render } from "./Init.js";
export var Update;
(function (Update_1) {
    class Update {
        constructor() {
            this.tps = 0;
            this.tpsCount = 0;
            const worker = new Worker("./Script/Engine/Workers/Logs.js");
            worker.postMessage("start");
            worker.onmessage = e => {
                this.tps = this.tpsCount;
                this.tpsCount = 0;
            };
        }
        start() {
            this.worker = new Worker("./Script/Engine/Workers/UpdateLoop.js");
            this.worker.postMessage(engine.getSetTPS);
            this.worker.onmessage = e => {
                if (engine.loopStyle === Engine.loop.togetherUpdate) {
                    render.draw();
                    drawFunc();
                }
                if (engine.loopStyle === Engine.loop.seperate || engine.loopStyle === Engine.loop.togetherUpdate) {
                    game.getEntities.forEach(entity => {
                        entity.update();
                    });
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
                this.tpsCount++;
            };
        }
        stop() {
            var _a;
            (_a = this.worker) === null || _a === void 0 ? void 0 : _a.terminate();
        }
        get getTPS() { return this.tps; }
    }
    Update_1.Update = Update;
})(Update || (Update = {}));
