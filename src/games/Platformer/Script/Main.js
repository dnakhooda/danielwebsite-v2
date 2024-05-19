import { Coin } from "./GameObjects/Coin.js";
import { Player } from "./GameObjects/Player.js";
import { Shooter } from "./GameObjects/Shooter.js";
import { ShooterBullet } from "./GameObjects/ShooterBullet.js";
import { getEngine, getGame, getLoader, getRender } from "./Library/EngineLibrary.js";
export function draw() {
    getRender().getCtx().fillStyle = "black";
    getRender().getCtx().fillRect(5, 5, 210, 35);
    getRender().getCtx().fillStyle = "red";
    getRender().getCtx().fillRect(10, 10, getGame().getSpritesByClass(Player)[0].getHealth() * 2, 25);
}
;
export function update() {
    const players = getGame().getSpritesByClass(Player);
    const shooters = getGame().getSpritesByClass(Shooter);
    const shooterBullets = getGame().getSpritesByClass(ShooterBullet);
    const coins = getGame().getSpritesByClass(Coin);
    const camera = getGame().getCamera();
    // Players
    players.forEach(player => {
        player.simpleMovementConstraints();
        player.doGravity();
        player.simpleMovement();
        player.simpleFriction();
        camera.setX(player.getX() - getRender().getWidth() / 2);
        if (player.getKey("s") || player.getKey("S"))
            camera.setY(player.getY() - getRender().getHeight() / 2 - 15);
        else
            camera.setY(player.getY() - getRender().getHeight() / 2);
        if (player.getY() > 900 + getRender().getHeight() || player.getHealth() <= 0)
            player.die();
        // Shooter's Bullets
        shooterBullets.forEach(shooterBullet => {
            shooterBullet.changeX(-5);
            shooterBullet.addToTimer();
            if (shooterBullet.getX() < 0 || shooterBullet.getY() < 0 || shooterBullet.touching(player) || shooterBullet.getTimer() > 250) {
                if (shooterBullet.touching(player)) {
                    player.stopSoundById("hit");
                    player.playSoundById("hit");
                    player.changeHealth(-10);
                    player.setVX(-20);
                    player.setVY(-5);
                }
                ;
                getGame().deleteSpriteById(shooterBullet.getId());
            }
            ;
        });
    });
    // Shooters
    shooters.forEach(shooter => {
        if (shooter.isOnScreen()) {
            if (Math.floor(Math.random() * 50) === 0)
                getGame().addNewSprite(new ShooterBullet(`${getGame().getNewId()}`, shooter.getX() - 11, shooter.getY() + 6));
        }
    });
    // Camera
    if (camera.getX() < 0)
        camera.setX(0);
    if (camera.getX() > 6780 - getRender().getWidth())
        camera.setX(6780 - getRender().getWidth());
    if (camera.getY() < 0)
        camera.setY(0);
    if (camera.getY() > 900)
        camera.setY(900);
    // Coins
    coins.forEach(coin => {
        if (coin.isOnScreen()) {
            if (coin.touching(players[0])) {
                getGame().deleteSpriteById(coin.getId());
                players[0].stopSoundById("pickup");
                players[0].playSoundById("pickup");
            }
            ;
        }
        ;
    });
}
;
export function init() {
    getEngine().setRunOnUpdateOnRenderLoop(true);
    getGame().setAndUseImageMap(getLoader().getLoadedImageById("map1"), getGame().setImageMapFunc);
    getGame().setDynamicBackgroundImage(getLoader().getLoadedImageById("background"), 0, 0, 6780, 1800);

    getRender().makeCanvasCoverFullScreen(1200, 900);
    window.addEventListener("resize", () => getRender().makeCanvasCoverFullScreen(1200, 900));
}
;
export function load() {
    getLoader().loadImage("map1", "./Images/Map.png");
    getLoader().loadImage("background", "./Images/Background.png");
    getLoader().loadImage("coin", "./Images/Coin.png");
    getLoader().loadImage("shooterImg", "./Images/Shooter.png");
    for (let i = 1; i < 28; i++)
        getLoader().loadImage(`pl${i}`, `./Images/Grass/platform${i}.jpg`);
}
;
