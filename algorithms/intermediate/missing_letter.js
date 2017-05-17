// Find the missing letter in the passed letter range and return it.

// If all letters are present in the range, return undefined.

function fearNotLetter(str) {

    var char_codes = [];

    for (var i = 0; i < str.length; i++) {
        char_codes.push(str.charCodeAt(i));
    }

    for (var j = 0; j < char_codes.length - 1; j++) {
        // -1 because bcd returned e

        if (char_codes[j + 1] - char_codes[j] !== 1) {
            return String.fromCharCode(char_codes[j] + 1);
        }
    } // for j

} // for i

console.log(fearNotLetter("bcd"));
