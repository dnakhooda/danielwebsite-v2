function draw() {
}
;
function update() {
    // Set Referance to Player
    const camera = getGame().getCamera();
    const player = getGame().getSpritesByType(Player)[0];
    const goals = getGame().getSpritesByType(Goal);
    // Player
    player.setFlyMode(false);
    if (player.getFlyMode()) {
        player.doFlyMovement(5);
    }
    else {
        player.doGravity();
        player.doFriction();
        player.doMovement();
        if (player.getGravity() > 16)
            player.setGravity(16);
    }
    // Camera
    camera.setY(player.getY() - player.getHeight() / 2 - getRender().getHeight() / 2 - 225);
    // Goal
    goals.forEach(goal => {
        if (goal.touching(player)) {
            getGame().deleteAllSprites();
            getGame().getCamera().setX(0);
            getGame().getCamera().setY(0);
            getGame().addNewSprite(new EndGame(0, 0));
        }
        ;
    });
}
;
function init() {
    // Load Background
    getGame().setStaticBackgroundImage("Images/Background/Background.jpg");
    // Loading Sprites Using Image Map
    getGame().setAndUseImageMap(`./Images/Maps/Level1 Old.png`, (data, x, y) => getGame().loadImageMap(data, x, y));
    // Set Reverance to Player and Set Player Location
    getGame().getSpritesByType(Player).forEach((player) => {
        getGame().getCamera().setY(player.getY() - getRender().getHeight() / 2);
    });
    getEngine().setRunOnUpdateOnRenderLoop(true);
    getRender().makeCanvasCoverFullScreen(1000, 1000);
    window.addEventListener("resize", () => getRender().makeCanvasCoverFullScreen(1000, 1000));
}
;
