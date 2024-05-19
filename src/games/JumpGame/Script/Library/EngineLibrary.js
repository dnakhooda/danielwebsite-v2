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
var _ControllerObj_keysDown, _ControllerObj_mouseX, _ControllerObj_mouseY, _ControllerObj_active, _EngineObj_tps, _EngineObj_update, _EngineObj_draw, _EngineObj_runOnSameEngine, _EngineObj_fpsChecker, _EngineObj_tpsChecker, _EngineObj_realFps, _EngineObj_realTps, _EngineObj_stop, _EngineObj_startRender, _EngineObj_startUpdate, _EngineObj_startCheckFPS, _RenderObj_showingInfo, _RenderObj_canvas, _RenderObj_draw, _RenderObj_ctx, _RenderObj_setupCanvas, _AdvancedDetails_owidth, _AdvancedDetails_oheight, _SpriteObj_x, _SpriteObj_y, _SpriteObj_width, _SpriteObj_height, _SpriteObj_color, _SpriteObj_id, _SpriteObj_stageLevel, _SpriteObj_effects, _SpriteObj_costumes, _SpriteObj_costumeSetIndex, _SpriteObj_size, _SpriteObj_sounds, _SpriteObj_advancedSettings, _GameObj_gameSprites, _GameObj_background, _GameObj_camera, _GameObj_mapReaderImage, _GameObj_mapReaderCanvas, _EffectObj_hidden, _EffectObj_transparency, _Physics2dPlatformer_gravity, _Physics2dPlatformer_gravityAcc, _Physics2dPlatformer_hasBlockBelow, _Physics2dPlatformer_lastPlatformTouched, _Physics2dPlatformer_direction, _Physics2dPlatformerVelocity_vx, _Physics2dPlatformerVelocity_vxSpeed, _Camera_x, _Camera_y;
var Direction;
(function (Direction) {
    Direction[Direction["LEFT"] = 0] = "LEFT";
    Direction[Direction["RIGHT"] = 1] = "RIGHT";
    Direction[Direction["UP"] = 2] = "UP";
    Direction[Direction["DOWN"] = 3] = "DOWN";
})(Direction || (Direction = {}));
;
let getRender;
let getGame;
let getController;
let getEngine;
var ScreenPlaces;
(function (ScreenPlaces) {
    ScreenPlaces[ScreenPlaces["randomPosition"] = 0] = "randomPosition";
    ScreenPlaces[ScreenPlaces["center"] = 1] = "center";
})(ScreenPlaces || (ScreenPlaces = {}));
;
class ControllerObj {
    constructor(render) {
        _ControllerObj_keysDown.set(this, void 0);
        _ControllerObj_mouseX.set(this, void 0);
        _ControllerObj_mouseY.set(this, void 0);
        _ControllerObj_active.set(this, void 0);
        __classPrivateFieldSet(this, _ControllerObj_keysDown, {}, "f");
        __classPrivateFieldSet(this, _ControllerObj_mouseX, null, "f");
        __classPrivateFieldSet(this, _ControllerObj_mouseY, null, "f");
        __classPrivateFieldGet(this, _ControllerObj_active, "f");
        __classPrivateFieldSet(this, _ControllerObj_active, false, "f");
        document.onkeydown = (event) => {
            __classPrivateFieldGet(this, _ControllerObj_keysDown, "f")[event.key] = true;
            switch (event.key) {
                case `F2`:
                    render.changeShowInfo();
                    break;
            }
            ;
            Events.onClick(event);
        };
        document.onkeyup = (event) => {
            __classPrivateFieldGet(this, _ControllerObj_keysDown, "f")[event.key] = false;
            switch (event.key) {
                case ``:
                    break;
            }
            ;
            Events.offClick(event);
        };
        document.addEventListener("visibilitychange", event => {
            if (document.visibilityState === "visible") {
                __classPrivateFieldSet(this, _ControllerObj_active, true, "f");
            }
            else {
                __classPrivateFieldSet(this, _ControllerObj_active, false, "f");
                for (var key in __classPrivateFieldGet(this, _ControllerObj_keysDown, "f"))
                    __classPrivateFieldGet(this, _ControllerObj_keysDown, "f")[key] = false;
            }
            ;
        });
        render.getCanvas().addEventListener("mousedown", (event) => {
            Events.mouseDown(event);
        });
        render.getCanvas().addEventListener("mousemove", (event) => {
            const boundings = render.getCanvas().getBoundingClientRect();
            const x = event.clientX - boundings.left;
            const y = event.clientY - boundings.top;
            this.setMouseX(x);
            this.setMouseY(y);
            Events.mouseMove(event);
        });
    }
    ;
    getKey(key) {
        if (__classPrivateFieldGet(this, _ControllerObj_keysDown, "f")[key] === undefined)
            return false;
        return __classPrivateFieldGet(this, _ControllerObj_keysDown, "f")[key];
    }
    ;
    getMouseX() { return __classPrivateFieldGet(this, _ControllerObj_mouseX, "f"); }
    ;
    getMouseY() { return __classPrivateFieldGet(this, _ControllerObj_mouseY, "f"); }
    ;
    setMouseX(x) { __classPrivateFieldSet(this, _ControllerObj_mouseX, x, "f"); }
    ;
    setMouseY(y) { __classPrivateFieldSet(this, _ControllerObj_mouseY, y, "f"); }
    ;
}
_ControllerObj_keysDown = new WeakMap(), _ControllerObj_mouseX = new WeakMap(), _ControllerObj_mouseY = new WeakMap(), _ControllerObj_active = new WeakMap();
;
class EngineObj {
    constructor(update, draw, tps) {
        _EngineObj_tps.set(this, void 0);
        _EngineObj_update.set(this, void 0);
        _EngineObj_draw.set(this, void 0);
        _EngineObj_runOnSameEngine.set(this, void 0);
        _EngineObj_fpsChecker.set(this, void 0);
        _EngineObj_tpsChecker.set(this, void 0);
        _EngineObj_realFps.set(this, void 0);
        _EngineObj_realTps.set(this, void 0);
        _EngineObj_stop.set(this, void 0);
        _EngineObj_startRender.set(this, () => {
            var _a;
            if (!__classPrivateFieldGet(this, _EngineObj_stop, "f")) {
                __classPrivateFieldSet(this, _EngineObj_fpsChecker, (_a = __classPrivateFieldGet(this, _EngineObj_fpsChecker, "f"), _a++, _a), "f");
                __classPrivateFieldGet(this, _EngineObj_draw, "f").call(this);
                if (__classPrivateFieldGet(this, _EngineObj_runOnSameEngine, "f"))
                    __classPrivateFieldGet(this, _EngineObj_update, "f").call(this);
            }
            ;
            window.requestAnimationFrame(__classPrivateFieldGet(this, _EngineObj_startRender, "f"));
        });
        _EngineObj_startUpdate.set(this, () => {
            setInterval(() => {
                var _a;
                if (!__classPrivateFieldGet(this, _EngineObj_stop, "f")) {
                    __classPrivateFieldSet(this, _EngineObj_tpsChecker, (_a = __classPrivateFieldGet(this, _EngineObj_tpsChecker, "f"), _a++, _a), "f");
                    if (!__classPrivateFieldGet(this, _EngineObj_runOnSameEngine, "f"))
                        __classPrivateFieldGet(this, _EngineObj_update, "f").call(this);
                }
                ;
            }, __classPrivateFieldGet(this, _EngineObj_tps, "f"));
        });
        _EngineObj_startCheckFPS.set(this, () => {
            setInterval(() => {
                __classPrivateFieldSet(this, _EngineObj_realFps, __classPrivateFieldGet(this, _EngineObj_fpsChecker, "f"), "f");
                __classPrivateFieldSet(this, _EngineObj_realTps, __classPrivateFieldGet(this, _EngineObj_tpsChecker, "f"), "f");
                __classPrivateFieldSet(this, _EngineObj_fpsChecker, 0, "f");
                __classPrivateFieldSet(this, _EngineObj_tpsChecker, 0, "f");
            }, 1000);
        });
        __classPrivateFieldSet(this, _EngineObj_runOnSameEngine, false, "f");
        __classPrivateFieldSet(this, _EngineObj_tps, tps, "f");
        __classPrivateFieldSet(this, _EngineObj_update, update, "f");
        __classPrivateFieldSet(this, _EngineObj_draw, draw, "f");
        __classPrivateFieldSet(this, _EngineObj_fpsChecker, 0, "f");
        __classPrivateFieldSet(this, _EngineObj_tpsChecker, 0, "f");
        __classPrivateFieldSet(this, _EngineObj_realFps, 0, "f");
        __classPrivateFieldSet(this, _EngineObj_realTps, 0, "f");
        __classPrivateFieldSet(this, _EngineObj_stop, false, "f");
    }
    ;
    init(render, game, controller) {
        getRender = () => { return render; };
        getGame = () => { return game; };
        getController = () => { return controller; };
        getEngine = () => { return this; };
        init();
        __classPrivateFieldGet(this, _EngineObj_startRender, "f").call(this);
        __classPrivateFieldGet(this, _EngineObj_startUpdate, "f").call(this);
        __classPrivateFieldGet(this, _EngineObj_startCheckFPS, "f").call(this);
    }
    ;
    getFps() { return __classPrivateFieldGet(this, _EngineObj_realFps, "f"); }
    ;
    getTps() { return __classPrivateFieldGet(this, _EngineObj_realTps, "f"); }
    ;
    stop() { __classPrivateFieldSet(this, _EngineObj_stop, true, "f"); }
    ;
    reStart() { __classPrivateFieldSet(this, _EngineObj_stop, false, "f"); }
    ;
    setRunOnUpdateOnRenderLoop(set) { __classPrivateFieldSet(this, _EngineObj_runOnSameEngine, set, "f"); }
    ;
}
_EngineObj_tps = new WeakMap(), _EngineObj_update = new WeakMap(), _EngineObj_draw = new WeakMap(), _EngineObj_runOnSameEngine = new WeakMap(), _EngineObj_fpsChecker = new WeakMap(), _EngineObj_tpsChecker = new WeakMap(), _EngineObj_realFps = new WeakMap(), _EngineObj_realTps = new WeakMap(), _EngineObj_stop = new WeakMap(), _EngineObj_startRender = new WeakMap(), _EngineObj_startUpdate = new WeakMap(), _EngineObj_startCheckFPS = new WeakMap();
;
class RenderObj {
    constructor(canvas, draw) {
        _RenderObj_showingInfo.set(this, void 0);
        _RenderObj_canvas.set(this, void 0);
        _RenderObj_draw.set(this, void 0);
        _RenderObj_ctx.set(this, void 0);
        _RenderObj_setupCanvas.set(this, (canvas) => {
            const dpr = window.devicePixelRatio || 1;
            const rect = canvas.getBoundingClientRect();
            canvas.width = rect.width * dpr;
            canvas.height = rect.height * dpr;
            const ctx = canvas.getContext('2d');
            ctx.scale(dpr, dpr);
            return ctx;
        });
        this.getFullDrawFunctionPrivate = () => {
            return () => {
                __classPrivateFieldGet(this, _RenderObj_ctx, "f").save();
                if (getGame().getBackgroundImage() == null) {
                    __classPrivateFieldGet(this, _RenderObj_ctx, "f").fillStyle = `black`;
                    __classPrivateFieldGet(this, _RenderObj_ctx, "f").fillRect(0, 0, __classPrivateFieldGet(this, _RenderObj_canvas, "f").width, __classPrivateFieldGet(this, _RenderObj_canvas, "f").height);
                }
                else {
                    __classPrivateFieldGet(this, _RenderObj_ctx, "f").drawImage(getGame().getBackgroundImage(), 0, 0, this.getWidth(), this.getHeight());
                }
                let maxLevel = 0;
                __classPrivateFieldGet(this, _RenderObj_draw, "f").call(this);
                getGame().getGameSprites().forEach((obj) => {
                    if (obj.getStageLevel() > maxLevel)
                        maxLevel = obj.getStageLevel();
                });
                for (let i = 0; i < maxLevel + 1; i++) {
                    getGame().getGameSprites().forEach((obj) => {
                        if (obj.getStageLevel() == i) {
                            if (obj.getCostumeImage()[1] == null) {
                                this.drawSprite(obj);
                            }
                            else {
                                this.drawSpriteImage(obj, obj.getCostumeImage()[1]);
                            }
                            ;
                        }
                        ;
                    });
                }
                ;
                if (__classPrivateFieldGet(this, _RenderObj_showingInfo, "f")) {
                    __classPrivateFieldGet(this, _RenderObj_ctx, "f").fillStyle = `white`;
                    __classPrivateFieldGet(this, _RenderObj_ctx, "f").font = '24px serif';
                    __classPrivateFieldGet(this, _RenderObj_ctx, "f").fillText(`FPS: ${getEngine().getFps()}`, 20, 40);
                    __classPrivateFieldGet(this, _RenderObj_ctx, "f").fillText(`TPS: ${getEngine().getTps()}`, 20, 80);
                }
                ;
                __classPrivateFieldGet(this, _RenderObj_ctx, "f").restore();
            };
        };
        __classPrivateFieldSet(this, _RenderObj_canvas, canvas, "f");
        __classPrivateFieldSet(this, _RenderObj_draw, draw, "f");
        __classPrivateFieldSet(this, _RenderObj_ctx, __classPrivateFieldGet(this, _RenderObj_setupCanvas, "f").call(this, canvas), "f");
        __classPrivateFieldSet(this, _RenderObj_showingInfo, false, "f");
    }
    ;
    makeCanvasCoverFullScreen(xRatio, yRatio) {
        if (window.innerHeight > window.innerWidth * (yRatio / xRatio)) {
            this.getCanvas().style.width = `${window.innerWidth}px`;
            this.getCanvas().style.height = `${window.innerWidth * (yRatio / xRatio)}px`;
        }
        else {
            this.getCanvas().style.width = `${window.innerHeight * (xRatio / yRatio)}px`;
            this.getCanvas().style.height = `${window.innerHeight}px`;
        }
        ;
    }
    ;
    getFullDrawFunction() {
        return this.getFullDrawFunctionPrivate().bind(this);
    }
    ;
    getCanvas() { return __classPrivateFieldGet(this, _RenderObj_canvas, "f"); }
    ;
    drawSprite(object) {
        if (!object.getEffect().getHidden()) {
            __classPrivateFieldGet(this, _RenderObj_ctx, "f").globalAlpha = 1 - (object.getEffect().getTransparency() / 10);
            __classPrivateFieldGet(this, _RenderObj_ctx, "f").fillStyle = object.getColor();
            __classPrivateFieldGet(this, _RenderObj_ctx, "f").fillRect(object.getX() - getGame().getCamera().getX(), object.getY() - getGame().getCamera().getY(), object.getWidth(), object.getHeight());
        }
        ;
    }
    ;
    drawSpriteImage(object, image) {
        if (!object.getEffect().getHidden()) {
            __classPrivateFieldGet(this, _RenderObj_ctx, "f").globalAlpha = 1 - (object.getEffect().getTransparency() / 10);
            __classPrivateFieldGet(this, _RenderObj_ctx, "f").fillStyle = object.getColor();
            __classPrivateFieldGet(this, _RenderObj_ctx, "f").drawImage(image, object.getX() - getGame().getCamera().getX(), object.getY() - getGame().getCamera().getY(), object.getWidth(), object.getHeight());
        }
        ;
    }
    ;
    drawSpriteWithInputs(x, y, width, height, color) {
        __classPrivateFieldGet(this, _RenderObj_ctx, "f").fillStyle = color;
        __classPrivateFieldGet(this, _RenderObj_ctx, "f").fillRect(x, y, width, height);
    }
    ;
    getWidth() { return __classPrivateFieldGet(this, _RenderObj_canvas, "f").width; }
    ;
    getHeight() { return __classPrivateFieldGet(this, _RenderObj_canvas, "f").height; }
    ;
    getShowInfo() { return __classPrivateFieldGet(this, _RenderObj_showingInfo, "f"); }
    ;
    changeShowInfo() { __classPrivateFieldSet(this, _RenderObj_showingInfo, !__classPrivateFieldGet(this, _RenderObj_showingInfo, "f"), "f"); }
    ;
    getCtx() { return __classPrivateFieldGet(this, _RenderObj_ctx, "f"); }
    ;
}
_RenderObj_showingInfo = new WeakMap(), _RenderObj_canvas = new WeakMap(), _RenderObj_draw = new WeakMap(), _RenderObj_ctx = new WeakMap(), _RenderObj_setupCanvas = new WeakMap();
;
class AdvancedDetails {
    constructor(owidth, oheight) {
        _AdvancedDetails_owidth.set(this, void 0);
        _AdvancedDetails_oheight.set(this, void 0);
        __classPrivateFieldSet(this, _AdvancedDetails_owidth, owidth, "f");
        __classPrivateFieldSet(this, _AdvancedDetails_oheight, oheight, "f");
    }
    ;
    getOrignalWidth() { return __classPrivateFieldGet(this, _AdvancedDetails_owidth, "f"); }
    ;
    getOrignalHeight() { return __classPrivateFieldGet(this, _AdvancedDetails_oheight, "f"); }
    ;
}
_AdvancedDetails_owidth = new WeakMap(), _AdvancedDetails_oheight = new WeakMap();
;
class SpriteObj {
    constructor(id, x, y, width, height, color, stageLevel) {
        _SpriteObj_x.set(this, void 0);
        _SpriteObj_y.set(this, void 0);
        _SpriteObj_width.set(this, void 0);
        _SpriteObj_height.set(this, void 0);
        _SpriteObj_color.set(this, void 0);
        _SpriteObj_id.set(this, void 0);
        _SpriteObj_stageLevel.set(this, void 0);
        _SpriteObj_effects.set(this, void 0);
        _SpriteObj_costumes.set(this, void 0);
        _SpriteObj_costumeSetIndex.set(this, void 0);
        _SpriteObj_size.set(this, void 0);
        _SpriteObj_sounds.set(this, void 0);
        _SpriteObj_advancedSettings.set(this, void 0);
        __classPrivateFieldSet(this, _SpriteObj_x, x, "f");
        __classPrivateFieldSet(this, _SpriteObj_y, y, "f");
        __classPrivateFieldSet(this, _SpriteObj_width, width, "f");
        __classPrivateFieldSet(this, _SpriteObj_height, height, "f");
        __classPrivateFieldSet(this, _SpriteObj_color, color, "f");
        __classPrivateFieldSet(this, _SpriteObj_id, id, "f");
        __classPrivateFieldSet(this, _SpriteObj_stageLevel, stageLevel, "f");
        __classPrivateFieldSet(this, _SpriteObj_effects, new EffectObj(false, 0), "f");
        __classPrivateFieldSet(this, _SpriteObj_costumes, [[null, null]], "f");
        __classPrivateFieldSet(this, _SpriteObj_costumeSetIndex, 0, "f");
        __classPrivateFieldSet(this, _SpriteObj_sounds, [[null, null]], "f");
        __classPrivateFieldSet(this, _SpriteObj_size, 100, "f");
        __classPrivateFieldSet(this, _SpriteObj_advancedSettings, new AdvancedDetails(width, height), "f");
    }
    ;
    getX() { return __classPrivateFieldGet(this, _SpriteObj_x, "f"); }
    ;
    setX(_x) {
        __classPrivateFieldSet(this, _SpriteObj_x, _x, "f");
        __classPrivateFieldSet(this, _SpriteObj_x, Number(__classPrivateFieldGet(this, _SpriteObj_x, "f").toFixed(1)), "f");
    }
    ;
    changeX(_x) {
        __classPrivateFieldSet(this, _SpriteObj_x, __classPrivateFieldGet(this, _SpriteObj_x, "f") + _x, "f");
        __classPrivateFieldSet(this, _SpriteObj_x, Number(__classPrivateFieldGet(this, _SpriteObj_x, "f").toFixed(1)), "f");
    }
    ;
    getY() { return __classPrivateFieldGet(this, _SpriteObj_y, "f"); }
    ;
    setY(_y) {
        __classPrivateFieldSet(this, _SpriteObj_y, _y, "f");
        __classPrivateFieldSet(this, _SpriteObj_y, Number(__classPrivateFieldGet(this, _SpriteObj_y, "f").toFixed(1)), "f");
    }
    ;
    changeY(_y) {
        __classPrivateFieldSet(this, _SpriteObj_y, __classPrivateFieldGet(this, _SpriteObj_y, "f") + _y, "f");
        __classPrivateFieldSet(this, _SpriteObj_y, Number(__classPrivateFieldGet(this, _SpriteObj_y, "f").toFixed(1)), "f");
    }
    ;
    getWidth() { return __classPrivateFieldGet(this, _SpriteObj_width, "f"); }
    ;
    setWidth(_width) {
        __classPrivateFieldSet(this, _SpriteObj_width, _width, "f");
        __classPrivateFieldSet(this, _SpriteObj_width, Number(__classPrivateFieldGet(this, _SpriteObj_width, "f").toFixed(1)), "f");
    }
    ;
    changeWidth(_width) {
        __classPrivateFieldSet(this, _SpriteObj_width, __classPrivateFieldGet(this, _SpriteObj_width, "f") + _width, "f");
        __classPrivateFieldSet(this, _SpriteObj_width, Number(__classPrivateFieldGet(this, _SpriteObj_width, "f").toFixed(1)), "f");
    }
    ;
    getHeight() { return __classPrivateFieldGet(this, _SpriteObj_height, "f"); }
    ;
    setHeight(_height) {
        __classPrivateFieldSet(this, _SpriteObj_height, _height, "f");
        __classPrivateFieldSet(this, _SpriteObj_height, Number(__classPrivateFieldGet(this, _SpriteObj_height, "f").toFixed(1)), "f");
    }
    ;
    changeHeight(_height) {
        __classPrivateFieldSet(this, _SpriteObj_height, __classPrivateFieldGet(this, _SpriteObj_height, "f") + _height, "f");
        __classPrivateFieldSet(this, _SpriteObj_height, Number(__classPrivateFieldGet(this, _SpriteObj_height, "f").toFixed(1)), "f");
    }
    ;
    getColor() { return __classPrivateFieldGet(this, _SpriteObj_color, "f"); }
    ;
    setColor(_color) { __classPrivateFieldSet(this, _SpriteObj_color, _color, "f"); }
    ;
    getId() { return __classPrivateFieldGet(this, _SpriteObj_id, "f"); }
    ;
    setId(_id) { __classPrivateFieldSet(this, _SpriteObj_id, _id, "f"); }
    ;
    getEffect() { return __classPrivateFieldGet(this, _SpriteObj_effects, "f"); }
    ;
    setEffect(_effect) { __classPrivateFieldSet(this, _SpriteObj_effects, _effect, "f"); }
    ;
    getStageLevel() { return __classPrivateFieldGet(this, _SpriteObj_stageLevel, "f"); }
    ;
    setStageLevel(_stageLevel) { __classPrivateFieldSet(this, _SpriteObj_stageLevel, _stageLevel, "f"); }
    ;
    changeStageLevel(_stageLevel) { __classPrivateFieldSet(this, _SpriteObj_stageLevel, __classPrivateFieldGet(this, _SpriteObj_stageLevel, "f") + _stageLevel, "f"); }
    ;
    getSize() { this.fixSize(); return __classPrivateFieldGet(this, _SpriteObj_size, "f"); }
    ;
    setSize(_size) { __classPrivateFieldSet(this, _SpriteObj_size, _size, "f"); this.fixSize(); }
    ;
    changeSize(_size) { __classPrivateFieldSet(this, _SpriteObj_size, __classPrivateFieldGet(this, _SpriteObj_size, "f") + _size, "f"); this.fixSize(); }
    ;
    getKey(key) { return getController().getKey(key); }
    ;
    getMouseX() { return getController().getMouseX(); }
    ;
    getMouseY() { return getController().getMouseY(); }
    ;
    getScreenWidth() { return getRender().getWidth(); }
    ;
    getScreenHeight() { return getRender().getHeight(); }
    ;
    fixSize() {
        __classPrivateFieldSet(this, _SpriteObj_width, __classPrivateFieldGet(this, _SpriteObj_advancedSettings, "f").getOrignalWidth() * __classPrivateFieldGet(this, _SpriteObj_size, "f") / 100, "f");
        __classPrivateFieldSet(this, _SpriteObj_height, __classPrivateFieldGet(this, _SpriteObj_advancedSettings, "f").getOrignalHeight() * __classPrivateFieldGet(this, _SpriteObj_size, "f") / 100, "f");
    }
    ;
    getAdvancedDetails() {
        return __classPrivateFieldGet(this, _SpriteObj_advancedSettings, "f");
    }
    ;
    goTo(_x, _y) { __classPrivateFieldSet(this, _SpriteObj_x, _x, "f"); __classPrivateFieldSet(this, _SpriteObj_y, _y, "f"); }
    ;
    to(place) {
        switch (place) {
            case ScreenPlaces.center:
                this.goTo(getRender().getWidth() / 2 - this.getWidth() / 2, getRender().getHeight() / 2 - this.getHeight() / 2);
                break;
            case ScreenPlaces.randomPosition:
                this.goTo(Math.floor(Math.random() * getRender().getWidth()), Math.floor(Math.random() * getRender().getHeight()));
                break;
        }
        ;
    }
    ;
    touching(b) {
        if (this.getX() < b.getX() + b.getWidth() &&
            this.getX() + this.getWidth() > b.getX() &&
            this.getY() < b.getY() + b.getHeight() &&
            this.getY() + this.getHeight() > b.getY()) {
            return true;
        }
        ;
        return false;
    }
    ;
    getCostumeImage() { return __classPrivateFieldGet(this, _SpriteObj_costumes, "f")[__classPrivateFieldGet(this, _SpriteObj_costumeSetIndex, "f")]; }
    ;
    getCostumeNumber() { return __classPrivateFieldGet(this, _SpriteObj_costumeSetIndex, "f"); }
    ;
    addCostume(id, src) {
        let theImage = new Image();
        theImage.src = src;
        __classPrivateFieldGet(this, _SpriteObj_costumes, "f").push([id, theImage]);
    }
    ;
    setCostumeById(id) {
        if (id.toUpperCase() == "NONE") {
            __classPrivateFieldSet(this, _SpriteObj_costumeSetIndex, 0, "f");
        }
        else {
            for (let i = 0; i < __classPrivateFieldGet(this, _SpriteObj_costumes, "f").length; i++) {
                if (id == __classPrivateFieldGet(this, _SpriteObj_costumes, "f")[i][0]) {
                    __classPrivateFieldSet(this, _SpriteObj_costumeSetIndex, i, "f");
                    return;
                }
                ;
            }
            ;
        }
        ;
    }
    ;
    nextCostume() {
        var _a;
        if (__classPrivateFieldGet(this, _SpriteObj_costumes, "f").length - 1 > 0) {
            if (__classPrivateFieldGet(this, _SpriteObj_costumeSetIndex, "f") < __classPrivateFieldGet(this, _SpriteObj_costumes, "f").length - 1) {
                __classPrivateFieldSet(this, _SpriteObj_costumeSetIndex, (_a = __classPrivateFieldGet(this, _SpriteObj_costumeSetIndex, "f"), _a++, _a), "f");
            }
            else {
                __classPrivateFieldSet(this, _SpriteObj_costumeSetIndex, 1, "f");
            }
            ;
        }
        ;
    }
    ;
    addSound(id, src) {
        let theSound = new Audio(src);
        __classPrivateFieldGet(this, _SpriteObj_sounds, "f").push([id, theSound]);
    }
    ;
    playSoundById(id) {
        for (let i = 0; i < __classPrivateFieldGet(this, _SpriteObj_sounds, "f").length; i++) {
            if (id == __classPrivateFieldGet(this, _SpriteObj_sounds, "f")[i][0]) {
                __classPrivateFieldGet(this, _SpriteObj_sounds, "f")[i][1].play();
                return;
            }
            ;
        }
        ;
    }
    ;
    setSoundVolumeById(id, volume) {
        for (let i = 0; i < __classPrivateFieldGet(this, _SpriteObj_sounds, "f").length; i++) {
            if (id == __classPrivateFieldGet(this, _SpriteObj_sounds, "f")[i][0]) {
                __classPrivateFieldGet(this, _SpriteObj_sounds, "f")[i][1].volume = volume / 100;
            }
            ;
        }
        ;
    }
    ;
    stopSoundById(id) {
        for (let i = 0; i < __classPrivateFieldGet(this, _SpriteObj_sounds, "f").length; i++) {
            if (id == __classPrivateFieldGet(this, _SpriteObj_sounds, "f")[i][0]) {
                __classPrivateFieldGet(this, _SpriteObj_sounds, "f")[i][1].pause();
                __classPrivateFieldGet(this, _SpriteObj_sounds, "f")[i][1].currentTime = 0;
            }
            ;
        }
        ;
    }
    ;
    pauseSoundById(id) {
        for (let i = 0; i < __classPrivateFieldGet(this, _SpriteObj_sounds, "f").length; i++) {
            if (id == __classPrivateFieldGet(this, _SpriteObj_sounds, "f")[i][0]) {
                __classPrivateFieldGet(this, _SpriteObj_sounds, "f")[i][1].pause();
            }
            ;
        }
        ;
    }
    ;
}
_SpriteObj_x = new WeakMap(), _SpriteObj_y = new WeakMap(), _SpriteObj_width = new WeakMap(), _SpriteObj_height = new WeakMap(), _SpriteObj_color = new WeakMap(), _SpriteObj_id = new WeakMap(), _SpriteObj_stageLevel = new WeakMap(), _SpriteObj_effects = new WeakMap(), _SpriteObj_costumes = new WeakMap(), _SpriteObj_costumeSetIndex = new WeakMap(), _SpriteObj_size = new WeakMap(), _SpriteObj_sounds = new WeakMap(), _SpriteObj_advancedSettings = new WeakMap();
;
class GameObj {
    constructor() {
        _GameObj_gameSprites.set(this, void 0);
        _GameObj_background.set(this, void 0);
        _GameObj_camera.set(this, void 0);
        _GameObj_mapReaderImage.set(this, void 0);
        _GameObj_mapReaderCanvas.set(this, void 0);
        __classPrivateFieldSet(this, _GameObj_background, null, "f");
        __classPrivateFieldSet(this, _GameObj_gameSprites, [], "f");
        __classPrivateFieldSet(this, _GameObj_camera, new Camera(), "f");
        __classPrivateFieldSet(this, _GameObj_mapReaderImage, null, "f");
        __classPrivateFieldSet(this, _GameObj_mapReaderCanvas, document.createElement('canvas'), "f");
    }
    ;
    setAndUseImageMap(image, func) {
        __classPrivateFieldSet(this, _GameObj_mapReaderImage, new Image(), "f");
        __classPrivateFieldGet(this, _GameObj_mapReaderImage, "f").src = image;
        getEngine().stop();
        __classPrivateFieldGet(this, _GameObj_mapReaderImage, "f").onload = () => {
            this.loadCanvas();
            this.useImageMap(func);
            getEngine().reStart();
        };
    }
    ;
    loadCanvas() {
        __classPrivateFieldGet(this, _GameObj_mapReaderCanvas, "f").width = __classPrivateFieldGet(this, _GameObj_mapReaderImage, "f").width;
        __classPrivateFieldGet(this, _GameObj_mapReaderCanvas, "f").height = __classPrivateFieldGet(this, _GameObj_mapReaderImage, "f").height;
        __classPrivateFieldGet(this, _GameObj_mapReaderCanvas, "f").getContext('2d').drawImage(__classPrivateFieldGet(this, _GameObj_mapReaderImage, "f"), 0, 0, __classPrivateFieldGet(this, _GameObj_mapReaderImage, "f").width, __classPrivateFieldGet(this, _GameObj_mapReaderImage, "f").height);
    }
    useImageMap(func) {
        if (__classPrivateFieldGet(this, _GameObj_mapReaderImage, "f") === null) {
            throw new Error("Cannot use image map without setting image!");
        }
        else {
            for (let h = 0; h < __classPrivateFieldGet(this, _GameObj_mapReaderCanvas, "f").height * 1; h += 1) {
                for (let w = 0; w < __classPrivateFieldGet(this, _GameObj_mapReaderCanvas, "f").width * 1; w += 1) {
                    const data = __classPrivateFieldGet(this, _GameObj_mapReaderCanvas, "f").getContext("2d").getImageData(w, h, 1, 1).data;
                    func(data, w, h);
                }
                ;
            }
            ;
        }
        ;
    }
    ;
    getLocationOnImageMap(x, y) {
        if (__classPrivateFieldGet(this, _GameObj_mapReaderImage, "f") === null) {
            throw new Error("Cannot get location on map when map is not set!");
        }
        else {
            return __classPrivateFieldGet(this, _GameObj_mapReaderCanvas, "f").getContext("2d").getImageData(x, y, 1, 1);
        }
        ;
    }
    ;
    setCamera(camera) {
        __classPrivateFieldSet(this, _GameObj_camera, camera, "f");
    }
    ;
    getCamera() {
        return __classPrivateFieldGet(this, _GameObj_camera, "f");
    }
    ;
    addNewSprite(object) {
        object.changeX(-this.getCamera().getX());
        object.changeY(-this.getCamera().getY());
        __classPrivateFieldGet(this, _GameObj_gameSprites, "f").push(object);
    }
    ;
    getGameSprites() {
        return __classPrivateFieldGet(this, _GameObj_gameSprites, "f");
    }
    ;
    getSpritesByType(objectType) {
        let returnList = [];
        this.getGameSprites().forEach((sprite) => {
            if (sprite instanceof objectType)
                returnList.push(sprite);
        });
        return returnList;
    }
    ;
    getSpriteById(id) {
        let found = null;
        __classPrivateFieldGet(this, _GameObj_gameSprites, "f").forEach((sprite) => {
            if (sprite.getId() == id) {
                found = sprite;
                return;
            }
            ;
        });
        if (found !== null)
            return found;
        throw new Error("Sprite not found!");
    }
    ;
    deleteSpriteById(id) {
        let found = false;
        __classPrivateFieldGet(this, _GameObj_gameSprites, "f").forEach((sprite, index) => {
            if (sprite.getId() == id) {
                __classPrivateFieldGet(this, _GameObj_gameSprites, "f").splice(index, 1);
                found = true;
                return;
            }
            ;
        });
        if (found)
            return;
        throw new Error("Sprite not found!");
    }
    ;
    deleteSpritesByType(type) {
        let end = true;
        while (end) {
            end = false;
            __classPrivateFieldGet(this, _GameObj_gameSprites, "f").forEach((sprite, index) => {
                if (sprite instanceof type) {
                    __classPrivateFieldGet(this, _GameObj_gameSprites, "f").splice(index, 1);
                    end = true;
                    return;
                }
                ;
            });
        }
        ;
    }
    ;
    getPhysics2dPlatformerSprites() {
        let sprites = [];
        __classPrivateFieldGet(this, _GameObj_gameSprites, "f").forEach(sprite => {
            if (sprite instanceof Physics2dPlatformer) {
                sprites.push(sprite);
            }
            ;
        });
        return sprites;
    }
    ;
    deleteAllSprites() {
        __classPrivateFieldSet(this, _GameObj_gameSprites, [], "f");
    }
    ;
    setStaticBackgroundImage(src) {
        __classPrivateFieldSet(this, _GameObj_background, new Image(), "f");
        __classPrivateFieldGet(this, _GameObj_background, "f").src = src;
    }
    ;
    setDynamicBackgroundImage(src, x, y, width, height) {
        const background = new SpriteObj("background", x, y, width, height, "white", 0);
        background.addCostume("set", src);
        background.setCostumeById("set");
        this.addNewSprite(background);
    }
    ;
    getBackgroundImage() {
        return __classPrivateFieldGet(this, _GameObj_background, "f");
    }
    ;
}
_GameObj_gameSprites = new WeakMap(), _GameObj_background = new WeakMap(), _GameObj_camera = new WeakMap(), _GameObj_mapReaderImage = new WeakMap(), _GameObj_mapReaderCanvas = new WeakMap();
;
class EffectObj {
    constructor(hidden, transparency) {
        _EffectObj_hidden.set(this, void 0);
        _EffectObj_transparency.set(this, void 0);
        __classPrivateFieldSet(this, _EffectObj_hidden, hidden, "f");
        __classPrivateFieldSet(this, _EffectObj_transparency, transparency, "f");
    }
    getHidden() { return __classPrivateFieldGet(this, _EffectObj_hidden, "f"); }
    ;
    setHidden(_hidden) { __classPrivateFieldSet(this, _EffectObj_hidden, _hidden, "f"); }
    ;
    changeHidden() { __classPrivateFieldSet(this, _EffectObj_hidden, !__classPrivateFieldGet(this, _EffectObj_hidden, "f"), "f"); }
    ;
    getTransparency() { return __classPrivateFieldGet(this, _EffectObj_transparency, "f"); }
    ;
    setTransparency(_transparency) { __classPrivateFieldSet(this, _EffectObj_transparency, _transparency, "f"); }
    ;
    changeTransparency() { __classPrivateFieldSet(this, _EffectObj_transparency, __classPrivateFieldGet(this, _EffectObj_transparency, "f") + __classPrivateFieldGet(this, _EffectObj_transparency, "f"), "f"); }
    ;
    clearEffects() { __classPrivateFieldSet(this, _EffectObj_hidden, false, "f"); __classPrivateFieldSet(this, _EffectObj_transparency, 0, "f"); }
    ;
}
_EffectObj_hidden = new WeakMap(), _EffectObj_transparency = new WeakMap();
;
class Physics2dPlatformer extends SpriteObj {
    constructor(id, x, y, width, height, color, stageLevel) {
        super(id, x, y, width, height, color, stageLevel);
        _Physics2dPlatformer_gravity.set(this, void 0);
        _Physics2dPlatformer_gravityAcc.set(this, void 0);
        _Physics2dPlatformer_hasBlockBelow.set(this, void 0);
        _Physics2dPlatformer_lastPlatformTouched.set(this, void 0);
        _Physics2dPlatformer_direction.set(this, void 0);
        __classPrivateFieldSet(this, _Physics2dPlatformer_gravity, 1, "f");
        __classPrivateFieldSet(this, _Physics2dPlatformer_gravityAcc, 0.2, "f");
        __classPrivateFieldSet(this, _Physics2dPlatformer_hasBlockBelow, false, "f");
        __classPrivateFieldSet(this, _Physics2dPlatformer_lastPlatformTouched, null, "f");
        __classPrivateFieldSet(this, _Physics2dPlatformer_direction, Direction.LEFT, "f");
    }
    ;
    doGravity() {
        __classPrivateFieldSet(this, _Physics2dPlatformer_hasBlockBelow, false, "f");
        this.changeY(this.getGravity());
        getGame().getPhysics2dPlatformerSprites().forEach(obj => {
            if (this.touching(obj) && this !== obj) {
                if (this.getGravity() < 0) {
                    this.setY(obj.getY() + obj.getHeight());
                    if (this.touching(obj))
                        this.changeY(0.1);
                    this.setGravity(0);
                }
                else {
                    this.setY(obj.getY() - this.getHeight());
                    if (this.touching(obj))
                        this.changeY(-0.1);
                    __classPrivateFieldSet(this, _Physics2dPlatformer_hasBlockBelow, true, "f");
                    __classPrivateFieldSet(this, _Physics2dPlatformer_lastPlatformTouched, obj, "f");
                    this.setGravity(0);
                }
                ;
            }
            ;
        });
        if (!this.getHasBlockBelowIn() || this.getGravity() < 0) {
            this.changeGravity(this.getGravityAcc());
        }
        else {
            this.setGravity(0);
        }
        ;
    }
    ;
    moveX(_move) {
        if (_move !== 0) {
            let trueOrFalse = false;
            this.changeX(_move);
            getGame().getPhysics2dPlatformerSprites().forEach((obj) => {
                if (this.touching(obj) && this !== obj) {
                    if (_move > 0) {
                        this.setX(obj.getX() - this.getWidth());
                    }
                    else {
                        this.setX(obj.getX() + obj.getWidth());
                    }
                    trueOrFalse = true;
                }
                ;
            });
            return trueOrFalse;
        }
        ;
        return false;
    }
    ;
    moveY(_move) {
        let trueOrFalse = false;
        this.changeY(_move);
        getGame().getPhysics2dPlatformerSprites().forEach((obj) => {
            if (this.touching(obj) && this !== obj) {
                this.changeY(-_move);
                trueOrFalse = true;
            }
            ;
        });
        return trueOrFalse;
    }
    ;
    doJump(_jumpHeight) {
        if (this.hasSpriteBelow()) {
            this.setGravity(-_jumpHeight);
        }
        ;
    }
    ;
    getDirection() { return __classPrivateFieldGet(this, _Physics2dPlatformer_direction, "f"); }
    ;
    setDirection(_direction) { __classPrivateFieldSet(this, _Physics2dPlatformer_direction, _direction, "f"); }
    ;
    getGravity() { return __classPrivateFieldGet(this, _Physics2dPlatformer_gravity, "f"); }
    ;
    setGravity(_gravity) { __classPrivateFieldSet(this, _Physics2dPlatformer_gravity, _gravity, "f"); }
    ;
    changeGravity(_gravity) { __classPrivateFieldSet(this, _Physics2dPlatformer_gravity, __classPrivateFieldGet(this, _Physics2dPlatformer_gravity, "f") + _gravity, "f"); }
    ;
    getGravityAcc() { return __classPrivateFieldGet(this, _Physics2dPlatformer_gravityAcc, "f"); }
    ;
    setGravityAcc(_gravityAcc) { __classPrivateFieldSet(this, _Physics2dPlatformer_gravityAcc, _gravityAcc, "f"); }
    ;
    changeGravityAcc(_gravityAcc) { __classPrivateFieldSet(this, _Physics2dPlatformer_gravityAcc, __classPrivateFieldGet(this, _Physics2dPlatformer_gravityAcc, "f") + _gravityAcc, "f"); }
    ;
    getHasBlockBelowIn() { return __classPrivateFieldGet(this, _Physics2dPlatformer_hasBlockBelow, "f"); }
    ;
    hasSpriteBelow() {
        let toReturn = false;
        this.changeY(1);
        getGame().getPhysics2dPlatformerSprites().forEach((sprite) => {
            if (this.touching(sprite) && this !== sprite)
                toReturn = true;
        });
        this.changeY(-1);
        return toReturn;
    }
    ;
    getSpriteBelow() {
        let toReturn = null;
        this.changeY(1);
        getGame().getPhysics2dPlatformerSprites().forEach((sprite) => {
            if (this.touching(sprite) && this !== sprite)
                toReturn = sprite;
        });
        this.changeY(-1);
        return toReturn;
    }
    ;
    getLastTouchedSprite() { return __classPrivateFieldGet(this, _Physics2dPlatformer_lastPlatformTouched, "f"); }
    ;
    isNextToPlatform() {
        let toReturn = false;
        let direction = null;
        let returnObj = null;
        this.changeX(0.1);
        getGame().getPhysics2dPlatformerSprites().forEach((obj) => {
            if (this.touching(obj) && this !== obj) {
                toReturn = true;
                direction = Direction.RIGHT;
                returnObj = obj;
            }
            ;
        });
        this.changeX(-0.2);
        getGame().getPhysics2dPlatformerSprites().forEach((obj) => {
            if (this.touching(obj) && this !== obj) {
                toReturn = true;
                direction = Direction.LEFT;
                returnObj = obj;
            }
            ;
        });
        this.changeX(0.1);
        return [toReturn, direction, returnObj];
    }
    ;
}
_Physics2dPlatformer_gravity = new WeakMap(), _Physics2dPlatformer_gravityAcc = new WeakMap(), _Physics2dPlatformer_hasBlockBelow = new WeakMap(), _Physics2dPlatformer_lastPlatformTouched = new WeakMap(), _Physics2dPlatformer_direction = new WeakMap();
;
class Physics2dPlatformerVelocity extends Physics2dPlatformer {
    constructor(id, x, y, width, height, color, stageLevel, vxSpeed) {
        super(id, x, y, width, height, color, stageLevel);
        _Physics2dPlatformerVelocity_vx.set(this, void 0);
        _Physics2dPlatformerVelocity_vxSpeed.set(this, void 0);
        __classPrivateFieldSet(this, _Physics2dPlatformerVelocity_vx, 0, "f");
        __classPrivateFieldSet(this, _Physics2dPlatformerVelocity_vxSpeed, vxSpeed, "f");
    }
    ;
    getVX() { return __classPrivateFieldGet(this, _Physics2dPlatformerVelocity_vx, "f"); }
    ;
    setVX(_vx) {
        __classPrivateFieldSet(this, _Physics2dPlatformerVelocity_vx, _vx, "f");
        __classPrivateFieldSet(this, _Physics2dPlatformerVelocity_vx, Number(__classPrivateFieldGet(this, _Physics2dPlatformerVelocity_vx, "f").toFixed(1)), "f");
    }
    ;
    changeVX(_vx) {
        __classPrivateFieldSet(this, _Physics2dPlatformerVelocity_vx, __classPrivateFieldGet(this, _Physics2dPlatformerVelocity_vx, "f") + _vx, "f");
        __classPrivateFieldSet(this, _Physics2dPlatformerVelocity_vx, Number(__classPrivateFieldGet(this, _Physics2dPlatformerVelocity_vx, "f").toFixed(1)), "f");
    }
    ;
    getVXSpeed() { return __classPrivateFieldGet(this, _Physics2dPlatformerVelocity_vxSpeed, "f"); }
    ;
    setVXSpeed(_vxSpeed) {
        __classPrivateFieldSet(this, _Physics2dPlatformerVelocity_vxSpeed, _vxSpeed, "f");
        __classPrivateFieldSet(this, _Physics2dPlatformerVelocity_vxSpeed, Number(__classPrivateFieldGet(this, _Physics2dPlatformerVelocity_vxSpeed, "f").toFixed(1)), "f");
    }
    ;
    changeVXSpeed(_vxSpeed) {
        __classPrivateFieldSet(this, _Physics2dPlatformerVelocity_vxSpeed, __classPrivateFieldGet(this, _Physics2dPlatformerVelocity_vxSpeed, "f") + _vxSpeed, "f");
        __classPrivateFieldSet(this, _Physics2dPlatformerVelocity_vxSpeed, Number(__classPrivateFieldGet(this, _Physics2dPlatformerVelocity_vxSpeed, "f").toFixed(1)), "f");
    }
    ;
    addFriction(_friction) {
        __classPrivateFieldSet(this, _Physics2dPlatformerVelocity_vx, __classPrivateFieldGet(this, _Physics2dPlatformerVelocity_vx, "f") * _friction, "f");
        __classPrivateFieldSet(this, _Physics2dPlatformerVelocity_vx, parseInt('' + (__classPrivateFieldGet(this, _Physics2dPlatformerVelocity_vx, "f") * 10)) / 10, "f");
    }
    ;
}
_Physics2dPlatformerVelocity_vx = new WeakMap(), _Physics2dPlatformerVelocity_vxSpeed = new WeakMap();
;
class Camera {
    constructor() {
        _Camera_x.set(this, void 0);
        _Camera_y.set(this, void 0);
        __classPrivateFieldSet(this, _Camera_x, 0, "f");
        __classPrivateFieldSet(this, _Camera_y, 0, "f");
    }
    ;
    getX() { return __classPrivateFieldGet(this, _Camera_x, "f"); }
    ;
    setX(_x) { __classPrivateFieldSet(this, _Camera_x, Number(_x.toFixed(1)), "f"); }
    ;
    changeX(_x) { __classPrivateFieldSet(this, _Camera_x, __classPrivateFieldGet(this, _Camera_x, "f") + Number(_x.toFixed(1)), "f"); }
    ;
    getY() { return __classPrivateFieldGet(this, _Camera_y, "f"); }
    ;
    setY(_y) { __classPrivateFieldSet(this, _Camera_y, Number(_y.toFixed(1)), "f"); }
    ;
    changeY(_y) { __classPrivateFieldSet(this, _Camera_y, __classPrivateFieldGet(this, _Camera_y, "f") + Number(_y.toFixed(1)), "f"); }
    ;
    getWidth() { return getRender().getWidth(); }
    ;
    getHeight() { return getRender().getHeight(); }
    ;
}
_Camera_x = new WeakMap(), _Camera_y = new WeakMap();
;
