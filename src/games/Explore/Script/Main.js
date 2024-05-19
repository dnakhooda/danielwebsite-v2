import { camera, engine, game, loader } from "./Engine/Init.js";
import { Chunk } from "./GameObjects/Chunk.js";
import { Player } from "./GameObjects/Player.js";
export const drawFunc = () => {
    const ctx = engine.getContext;
    const player = game.getEntityByClass(Player.Player)[0];
    // Draw Hearts
    for (let i = 0; i < player.getMaxHearts; i++)
        ctx.drawImage(i < player.getHearts ? loader.getImage("heart") : loader.getImage("emptyHeart"), 25 + i * 120, ctx.canvas.height - 125, 100, 100);
    // Draw Inventory
    if (player.getInventory.getShow) {
        for (let i = 0; i < player.getMaxArmors; i++)
            ctx.drawImage(i < player.getArmors ? loader.getImage("armor") : loader.getImage("emptyArmor"), 25 + i * 120, ctx.canvas.height - 250, 100, 85.71);
        player.getInventory.getInventoryArray.forEach(arrY => arrY.forEach(slot => {
            if (slot.getHovered) {
                ctx.drawImage(loader.getImage("slotHighlighted"), slot.getX, slot.getY, slot.getWidth, slot.getHeight);
                ctx.fillRect(slot.getX, slot.getY, slot.getWidth, slot.getHeight);
            }
            else
                ctx.drawImage(loader.getImage("slot"), slot.getX, slot.getY, slot.getWidth, slot.getHeight);
            ctx.drawImage(slot.getHovered ? loader.getImage("slotHighlighted") : loader.getImage("slot"), slot.getX, slot.getY, slot.getWidth, slot.getHeight);
            if (slot.getItem && slot.getItem.getImage) {
                ctx.drawImage(slot.getItem.getImage, slot.getX + (slot.getWidth) / 8, slot.getY + (slot.getHeight) / 8, slot.getWidth * 3 / 4, slot.getHeight * 3 / 4);
                ctx.fillStyle = "#fff";
                ctx.fillText(`${slot.getItemNum}`, slot.getX + slot.getWidth - 45, slot.getY + slot.getHeight - 5, slot.getWidth);
            }
        }));
        ctx.drawImage(loader.getImage("handSlot"), player.getInventory.getLeftHandSlot.getX, player.getInventory.getLeftHandSlot.getY, player.getInventory.getLeftHandSlot.getWidth, player.getInventory.getLeftHandSlot.getHeight);
        ctx.drawImage(loader.getImage("handSlot"), player.getInventory.getRightHandSlot.getX, player.getInventory.getRightHandSlot.getY, player.getInventory.getRightHandSlot.getWidth, player.getInventory.getRightHandSlot.getHeight);
    }
};
export const updateFunc = () => {
    // References
    const player = game.getEntityByClass(Player.Player)[0];
    // Camera Go To Player
    camera.goTo(player.getX - engine.getContext.canvas.width / 2 + player.getWidth / 2, player.getY - engine.getContext.canvas.height / 2 + player.getHeight / 2);
    // Do In Game Time
    game.doTime();
};
export const initFunc = () => {
    // Add Player
    const player = new Player.Player();
    game.addEntity(player);
    // Add a Chunk
    const chunk = new Chunk.Chunk(player.getChunkIn.chunkXTop, player.getChunkIn.chunkYTop);
    game.addChunk(chunk);
    // Load Chunks and Player
    player.loadChunksAround();
    player.spawn();
};
export const loadFunc = () => {
    // Player
    loader.addImage("heart", "./Images/player/heart.png");
    loader.addImage("emptyHeart", "./Images/player/emptyHeart.png");
    // armor
    loader.addImage("emptyArmor", "./Images/player/emptyArmor.png");
    loader.addImage("armor", "./Images/player/armor.png");
    loader.addImage("slot", "./Images/player/slot.png");
    loader.addImage("slotHighlighted", "./Images/player/slotHighlighted.png");
    loader.addImage("handSlot", "./Images/player/handSlot.png");
    // Water
    for (let water = 1; water < 2; water++)
        loader.addImage(`water${water}`, `./Images/water/water${water}.png`);
    // Sand
    for (let sand = 1; sand < 3; sand++)
        loader.addImage(`sand${sand}`, `./Images/sand/sand${sand}.png`);
    // Other Textures
    for (let textureNum = 0; textureNum < 4; textureNum++) {
        let texture = "";
        switch (textureNum) {
            case 0:
                texture = "sand";
                break;
            case 1:
                texture = "grass";
                break;
            case 2:
                texture = "stone";
                break;
            case 3:
                texture = "snow";
                break;
        }
        loader.addImage(`${texture}-up`, `./Images/${texture}/${texture}-up.png`);
        loader.addImage(`${texture}-down`, `./Images/${texture}/${texture}-down.png`);
        loader.addImage(`${texture}-right`, `./Images/${texture}/${texture}-right.png`);
        loader.addImage(`${texture}-left`, `./Images/${texture}/${texture}-left.png`);
        loader.addImage(`${texture}-up-right`, `./Images/${texture}/${texture}-up-right.png`);
        loader.addImage(`${texture}-up-left`, `./Images/${texture}/${texture}-up-left.png`);
        loader.addImage(`${texture}-down-right`, `./Images/${texture}/${texture}-down-right.png`);
        loader.addImage(`${texture}-down-left`, `./Images/${texture}/${texture}-down-left.png`);
    }
    loader.addImage(`player`, `./Images/player/player-up.png`);
    loader.addImage(`player-shadow`, `./Images/player/player-shadow.png`);
    // Grass
    for (let grass = 1; grass < 5; grass++)
        loader.addImage(`grass${grass}`, `./Images/grass/grass${grass}.png`);
    // Stone
    for (let stone = 1; stone < 3; stone++)
        loader.addImage(`stone${stone}`, `./Images/stone/stone${stone}.png`);
    // Snow
    for (let snow = 1; snow < 2; snow++)
        loader.addImage(`snow${snow}`, `./Images/snow/snow${snow}.png`);
    for (let twig = 1; twig < 4; twig++) {
        loader.addImage(`twig${twig}`, `./Images/twig/twig${twig}.png`);
        loader.addImage(`twig${twig}Shadow`, `./Images/twig/twig${twig}Shadow.png`);
    }
    // Plants
    for (let plants = 1; plants < 5; plants++) {
        loader.addImage(`plant${plants}`, `./Images/plants/plant${plants}.png`);
        loader.addImage(`plant${plants}Shadow`, `./Images/plants/plant${plants}Shadow.png`);
    }
    loader.addImage("wood", "./Images/items/wood.png");
};
