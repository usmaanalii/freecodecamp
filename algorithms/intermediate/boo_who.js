// Check if a value is classified as a boolean primitive. Return true or false.

// Boolean primitives are true and false.

function booWho(bool) {
    // What is the new fad diet for ghost developers? The Boolean.
    var falsys = [0, -0, null, false, NaN, undefined, ""];

    if (falsys.indexOf(bool) !== -1) {
        return true;
    }
    else if (bool === true) {
        return true;
    }
    else {
        return false;
    }
}

console.log(booWho(null));
