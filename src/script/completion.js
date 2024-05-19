// Comp Vars
let DotGameComp = localStorage.getItem("DotGameComp");
if (!DotGameComp) {
    DotGameComp = "0";
    localStorage.setItem('DotGameComp', DotGameComp);
};

let AliensComp = localStorage.getItem("AliensComp");
if (!AliensComp) {
    AliensComp = "0";
    localStorage.setItem('aliensComp', AliensComp);
};

let SpaceComp = localStorage.getItem("SpaceComp");
if (!SpaceComp) {
    SpaceComp = "0";
    localStorage.setItem('SpaceComp', SpaceComp);
};

// File location
let url = window.location.pathname;
let filename = url.substring(url.lastIndexOf('/')+1);

if (filename == "" || filename == " " || filename == "index.html")
    setGame();

function setGame() {
    document.getElementById("Aliens-Completion").innerHTML = AliensComp + "% Complete";
    document.getElementById("Dot-Completion").innerHTML = DotGameComp + "% Complete";
    document.getElementById("Space-Completion").innerHTML = SpaceComp + "% Complete";
}

function checkAliens() {
    if (seconds > parseInt(AliensComp) && seconds < 101) {
        AliensComp = seconds;
        localStorage.setItem('AliensComp', AliensComp);
    }
}

function checkDot() {
    if (Level == "8a" || Level == "8b") {
        DotGameComp = 70
        localStorage.setItem('DotGameComp', DotGameComp);
        return;
    }
    if (Level > parseInt(DotGameComp)/10 - 10 && Level < 12) {
        DotGameComp = Level * 10 - 10;
        localStorage.setItem('DotGameComp', DotGameComp);
    }
}

function checkSpace() {
    if (parseInt(SpaceComp) >= 100) {
        localStorage.setItem('SpaceComp', 100);
        return;
    }

    if (level == 0)
        SpaceComp = 0;
    else if (level > parseInt(SpaceComp)/5.8 - 1 && level < 20)
        SpaceComp = Math.floor(level * 5.8 - 5.8);
    
    localStorage.setItem('SpaceComp', SpaceComp);
}

function clear() {
    localStorage.setItem('DotGameComp', 0);
    localStorage.setItem('AliensComp', 0);
    localStorage.setItem('SpaceComp', 0);
}