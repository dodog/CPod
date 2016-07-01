var cbus = {};

var parseURL = function(url) {
    var a = document.createElement("a");
    a.href = url;

    return {
        hash: a.hash,
        host: a.host,
        hostname: a.hostname,
        href: a.href,
        origin: a.origin,
        password: a.password,
        pathname: a.pathname,
        port: a.port,
        protocol: a.protocol,
        search: a.search,
        username: a.username
    };
};

var xhr = function(url, callback) {
    var oReq = new XMLHttpRequest();
    oReq.onload = function(e){
        callback(this.responseText, e);
    };
    oReq.open("get", url, true);
    oReq.send();
};

var colonSeparateDuration = function(num) { // in seconds
    if (typeof num == "number" && !(Number.isNaN || isNaN)(num)) {
        var hours = Math.floor(num / 60 / 60);
        var minutes = Math.floor(num / 60) - hours * 60;
        var seconds = Math.floor(num % 60);
        return (hours !== 0 ? "" + hours + ":" : "") + zpad(minutes, 2) + ":" + zpad(seconds, 2);
    } else {
        return "--:--";
    }
};

var zpad = function pad(n, width, z) { // by user Pointy on SO: stackoverflow.com/a/10073788
    z = z || "0";
    n = n + "";
    return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
};

var mergeObjects = function(a, b){
    var result = {};

    for (var key in a) {
        result[key] = a[key];
    }
    for (var key in b) {
        result[key] = b[key];
    }

    return result;
};

var arrayFindByKey = function(arr, pair) {
    var key = Object.keys(pair)[0];
    var val = pair[key];

    var results = [];

    for (item of arr) {
        if (item[key] === val) {
            results.push(item);
        }
    }

    return results;
};

var decodeHTML = function(html) {
    var elem = document.createElement("div");
    elem.innerHTML = html;
    return elem.textContent;
};

var removeHTMLTags = function(html) {
    return html.replace(/(<([^>]+)>)/ig, ""); // css-tricks.com/snippets/javascript/strip-html-tags-in-javascript
};

var KEYCODES = {
    "0": 48,
    "1": 49,
    "2": 50,
    "3": 51,
    "4": 52,
    "5": 53,
    "6": 54,
    "7": 55,
    "8": 56,
    "9": 57,
    "A": 65,
    "B": 66,
    "C": 67,
    "D": 68,
    "E": 69,
    "F": 70,
    "G": 71,
    "H": 72,
    "I": 73,
    "J": 74,
    "K": 75,
    "L": 76,
    "M": 77,
    "N": 78,
    "O": 79,
    "P": 80,
    "Q": 81,
    "R": 82,
    "S": 83,
    "T": 84,
    "U": 85,
    "V": 86,
    "W": 87,
    "X": 88,
    "Y": 89,
    "Z": 90,
    "a": 97,
    "b": 98,
    "c": 99,
    "d": 100,
    "e": 101,
    "f": 102,
    "g": 103,
    "h": 104,
    "i": 105,
    "j": 106,
    "k": 107,
    "l": 108,
    "m": 109,
    "n": 110,
    "o": 111,
    "p": 112,
    "q": 113,
    "r": 114,
    "s": 115,
    "t": 116,
    "u": 117,
    "v": 118,
    "w": 119,
    "x": 120,
    "y": 121,
    "z": 122
};
