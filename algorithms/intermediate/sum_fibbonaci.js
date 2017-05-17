// Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

// The first two numbers in the Fibonacci sequence are 1 and 1.
// Every additional number in the sequence is the sum of the two previous
// numbers. The first six numbers of the
// Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

// For example, sumFibs(10) should return 10 because all
// odd Fibonacci numbers less than 10 are 1, 1, 3, and 5.

function sumFibs(num) {

    var array = [1, 1];
    var odd = [];
    var total = 0;

    for (var i = 0; array[i] + array[i + 1] <= num; i++) {
        array.push(array[i] + array[i + 1]);
    }

    for (var j = 0; j < array.length; j++) {
        if (array[j] % 2 !== 0) {
            total += array[j];
        }

    }
    return total;
}

console.log(sumFibs(75025));
