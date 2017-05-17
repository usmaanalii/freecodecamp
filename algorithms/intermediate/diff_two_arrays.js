// Compare two arrays and return a new array with any items only found
// in one of the two given arrays, but not both.
// In other words, return the symmetric difference of the two arrays.

function diffArray(arr1, arr2) {

    // create an array with all of the numbers from both arrays
    var duplicates = arr1.concat(arr2);
    var unique = duplicates.filter(function(elem, pos) {
        return duplicates.indexOf(elem) == pos;
    });

    // filter out elements of the arrays
    var result = [];

    for (var i = 0; i < unique.length; i++) {
        if (arr1.indexOf(unique[i]) == -1 || arr2.indexOf(unique[i]) == -1) {
            result.push(unique[i]);
        }

    }
    return result;
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
