
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

// Stolen from Pixi.JS
function string2hex(string) {
    if (typeof string === 'string') {
        if (string[0] === '#') {
            string = string.slice(1);
        }
    }
    return parseInt(string, 16);
}