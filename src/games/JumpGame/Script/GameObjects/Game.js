var _Game_cameraFreeMove;
class Game extends GameObj {
    constructor() {
        super();
        _Game_cameraFreeMove.set(this, void 0);
    }
    ;
    loadImageMap(data, x, y) {
        if (data[0] === 0 && data[1] === 0 && data[2] === 0) {
            let platform;
            if (this.checkSpriteOrPhysics(x, y)) {
                platform = new PlatformP(`platform`, x * 25, y * 25, 25, 25);
            }
            else {
                platform = new PlatformS(`platform`, x * 25, y * 25, 25, 25);
            }
            ;
            platform.setCostumeById("pl1");
            this.addNewSprite(platform);
        }
        else if (data[0] === 0 && data[1] === 255 && data[2] === 0) {
            let platform;
            if (this.checkSpriteOrPhysics(x, y)) {
                platform = new PlatformP(`platform`, x * 25, y * 25, 25, 25);
            }
            else {
                platform = new PlatformS(`platform`, x * 25, y * 25, 25, 25);
            }
            ;
            platform.setCostumeById("pl2");
            this.addNewSprite(platform);
        }
        else if (data[0] === 0 && data[1] === 0 && data[2] === 255) {
            let platform;
            if (this.checkSpriteOrPhysics(x, y)) {
                platform = new PlatformP(`platform`, x * 25, y * 25, 25, 25);
            }
            else {
                platform = new PlatformS(`platform`, x * 25, y * 25, 25, 25);
            }
            ;
            platform.setCostumeById("pl3");
            this.addNewSprite(platform);
        }
        else if (data[0] === 200 && data[1] === 200 && data[2] === 0) {
            let platform;
            if (this.checkSpriteOrPhysics(x, y)) {
                platform = new PlatformP(`platform`, x * 25, y * 25, 25, 25);
            }
            else {
                platform = new PlatformS(`platform`, x * 25, y * 25, 25, 25);
            }
            ;
            platform.setCostumeById("pl4");
            this.addNewSprite(platform);
        }
        else if (data[0] === 0 && data[1] === 255 && data[2] === 255) {
            let platform;
            if (this.checkSpriteOrPhysics(x, y)) {
                platform = new PlatformP(`platform`, x * 25, y * 25, 25, 25);
            }
            else {
                platform = new PlatformS(`platform`, x * 25, y * 25, 25, 25);
            }
            ;
            platform.setCostumeById("pl5");
            this.addNewSprite(platform);
        }
        else if (data[0] === 255 && data[1] === 255 && data[2] === 0) {
            let platform;
            if (this.checkSpriteOrPhysics(x, y)) {
                platform = new PlatformP(`platform`, x * 25, y * 25, 25, 25);
            }
            else {
                platform = new PlatformS(`platform`, x * 25, y * 25, 25, 25);
            }
            ;
            platform.setCostumeById("pl6");
            this.addNewSprite(platform);
        }
        else if (data[0] === 0 && data[1] === 200 && data[2] === 0) {
            let platform;
            if (this.checkSpriteOrPhysics(x, y)) {
                platform = new PlatformP(`platform`, x * 25, y * 25, 25, 25);
            }
            else {
                platform = new PlatformS(`platform`, x * 25, y * 25, 25, 25);
            }
            ;
            platform.setCostumeById("pl7");
            this.addNewSprite(platform);
        }
        else if (data[0] === 200 && data[1] === 200 && data[2] === 200) {
            let platform;
            if (this.checkSpriteOrPhysics(x, y)) {
                platform = new PlatformP(`platform`, x * 25, y * 25, 25, 25);
            }
            else {
                platform = new PlatformS(`platform`, x * 25, y * 25, 25, 25);
            }
            ;
            platform.setCostumeById("pl8");
            this.addNewSprite(platform);
        }
        else if (data[0] === 100 && data[1] === 100 && data[2] === 100) {
            let platform;
            if (this.checkSpriteOrPhysics(x, y)) {
                platform = new PlatformP(`platform`, x * 25, y * 25, 25, 25);
            }
            else {
                platform = new PlatformS(`platform`, x * 25, y * 25, 25, 25);
            }
            ;
            platform.setCostumeById("pl9");
            this.addNewSprite(platform);
        }
        else if (data[0] === 50 && data[1] === 50 && data[2] === 50) {
            let platform;
            if (this.checkSpriteOrPhysics(x, y)) {
                platform = new PlatformP(`platform`, x * 25, y * 25, 25, 25);
            }
            else {
                platform = new PlatformS(`platform`, x * 25, y * 25, 25, 25);
            }
            ;
            platform.setCostumeById("pl10");
            this.addNewSprite(platform);
        }
        else if (data[0] === 25 && data[1] === 25 && data[2] === 25) {
            let platform;
            if (this.checkSpriteOrPhysics(x, y)) {
                platform = new PlatformP(`platform`, x * 25, y * 25, 25, 25);
            }
            else {
                platform = new PlatformS(`platform`, x * 25, y * 25, 25, 25);
            }
            ;
            platform.setCostumeById("pl11");
            this.addNewSprite(platform);
        }
        else if (data[0] === 120 && data[1] === 0 && data[2] === 0) {
            let platform;
            if (this.checkSpriteOrPhysics(x, y)) {
                platform = new PlatformP(`platform`, x * 25, y * 25, 25, 25);
            }
            else {
                platform = new PlatformS(`platform`, x * 25, y * 25, 25, 25);
            }
            ;
            platform.setCostumeById("pl12");
            this.addNewSprite(platform);
        }
        else if (data[0] === 120 && data[1] === 120 && data[2] === 0) {
            let platform;
            if (this.checkSpriteOrPhysics(x, y)) {
                platform = new PlatformP(`platform`, x * 25, y * 25, 25, 25);
            }
            else {
                platform = new PlatformS(`platform`, x * 25, y * 25, 25, 25);
            }
            ;
            platform.setCostumeById("pl13");
            this.addNewSprite(platform);
        }
        else if (data[0] === 120 && data[1] === 120 && data[2] === 120) {
            let platform;
            if (this.checkSpriteOrPhysics(x, y)) {
                platform = new PlatformP(`platform`, x * 25, y * 25, 25, 25);
            }
            else {
                platform = new PlatformS(`platform`, x * 25, y * 25, 25, 25);
            }
            ;
            platform.setCostumeById("pl14");
            this.addNewSprite(platform);
        }
        else if (data[0] === 80 && data[1] === 0 && data[2] === 0) {
            let platform;
            if (this.checkSpriteOrPhysics(x, y)) {
                platform = new PlatformP(`platform`, x * 25, y * 25, 25, 25);
            }
            else {
                platform = new PlatformS(`platform`, x * 25, y * 25, 25, 25);
            }
            ;
            platform.setCostumeById("pl15");
            this.addNewSprite(platform);
        }
        else if (data[0] === 80 && data[1] === 80 && data[2] === 0) {
            let platform;
            if (this.checkSpriteOrPhysics(x, y)) {
                platform = new PlatformP(`platform`, x * 25, y * 25, 25, 25);
            }
            else {
                platform = new PlatformS(`platform`, x * 25, y * 25, 25, 25);
            }
            ;
            platform.setCostumeById("pl16");
            this.addNewSprite(platform);
        }
        else if (data[0] === 80 && data[1] === 80 && data[2] === 80) {
            let platform;
            if (this.checkSpriteOrPhysics(x, y)) {
                platform = new PlatformP(`platform`, x * 25, y * 25, 25, 25);
            }
            else {
                platform = new PlatformS(`platform`, x * 25, y * 25, 25, 25);
            }
            ;
            platform.setCostumeById("pl17");
            this.addNewSprite(platform);
        }
        else if (data[0] === 60 && data[1] === 60 && data[2] === 0) {
            let platform;
            if (this.checkSpriteOrPhysics(x, y)) {
                platform = new PlatformP(`platform`, x * 25, y * 25, 25, 25);
            }
            else {
                platform = new PlatformS(`platform`, x * 25, y * 25, 25, 25);
            }
            ;
            platform.setCostumeById("pl18");
            this.addNewSprite(platform);
        }
        else if (data[0] === 60 && data[1] === 60 && data[2] === 60) {
            let platform;
            if (this.checkSpriteOrPhysics(x, y)) {
                platform = new PlatformP(`platform`, x * 25, y * 25, 25, 25);
            }
            else {
                platform = new PlatformS(`platform`, x * 25, y * 25, 25, 25);
            }
            ;
            platform.setCostumeById("pl19");
            this.addNewSprite(platform);
        }
        else if (data[0] === 60 && data[1] === 0 && data[2] === 0) {
            let platform;
            if (this.checkSpriteOrPhysics(x, y)) {
                platform = new PlatformP(`platform`, x * 25, y * 25, 25, 25);
            }
            else {
                platform = new PlatformS(`platform`, x * 25, y * 25, 25, 25);
            }
            ;
            platform.setCostumeById("pl20");
            this.addNewSprite(platform);
        }
        else if (data[0] === 45 && data[1] === 45 && data[2] === 45) {
            let platform;
            if (this.checkSpriteOrPhysics(x, y)) {
                platform = new PlatformP(`platform`, x * 25, y * 25, 25, 25);
            }
            else {
                platform = new PlatformS(`platform`, x * 25, y * 25, 25, 25);
            }
            ;
            platform.setCostumeById("pl21");
            this.addNewSprite(platform);
        }
        else if (data[0] === 45 && data[1] === 45 && data[2] === 0) {
            let platform;
            if (this.checkSpriteOrPhysics(x, y)) {
                platform = new PlatformP(`platform`, x * 25, y * 25, 25, 25);
            }
            else {
                platform = new PlatformS(`platform`, x * 25, y * 25, 25, 25);
            }
            ;
            platform.setCostumeById("pl22");
            this.addNewSprite(platform);
        }
        else if (data[0] === 45 && data[1] === 0 && data[2] === 0) {
            let platform;
            if (this.checkSpriteOrPhysics(x, y)) {
                platform = new PlatformP(`platform`, x * 25, y * 25, 25, 25);
            }
            else {
                platform = new PlatformS(`platform`, x * 25, y * 25, 25, 25);
            }
            ;
            platform.setCostumeById("pl23");
            this.addNewSprite(platform);
        }
        else if (data[0] === 45 && data[1] === 0 && data[2] === 100) {
            let platform;
            if (this.checkSpriteOrPhysics(x, y)) {
                platform = new PlatformP(`platform`, x * 25, y * 25, 25, 25);
            }
            else {
                platform = new PlatformS(`platform`, x * 25, y * 25, 25, 25);
            }
            ;
            platform.setCostumeById("pl24");
            this.addNewSprite(platform);
        }
        else if (data[0] === 90 && data[1] === 90 && data[2] === 0) {
            let goal = new Goal(`goal`, x * 25, y * 25, 25, 25);
            this.addNewSprite(goal);
        }
        else if (data[0] === 255 && data[1] === 0 && data[2] === 0) {
            let player = new Player(x * 25, y * 25);
            this.addNewSprite(player);
        }
        ;
    }
    ;
    checkSpriteOrPhysics(x, y) {
        let data = this.getLocationOnImageMap(x + 1, y).data;
        if (data[0] === 255 && data[1] === 255 && data[2] === 255)
            return true;
        data = this.getLocationOnImageMap(x - 1, y).data;
        if (data[0] === 255 && data[1] === 255 && data[2] === 255)
            return true;
        data = this.getLocationOnImageMap(x, y + 1).data;
        if (data[0] === 255 && data[1] === 255 && data[2] === 255)
            return true;
        data = this.getLocationOnImageMap(x, y - 1).data;
        if (data[0] === 255 && data[1] === 255 && data[2] === 255)
            return true;
        return false;
    }
    ;
}
_Game_cameraFreeMove = new WeakMap();
;
