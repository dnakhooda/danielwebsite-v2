class EndGame extends SpriteObj {
    constructor(x, y) {
        super("endGame", x, y, getRender().getWidth(), getRender().getHeight(), "white", 0);
        this.addCostume("normal", "Images/Other/GameWin.png");
        this.setCostumeById("normal");
    }
    ;
}
;
