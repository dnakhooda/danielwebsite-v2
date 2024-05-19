import { Neutron } from "./Neutron/Neutron.js";
import { Bird } from "./GameClasses/Bird.js";
import { Pipe } from "./GameClasses/Pipes.js";
export function draw() {
    // Score Styles
    Neutron.getRender().getCtx.fillStyle = "#000";
    Neutron.getRender().getCtx.font = 'bold 64px serif';
    // Score Render
    Neutron.getRender().getCtx.fillText(`Score: ${Neutron.getGame().score}`, 50, 100, 1000000);
    Neutron.getRender().getCtx.fillText(`High Score: ${Neutron.getGame().highScore}`, 50, 200, 1000000);
}
export function update() {
    // Set Referances
    const birds = Neutron.getGame().getSpritesByType(Bird);
    const pipes = Neutron.getGame().getSpritesByType(Pipe);
    const camera = Neutron.getGame().getCamera;
    // Bird
    birds.forEach(bird => {
        bird.doMovement();
        // Stops Game When Dead
        if (bird.getCollision.touchingSprite().length > 0 || bird.getMovement.getY > Neutron.getRender().getHeight)
            Neutron.getEngine().stop();
    });
    // Pipes
    pipes.forEach(pipe => {
        pipe.move();
        // Give Point If Past Player
        if (birds[0].getMovement.getX > pipe.getMovement.getX && pipe.givePoint) {
            Neutron.getGame().score += 0.5;
            pipe.givePoint = false;
            // Change High Score if Needed
            if (Number(Neutron.getGame().highScore) < Neutron.getGame().score) {
                Neutron.getGame().highScore = String(Neutron.getGame().score);
                localStorage.setItem("highScore", String(Neutron.getGame().score));
            }
        }
    });
    // Camera
    camera.goTo(0, 0);
    // Adds More Pipes When Needed
    Neutron.getGame().pipeTimer++;
    if (Neutron.getGame().pipeTimer > 80) {
        Neutron.getGame().pipeTimer = 0;
        Neutron.getGame().createNewPipe();
    }
}
export function init() {
    // Higher Preformance Update Loop
    Neutron.getEngine().setHigherPreformanceUpdateLoop = true;
    // Make Canvas Cover Full Screen
    Neutron.getRender().makeCanvasCoverFullScreen(16, 9);
    window.addEventListener(`resize`, () => Neutron.getRender().makeCanvasCoverFullScreen(16, 9));
    // Create Bird Sprite
    Neutron.getGame().addNewSprite(new Bird(0, 0));
    // Set Referance to Bird and Set Bird Location
    const bird = Neutron.getGame().getSpritesByType(Bird)[0];
    bird.getMovement.goTo(Neutron.getRender().getWidth * (1 / 3), Neutron.getRender().getHeight / 2 - bird.getDimensions.getHeight / 2);
    const backgroundImage = Neutron.getLoader().getLoadedImageById("background");
    if (backgroundImage === null)
        throw new Error("Background Image Null!");
    else
        Neutron.getGame().setStaticBackgroundImage(backgroundImage);
}
export function load() {
    Neutron.getLoader().loadImage("background", "Images/background.png");
}
