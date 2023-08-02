const sumAll = function(a, b) {
    let x = 0;
    let first = "";
    let last = "";
    if (typeof a != "number" || typeof b != "number" || a < 0 || b < 0) {
        return "ERROR";
    } else if (a < b) {
        first = a;
        last = b;
    } else {
        first = b
        last = a;
    }
    for (let i = first; i <= last; i++) {
        x += i;
    }
    return x;

};

// Do not edit below this line
module.exports = sumAll;
