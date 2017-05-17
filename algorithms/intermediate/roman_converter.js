// Convert the given number into a roman numeral.

// All roman numerals answers should be provided in upper-case.

function convertToRoman(num) {

    var array = ("" + num).split("").map(Number);
    var length = array.length;
    var magnitude = "";

    var unit1 = {
        1: "I",
        2: "II",
        3: "III",
        4: "IV",
        5: "V",
        6: "VI",
        7: "VII",
        8: "VIII",
        9: "IX",
    };
    var unit2 = {
        1: "X",
        2: "XX",
        3: "XXX",
        4: "XL",
        5: "L",
        6: "LX",
        7: "LXX",
        8: "LXXX",
        9: "XC",
    };
    var unit3 = {
        1: "C",
        2: "CC",
        3: "CCC",
        4: "CD",
        5: "D",
        6: "DC",
        7: "DCC",
        8: "DCCC",
        9: "CM",
    };
    var unit4 = {
        1: "M",
        2: "MM",
        3: "MMM",
        4: "MMMM",
        5: "MMMMM",
        6: "MMMMMM",
        7: "MMMMMMM",
        8: "MMMMMMMM",
        9: "MMMMMMMMM",
    };

    if (length == 1) {
        magnitude = "singleDigit";

        key1 = array[0];
        array[0] = unit1[key1];
    }
    else if (length == 2) {
        magnitude = "doubleDigit";

        key1 = array[1];
        array[1] = unit1[key1];

        key2 = array[0];
        array[0] = unit2[key2];
    }
    else if (length == 3) {
        magnitude = "tripleDigit";

        key1 = array[2];
        array[2] = unit1[key1];

        key2 = array[1];
        array[1] = unit2[key2];

        key3 = array[0];
        array[0] = unit3[key3];
    }
    else {
        magnitude = "quadrupleDigit";

        key1 = array[3];
        array[3] = unit1[key1];

        key2 = array[2];
        array[2] = unit2[key2];

        key3 = array[1];
        array[1] = unit3[key3];

        key4 = array[0];
        array[0] = unit4[key4];
    }

    return array.toString().replace(/,/g, "");
}

console.log(convertToRoman(1000));
