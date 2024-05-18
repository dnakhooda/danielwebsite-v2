"use strict";
onmessage = e => {
    setInterval(() => {
        postMessage("New Tick");
    }, 1000 / e.data);
};
