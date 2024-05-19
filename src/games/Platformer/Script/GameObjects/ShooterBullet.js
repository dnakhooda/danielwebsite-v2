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
var _timer;
import { SpriteObj } from "../Library/EngineLibrary.js";
export class ShooterBullet extends SpriteObj {
    constructor(id, x, y) {
        super(id, x, y, 10, 5, "red", 5);
        _timer.set(this, void 0);
        __classPrivateFieldSet(this, _timer, 0);
    }
    addToTimer() { __classPrivateFieldSet(this, _timer, +__classPrivateFieldGet(this, _timer) + 1); }
    ;
    getTimer() { return __classPrivateFieldGet(this, _timer); }
    ;
}
_timer = new WeakMap();
