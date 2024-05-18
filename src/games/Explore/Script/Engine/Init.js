import { loadFunc } from "../Main.js";
import { Camera } from "./Camera.js";
import { Controller } from "./Controller.js";
import { Engine } from "./Engine.js";
import { Game } from "./Game.js";
import { Render } from "./Render.js";
import { Update } from "./Update.js";
import { Loader } from "./Loader.js";
export const camera = new Camera.Camera();
export const game = new Game.Game();
export const engine = new Engine.Engine(75);
export const update = new Update.Update();
export const render = new Render.Render(engine.getContext);
export const controller = new Controller.Controller();
export const loader = new Loader.Loader();
loadFunc();
loader.allAssetsGiven();
if (engine.inDev) {
    const worker = new Worker("./Script/Engine/Workers/Logs.js");
    worker.postMessage("start");
    worker.onmessage = e => {
        console.log(`TPS: ${update.getTPS} FPS: ${render.getFPS}`);
    };
}
