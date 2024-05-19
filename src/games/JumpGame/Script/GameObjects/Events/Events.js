class Events {
    static onClick(event) {
        switch (event.key) {
            case "m":
                getGame().getSpritesByType(Player).forEach((player) => player.mute());
                break;
        }
        ;
    }
    ;
    static offClick(event) {
        switch (event.key) {
            case "a":
                getGame().getSpritesByType(Player).forEach((player) => player.jumpLeft());
                break;
            case "d":
                getGame().getSpritesByType(Player).forEach((player) => player.jumpRight());
                break;
            case "w":
                getGame().getSpritesByType(Player).forEach((player) => player.jumpUp());
                break;
            case "A":
                getGame().getSpritesByType(Player).forEach((player) => player.jumpLeft());
                break;
            case "D":
                getGame().getSpritesByType(Player).forEach((player) => player.jumpRight());
                break;
            case "W":
                getGame().getSpritesByType(Player).forEach((player) => player.jumpUp());
                break;
        }
        ;
    }
    ;
    static mouseDown(event) {
    }
    ;
    static mouseMove(event) {
    }
    ;
}
;
