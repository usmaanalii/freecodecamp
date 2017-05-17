// Return the provided string with the first letter of each word capitalized.
// Make sure the rest of the word is in lower case.

// For the purpose of this exercise, you should also capitalize
// connecting words like "the" and "of".

function titleCase(str) {
    var array_lower = str.toLowerCase().split(" ");
    var array_lower_caps = array_lower.map(function(val) {

        // replacement code
        return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
    });

    return array_lower_caps.join(" ");
}

console.log(titleCase("I'm a little tea pot"));
