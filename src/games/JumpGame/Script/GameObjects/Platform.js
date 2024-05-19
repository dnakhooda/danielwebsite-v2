class PlatformP extends Physics2dPlatformer {
    constructor(id, x, y, width, height) {
        super(id, x, y, width, height, "red", 2);
        for (let i = 1; i < 25; i++) {
            this.addCostume(`pl${i}`, `Images/Platform/platform${i}.jpg`);
        }
        ;
    }
    ;
}
;
class PlatformS extends SpriteObj {
    constructor(id, x, y, width, height) {
        super(id, x, y, width, height, "red", 2);
        for (let i = 1; i < 25; i++) {
            this.addCostume(`pl${i}`, `Images/Platform/platform${i}.jpg`);
        }
        ;
    }
    ;
}
;
