// Translate the provided string to pig latin.

// Pig Latin takes the first consonant (or consonant cluster) of an
// English word, moves it to the end of the word and suffixes an "ay".

// If a word begins with a vowel you just add "way" to the end.

// Input strings are guaranteed to be English words in all lowercase.

function translatePigLatin(str) {

    var vowel_list = "aeiou";
    var consonant_list = "bcdfghjklmnpqrstvwxyz";

    if (vowel_list.indexOf(str[0]) !== -1) {
        return str + "way";
    }
    else if (consonant_list.indexOf(str[0]) !== -1 &&
             consonant_list.indexOf(str[1]) === -1) {
        arr = str.split("");
        arr = arr.splice(1, arr.length);
        arr.push(str[0] + "ay");
        return arr.join("");
    }
    else if (consonant_list.indexOf(str[0]) !== -1 &&
             consonant_list.indexOf(str[1]) !== -1) {
        arr = str.split("");
        arr = arr.splice(2, arr.length);
        arr.push(str[0] + str[1] + "ay");
        return arr.join("");
    }
}

console.log(translatePigLatin("glove"));
