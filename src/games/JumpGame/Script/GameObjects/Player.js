var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Player_jumpStrength, _Player_flyMode;
class Player extends Physics2dPlatformerVelocity {
    constructor(x, y) {
        super("player", x, y, 30, 35, "blue", 10, 0.8);
        _Player_jumpStrength.set(this, void 0);
        _Player_flyMode.set(this, void 0);
        __classPrivateFieldSet(this, _Player_jumpStrength, 0, "f");
        __classPrivateFieldSet(this, _Player_flyMode, false, "f");
        this.addCostume("left", "Images/Player/PlayerLeft.png");
        this.addCostume("right", "Images/Player/PlayerRight.png");
        this.addCostume("jump", "Images/Player/PlayerJump.png");
        this.addCostume("up", "Images/Player/PlayerUp.png");
        this.addSound("jump", "Sounds/jump.wav");
        this.setSoundVolumeById("jump", 35);
        this.setCostumeById("left");
        this.setGravityAcc(0.2);
        this.changeY(-(this.getHeight() - 25));
    }
    ;
    doMovement() {
        if (this.moveX(this.getVX()) || this.getX() < 0 || this.getX() + this.getWidth() > getRender().getWidth())
            this.setVX(-this.getVX());
        if ((this.getKey("d") || this.getKey("D") ||
            this.getKey("w") || this.getKey("W") ||
            this.getKey("a") || this.getKey("A")) &&
            this.hasSpriteBelow()) {
            this.changeJumpStrength(0.1);
            this.setCostumeById("jump");
        }
        ;
    }
    ;
    jumpLeft() {
        this.setCostumeById("left");
        if (this.hasSpriteBelow()) {
            this.stopSoundById("jump");
            this.playSoundById("jump");
            this.setVX(-__classPrivateFieldGet(this, _Player_jumpStrength, "f"));
            this.doJump(__classPrivateFieldGet(this, _Player_jumpStrength, "f") * 2);
        }
        ;
        __classPrivateFieldSet(this, _Player_jumpStrength, 0, "f");
    }
    ;
    jumpRight() {
        this.setCostumeById("right");
        if (this.hasSpriteBelow()) {
            this.stopSoundById("jump");
            this.playSoundById("jump");
            this.setVX(__classPrivateFieldGet(this, _Player_jumpStrength, "f"));
            this.doJump(__classPrivateFieldGet(this, _Player_jumpStrength, "f") * 2);
        }
        ;
        __classPrivateFieldSet(this, _Player_jumpStrength, 0, "f");
    }
    ;
    jumpUp() {
        this.setCostumeById("up");
        if (this.hasSpriteBelow()) {
            this.stopSoundById("jump");
            this.playSoundById("jump");
            this.doJump(__classPrivateFieldGet(this, _Player_jumpStrength, "f") * 2);
        }
        ;
        __classPrivateFieldSet(this, _Player_jumpStrength, 0, "f");
    }
    ;
    doFriction() {
        if (this.getSpriteBelow() instanceof PlatformP) {
            this.addFriction(0.9);
        }
        ;
    }
    ;
    changeJumpStrength(_change) {
        if (__classPrivateFieldGet(this, _Player_jumpStrength, "f") < 5)
            __classPrivateFieldSet(this, _Player_jumpStrength, __classPrivateFieldGet(this, _Player_jumpStrength, "f") + _change, "f");
    }
    ;
    mute() {
        this.setSoundVolumeById("jump", 0);
    }
    ;
    doFlyMovement(speed) {
        if (this.getKey("w"))
            this.moveY(-speed);
        if (this.getKey("s"))
            this.moveY(speed);
        if (this.getKey("a"))
            this.moveX(-speed);
        if (this.getKey("d"))
            this.moveX(speed);
    }
    ;
    setFlyMode(set) {
        __classPrivateFieldSet(this, _Player_flyMode, set, "f");
    }
    ;
    getFlyMode() {
        return __classPrivateFieldGet(this, _Player_flyMode, "f");
    }
    ;
    changeFlyMode() {
        __classPrivateFieldSet(this, _Player_flyMode, !__classPrivateFieldGet(this, _Player_flyMode, "f"), "f");
    }
    ;
}
_Player_jumpStrength = new WeakMap(), _Player_flyMode = new WeakMap();
;
