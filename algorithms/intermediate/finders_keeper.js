// Create a function that looks through an array (first argument)and returns
// the first element in the array that passes a truth test (second argument).

function findElement(arr, func) {

    var pass = function(i) {
        if (func(i) === true) {
            return i;
        }
    };

    var passes = arr.filter(pass);
    return passes[0];
}

console.log(findElement([1, 3, 5, 9], function(num) {
    return num % 2 === 0;
}));
