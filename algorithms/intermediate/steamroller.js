// Flatten a nested array. You must account for varying levels of nesting.

// http://stackoverflow.com/questions/27266550/how-to-flatten-nested-array-in-javascript
function steamrollArray(arr) {

    var result = [];
    for (var i = 0; i < arr.length; i++) {
        // If the arr[i] is an array, recursively apply the function until it isn't
        // As soon as arr[i] is no longer an array, concatenate it to the result []
        if (Array.isArray(arr[i])) {
            result = result.concat(steamrollArray(arr[i]));
        }
        // If arr[i] isn't an array, add it to the result
        else {
            result.push(arr[i]);
        }
    }
    return result;
}

console.log(steamrollArray([1, [2],
    [3, [
        [4]
    ]]
]));
