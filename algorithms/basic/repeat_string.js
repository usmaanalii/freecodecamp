// Repeat a given string (first argument) num times (second argument).
// Return an empty string if num is not a positive number.
function repeatStringNumTimes(str, num) {
    // repeat after me
    if (num >= 0) {
        return str.repeat(num);
    }

    else return "";
}

console.log(repeatStringNumTimes("abc", 3));
