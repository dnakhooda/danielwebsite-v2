"use strict";
onmessage = e => {
    setInterval(() => {
        postMessage("Second");
    }, 1000);
};
