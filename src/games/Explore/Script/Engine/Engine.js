export var Engine;
(function (Engine_1) {
    let loop;
    (function (loop) {
        loop[loop["seperate"] = 0] = "seperate";
        loop[loop["togetherUpdate"] = 1] = "togetherUpdate";
        loop[loop["togetherRender"] = 2] = "togetherRender";
    })(loop = Engine_1.loop || (Engine_1.loop = {}));
    class Engine {
        constructor(setTps) {
            // Set TPS
            this.setTps = setTps;
            const canvas = document.querySelector("canvas");
            if (!canvas)
                throw new Error("Engine cannot find canvas. Canvas is undefined.");
            let ctx = canvas.getContext("2d");
            if (!ctx)
                throw new Error("Context null.");
            this.ctx = ctx;
            // In dev
            this.inDev = true;
            this.loopStyle = loop.seperate;
        }
        get getContext() { return this.ctx; }
        get getSetTPS() { return this.setTps; }
    }
    Engine_1.Engine = Engine;
})(Engine || (Engine = {}));
