// Make a function that looks through an array of objects (first argument)
// and returns an array of all objects that have matching property and
// value pairs (second argument). Each property and value pair of the
// source object has to be present in the object from the collection
// if it is to be included in the returned array.

// For example, if the first argument is [{ first: "Romeo", last: "Montague" },
// { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }],
// and the second argument is { last: "Capulet" }, then you must return the
// third object from the array (the first argument), because it contains
// the property and its value, that was passed on as the second argument.

function whatIsInAName(collection, source) {
    // What's in a name?
    var arr = [];
    var sourceKeys = Object.keys(source); // ["first", "last"]
    // var collection[i] = {object i's key value pairs} e.g { first: "Romeo", last: "Montague" }
    // var collection[i][sourceKeys] = value from the matched key e.g Montague

    if (sourceKeys.length > 1) {
        for (i = 0; i < collection.length; i++) {
            if (collection[i].hasOwnProperty(sourceKeys[0]) === true && collection[i].hasOwnProperty(sourceKeys[1]) === true) {
                arr.push(collection[i]);
            }
        } // for
    } // if
    else if (sourceKeys.length == 1) {
        for (i = 0; i < collection.length; i++) {
            if (collection[i].hasOwnProperty(sourceKeys) === true && collection[i][sourceKeys] === source[sourceKeys]) {
                arr.push(collection[i]);
            }
        }
    }
    return arr;
}

console.log(whatIsInAName([{
    first: "Romeo",
    last: "Montague"
}, {
    first: "Mercutio",
    last: null
}, {
    first: "Tybalt",
    last: "Capulet"
}], {
    last: "Capulet"
})
);
