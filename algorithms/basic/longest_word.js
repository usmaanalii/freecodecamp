// Return the length of the longest word in the provided sentence.

// Your response should be a number.

function findLongestWord(str) {
    var array = str.split(" ");
    array.sort(function(a, b) {
        return b.length - a.length;
    });

    return array[0].length;
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
