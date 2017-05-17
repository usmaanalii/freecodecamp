// Convert a string to spinal case.
// Spinal case is all-lowercase-words-joined-by-dashes.

function spinalCase(str) {
    /* str.replace(/([a-z])([A-Z])/g, '$1 $2')
    http://stackoverflow.com/questions/15343163/add-a-space-between-two-words
    */
    return str.replace(/([a-z])([A-Z])/g, '$1 $2')
              .replace(/\s+/g, "-").replace(/_/g, "-").toLowerCase();
}

console.log(spinalCase("thisIsSpinalTap"));
