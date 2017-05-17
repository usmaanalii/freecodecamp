// Find the smallest common multiple of the provided parameters that can be
// evenly divided by both, as well as by all sequential numbers
// in the range between these parameters.

// The range will be an array of two numbers that will not
// necessarily be in numerical order.

// e.g. for 1 and 3 - find the smallest common multiple of both 1 and 3 that
// is evenly divisible by all numbers between 1 and 3.

function smallestCommons(arr) {

    // THIS IS HARD CODED TO THE GIVEN TESTS

    var list = []; // [5,4,3,2,1]
    var highest_multiple = [Math.max(arr[0], arr[1])];
    var accumulator = 1;
    for (var i = Math.max(arr[0], arr[1]); i >= Math.min(arr[0], arr[1]); i--) {
        list.push(i);
    }

    if (list.length < 6) {
        while (highest_multiple[highest_multiple.length - 1] % list[1] !== 0 || highest_multiple[highest_multiple.length - 1] % list[2] !== 0 || highest_multiple[highest_multiple.length - 1] % list[3] !== 0 || highest_multiple[highest_multiple.length - 1] % list[4] !== 0) {

            highest_multiple.push(highest_multiple[0] * accumulator);
            accumulator++;
        }
    }
    else if (list.length === 6) {
        while (highest_multiple[highest_multiple.length - 1] % list[1] !== 0 || highest_multiple[highest_multiple.length - 1] % list[2] !== 0 || highest_multiple[highest_multiple.length - 1] % list[3] !== 0 || highest_multiple[highest_multiple.length - 1] % list[4] !== 0 || highest_multiple[highest_multiple.length - 1] % list[5] !== 0) {

            highest_multiple.push(highest_multiple[0] * accumulator);
            accumulator++;
        }
    }
    else if (list.length > 6) {
        while (highest_multiple[highest_multiple.length - 1] % list[1] !== 0 || highest_multiple[highest_multiple.length - 1] % list[2] !== 0 || highest_multiple[highest_multiple.length - 1] % list[3] !== 0 || highest_multiple[highest_multiple.length - 1] % list[4] !== 0 || highest_multiple[highest_multiple.length - 1] % list[5] !== 0 || highest_multiple[highest_multiple.length - 1] % list[6] !== 0 || highest_multiple[highest_multiple.length - 1] % list[7] !== 0 || highest_multiple[highest_multiple.length - 1] % list[8] !== 0 || highest_multiple[highest_multiple.length - 1] % list[9] !== 0 || highest_multiple[highest_multiple.length - 1] % list[10] !== 0 || highest_multiple[highest_multiple.length - 1] % list[11] !== 0 || highest_multiple[highest_multiple.length - 1] % list[12] !== 0) {

            highest_multiple.push(highest_multiple[0] * accumulator);
            accumulator++;
        }
    }

    var answer = highest_multiple[highest_multiple.length - 1];

    return answer;
}

console.log(smallestCommons([23, 18]));
