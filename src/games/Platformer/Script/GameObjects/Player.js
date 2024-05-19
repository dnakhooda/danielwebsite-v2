var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var _health_1, _crouching;
import { getGame, Physics2dPlatformer } from "../Library/EngineLibrary.js";
import { GrassTile } from "./GrassTile.js";
import { Ice } from "./Ice.js";
export class Player extends Physics2dPlatformer {
    constructor(x, y) {
        super("player", x, y, 25, 35, "brown", 30);
        _health_1.set(this, void 0);
        _crouching.set(this, void 0);
        this.addSound("hit", "./Sounds/hit.wav");
        this.addSound("jump", "./Sounds/jump.wav");
        this.addSound("loss", "./Sounds/loss.wav");
        this.addSound("pickup", "./Sounds/pickup.wav");
        __classPrivateFieldSet(this, _crouching, false);
        __classPrivateFieldSet(this, _health_1, 100);
    }
    simpleMovement() {
        // Crouching
        if (this.getKey("s") || this.getKey("S")) {
            let originalHeight = this.getHeight();
            __classPrivateFieldSet(this, _crouching, true);
            this.setHeight(20);
            if (originalHeight === 35)
                this.moveY(15);
        }
        else {
            __classPrivateFieldSet(this, _crouching, false);
            if (this.getHeight() === 20)
                this.moveY(-15);
            this.setHeight(35);
            if (this.touchingPhysicsObj()) {
                __classPrivateFieldSet(this, _crouching, true);
                let originalHeight = this.getHeight();
                this.setHeight(20);
                if (originalHeight === 35)
                    this.moveY(15);
            }
            ;
        }
        ;
        // Regular Movement
        if ((this.getKey("a") || this.getKey("A")) && !__classPrivateFieldGet(this, _crouching))
            this.changeVX(-this.getVXSpeed());
        if ((this.getKey("d") || this.getKey("D")) && !__classPrivateFieldGet(this, _crouching))
            this.changeVX(this.getVXSpeed());
        if (this.getKey(" ") && !__classPrivateFieldGet(this, _crouching)) {
            this.doJump(8);
            if (this.hasPhysicsPlatformBelow()) {
                this.stopSoundById("jump");
                this.playSoundById("jump");
            }
            ;
        }
        ;
        if (this.getMoveXInfo().didCollide())
            this.setVX(0);
        // Accully Moving the player
        this.moveX(this.getVX());
    }
    simpleMovementConstraints() {
        if (this.getX() < 0) {
            this.setX(0);
            this.setVX(0);
        }
        ;
        if (this.getY() < 0) {
            this.setY(0);
            this.setVY(0);
        }
        ;
    }
    simpleFriction() {
        let last = this.getPhysicsPlatformBelow();
        let below = this.getPhysicsPlatformBelow();
        if (below instanceof GrassTile) {
            this.addFrictionX(0.9);
        }
        else if (last instanceof Ice) {
            this.addFrictionX(0.99);
        }
        else {
            this.addFrictionX(0.92);
        }
        ;
    }
    touchingPhysicsObj() {
        let toReturn = false;
        getGame().getPhysics2dPlatformerSprites().forEach(obj => {
            if (this.touching(obj) && this !== obj) {
                toReturn = true;
                return true;
            }
        });
        return toReturn;
    }
    die() {
        this.stopSoundById("loss");
        this.playSoundById("loss");
        this.setHealth(100);
        this.setVY(0);
        this.setX(0);
        this.goTo(getGame().getSpawnLocationX(), getGame().getSpawnLocationY());
    }
    getHealth() { return __classPrivateFieldGet(this, _health_1); }
    ;
    setHealth(_health) { __classPrivateFieldSet(this, _health_1, _health); }
    ;
    changeHealth(_health) { __classPrivateFieldSet(this, _health_1, __classPrivateFieldGet(this, _health_1) + _health); }
    ;
    isCrouching() { return __classPrivateFieldGet(this, _crouching); }
    ;
}
_health_1 = new WeakMap(), _crouching = new WeakMap();
