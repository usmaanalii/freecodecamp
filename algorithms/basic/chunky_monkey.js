// Write a function that splits an array (first argument) into groups
// the length of size (second argument) and
// returns them as a two-dimensional array.

function chunkArrayInGroups(arr, size) {
    // Break it up.
    var final_arr = [];
    //iterate through arr with splice and push methods
    for (var i = 0; i < arr.length; i += size) {
        final_arr.push(arr.slice(i, i + size));
    }
    return final_arr;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
