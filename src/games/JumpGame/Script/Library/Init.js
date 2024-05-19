(() => {
    // Setting objects
    const render = new RenderObj(document.querySelector("canvas"), draw);
    const game = new Game();
    const controller = new ControllerObj(render);
    const engine = new EngineObj(update, render.getFullDrawFunction(), 1000 / 75);
    // Init Stuff Inside Objects
    engine.init(render, game, controller);
})();
