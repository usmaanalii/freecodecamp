// Convert the characters &, <, >, " (double quote), and ' (apostrophe),
// in a string to their corresponding HTML entities.

function convertHTML(str) {

    var html_entities = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        "'": "&apos;",
        '"': "&quot;"
    };
    var keys = Object.keys(html_entities); // returns array of &, <, > etc...
    var new_str = "";

    for (var i = 0; i < str.length; i++) {
        if (keys.indexOf(str[i]) === -1) {
            new_str += str[i];
        } else {
            new_str += html_entities[str[i]];
        }
    }

    return new_str;
}

console.log(convertHTML("Hamburgers < Pizza < Tacos"));
