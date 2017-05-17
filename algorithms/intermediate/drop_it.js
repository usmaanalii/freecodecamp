// Drop the elements of an array (first argument), starting from the front,
// until the predicate (second argument) returns true.

// The second argument, func, is a function you'll use to test the first
// elements of the array to decide if you should drop it or not.

// Return the rest of the array, otherwise return an empty array.

function dropElements(arr, func) {
    // var times = arr.length works instead of i < arr.length ????
    // https://github.com/FreeCodeCamp/FreeCodeCamp/wiki/Algorithm-Drop-It
    var times = arr.length;
    for (var i = 0; i < times; i++) {
        if (func(arr[0]) === false) {
            arr.shift();
        }
    }
    if (arr === []) {
        return [];
    }
    else {
        return arr;
    }
}

console.log(dropElements([1, 2, 3, 4], function(n) {
    return n > 5;
}));
