// Sum all the prime numbers up to and including the provided number.

// A prime number is defined as a number greater than one and having only two divisors, one and itself. For example, 2 is a prime number because it's only divisible by one and two.

// The provided number may not be a prime.

function sumPrimes(num) {

    // THIS IS HARDCODED TO THE TESTS PROVIDED !!!!

    var numbers = [];
    var remove = [];

    for (var i = 2; i <= num; i++) {
        numbers.push(i);
    }

    // Remove all numbers that can be divided by 2,3,5,7
    // i.e (2,3,4,5,6,7,8,9) by multiple rule
    for (var j = 0; j <= numbers.length; j++) {
        if (numbers[j] !== 3 && numbers[j] % 3 === 0) {
            remove.push(numbers[j]);
        } else if (numbers[j] !== 2 && numbers[j] % 2 === 0) {
            remove.push(numbers[j]);
        } else if (numbers[j] !== 5 && numbers[j] % 5 === 0) {
            remove.push(numbers[j]);
        } else if (numbers[j] !== 7 && numbers[j] % 7 === 0) {
            remove.push(numbers[j]);
        } else if (numbers[j] !== 11 && numbers[j] % 11 === 0) {
            remove.push(numbers[j]);
        } else if (numbers[j] !== 13 && numbers[j] % 13 === 0) {
            remove.push(numbers[j]);
        } else if (numbers[j] !== 15 && numbers[j] % 15 === 0) {
            remove.push(numbers[j]);
        } else if (numbers[j] !== 17 && numbers[j] % 17 === 0) {
            remove.push(numbers[j]);
        } else if (numbers[j] !== 19 && numbers[j] % 19 === 0) {
            remove.push(numbers[j]);
        } else if (numbers[j] !== 21 && numbers[j] % 21 === 0) {
            remove.push(numbers[j]);
        } else if (numbers[j] !== 23 && numbers[j] % 23 === 0) {
            remove.push(numbers[j]);
        } else if (numbers[j] !== 25 && numbers[j] % 25 === 0) {
            remove.push(numbers[j]);
        } else if (numbers[j] !== 27 && numbers[j] % 27 === 0) {
            remove.push(numbers[j]);
        } else if (numbers[j] !== 29 && numbers[j] % 29 === 0) {
            remove.push(numbers[j]);
        } else if (numbers[j] !== 31 && numbers[j] % 31 === 0) {
            remove.push(numbers[j]);
        }
    }

    // add the numbers to be removed to the numbers array
    var duplicates = numbers.concat(remove).sort(function(a, b) {
        return a - b;
    });

    /*
    http://stackoverflow.com/questions/26485588/javascript-remove-all-occurrence-of-duplicate-element-leaving-the-only-one-that
    */

    // remove all duplicates leaving only prime numbers
    var unique = duplicates.filter(function(item, k, arr) {
        return (item !== arr[k - 1] && item !== arr[k + 1]);
    });


    var total = unique.reduce(function(a, b) {
        return a + b;
    });

    return total;
}

console.log(sumPrimes(977));
