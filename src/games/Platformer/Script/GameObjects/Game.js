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
var _spawnLocation, _idNum;
import { GameObj, getGame } from "../Library/EngineLibrary.js";
import { Coin } from "./Coin.js";
import { Goal } from "./Goal.js";
import { GrassTile } from "./GrassTile.js";
import { Ice } from "./Ice.js";
import { Player } from "./Player.js";
import { Shooter } from "./Shooter.js";
export class Game extends GameObj {
    constructor() {
        super();
        _spawnLocation.set(this, void 0);
        _idNum.set(this, void 0);
        this.setImageMapFunc = (data, x, y) => {
            if (data[0] === 0 && data[1] === 0 && data[2] === 0) {
                let grass;
                grass = new GrassTile(`grass`, x * 30, y * 30);
                this.addNewSprite(grass);
                let isRight = false;
                let rightData = this.getLocationOnImageMap(x + 1, y).data;
                if (rightData[0] === 0 && rightData[1] === 0 && rightData[2] === 0)
                    isRight = true;
                let isLeft = false;
                let leftData = this.getLocationOnImageMap(x - 1, y).data;
                if (leftData[0] === 0 && leftData[1] === 0 && leftData[2] === 0)
                    isLeft = true;
                let isUp = false;
                let upData = this.getLocationOnImageMap(x, y - 1).data;
                if (upData[0] === 0 && upData[1] === 0 && upData[2] === 0)
                    isUp = true;
                let isDown = false;
                let downData = this.getLocationOnImageMap(x, y + 1).data;
                if (downData[0] === 0 && downData[1] === 0 && downData[2] === 0)
                    isDown = true;
                if (isRight && isLeft && !isUp && isDown)
                    grass.setCostumeById("pl1");
                else if (isRight && isLeft && isUp && isDown)
                    grass.setCostumeById("pl2");
                if (!isRight && isLeft && isUp && isDown)
                    grass.setCostumeById("pl3");
                if (isRight && isLeft && isUp && !isDown)
                    grass.setCostumeById("pl4");
                if (isRight && !isLeft && isUp && isDown)
                    grass.setCostumeById("pl5");
                if (!isRight && isLeft && !isUp && isDown)
                    grass.setCostumeById("pl6");
                if (isRight && !isLeft && !isUp && isDown)
                    grass.setCostumeById("pl7");
                if (isRight && !isLeft && isUp && !isDown)
                    grass.setCostumeById("pl8");
                if (!isRight && isLeft && isUp && !isDown)
                    grass.setCostumeById("pl9");
                if (isRight && isLeft && !isUp && !isDown)
                    grass.setCostumeById("pl12");
                if (isRight && !isLeft && !isUp && !isDown)
                    grass.setCostumeById("pl13");
                if (!isRight && isLeft && !isUp && !isDown)
                    grass.setCostumeById("pl14");
                if (!isRight && !isLeft && !isUp && !isDown)
                    grass.setCostumeById("pl15");
                if (!isRight && !isLeft && isUp && isDown)
                    grass.setCostumeById("pl25");
                if (!isRight && !isLeft && isUp && !isDown)
                    grass.setCostumeById("pl26");
                if (!isRight && !isLeft && !isUp && isDown)
                    grass.setCostumeById("pl27");
            }
            else if (data[0] === 100 && data[1] === 100 && data[2] === 100) {
                getGame().addNewSprite(new Shooter("shooter", x * 30, y * 30));
            }
            else if (data[0] === 0 && data[1] === 0 && data[2] === 255) {
                getGame().addNewSprite(new Player(x * 30, y * 30));
            }
            else if (data[0] === 255 && data[1] === 255 && data[2] === 0) {
                getGame().addNewSprite(new Coin(`${this.getNewId()}`, x * 30, y * 30));
            }
            else if (data[0] === 0 && data[1] === 200 && data[2] === 200) {
                getGame().addNewSprite(new Ice(`${this.getNewId()}`, x * 30, y * 30));
            }
            else if (data[0] === 255 && data[1] === 100 && data[2] === 0) {
                getGame().addNewSprite(new Goal(`${this.getNewId()}`, x * 30, y * 30));
            }
        };
        __classPrivateFieldSet(this, _spawnLocation, {
            x: 0,
            y: 0
        });
        __classPrivateFieldSet(this, _idNum, 0);
    }
    ;
    getNewId() {
        __classPrivateFieldSet(this, _idNum, +__classPrivateFieldGet(this, _idNum) + 1);
        return __classPrivateFieldGet(this, _idNum) - 1;
    }
    setSpawnLocation(x, y) {
        __classPrivateFieldGet(this, _spawnLocation).x = x;
        __classPrivateFieldGet(this, _spawnLocation).y = y;
    }
    getSpawnLocationX() { return __classPrivateFieldGet(this, _spawnLocation).x; }
    ;
    getSpawnLocationY() { return __classPrivateFieldGet(this, _spawnLocation).y; }
    ;
}
_spawnLocation = new WeakMap(), _idNum = new WeakMap();
