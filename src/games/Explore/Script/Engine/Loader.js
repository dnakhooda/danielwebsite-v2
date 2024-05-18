import { initFunc } from "../Main.js";
import { engine, render, update } from "./Init.js";
export var Loader;
(function (Loader_1) {
    class Loader {
        constructor() {
            this.toLoad = 0;
            this.loaded = 0;
            this.finishedLoading = () => this.loaded >= this.toLoad;
            if (engine.inDev)
                console.time("Loading Time");
            this.images = {};
            this.sounds = {};
        }
        addImage(id, image) {
            this.toLoad++;
            const htmlImage = new Image();
            htmlImage.src = image;
            htmlImage.onload = () => {
                createImageBitmap(htmlImage).then(value => {
                    this.images[id] = value;
                    this.loaded++;
                });
            };
        }
        addSound(id, sound) {
            this.toLoad++;
            const htmlSound = new Audio(sound);
            this.sounds[id] = htmlSound;
            this.loaded++;
        }
        setSoundsVolume(volume) {
            for (const index in this.sounds)
                this.sounds[index].volume = volume / 100;
        }
        allAssetsGiven() {
            const interval = setInterval(() => {
                if (this.finishedLoading()) {
                    if (engine.inDev)
                        console.timeEnd("Loading Time");
                    initFunc();
                    render.start();
                    update.start();
                    clearInterval(interval);
                }
            }, 1);
        }
        getImage(id) { return this.images[id]; }
        getSound(id) { return this.sounds[id]; }
    }
    Loader_1.Loader = Loader;
})(Loader || (Loader = {}));
