// The DNA strand is missing the pairing element.
// Take each character, get its pair, and return the results as a 2d array.

// Base pairs are a pair of AT and CG. Match the missing element
// to the provided character.

// Return the provided character as the first element in each array.

// For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]

// The character and its pair are paired up in an array, and all the
// arrays are grouped into one encapsulating array.

function pairElement(str) {

    var result = []; // returns ["GC", "CG", "GC"]
    var result_spliced = []; // split the individual index into arrays
    var base_pairs = {
        "A": "T",
        "T": "A",
        "C": "G",
        "G": "C"
    };

    var dna_keys = str.split(""); // returns ["G", "C", "G"]

    for (var i = 0; i < dna_keys.length; i++) {
        result.push(dna_keys[i] + base_pairs[dna_keys[i]]);
        result_spliced.push(result[i].split(""));
    }

    return result_spliced;
}

console.log(pairElement("GCG"));
