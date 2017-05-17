// Reverse the provided string.
// You may need to turn the string into an array before you can reverse it.
// Your result must be a string.

function reverseString(str) {

  split_string = str.split("");
  split_string.reverse();
  var string = split_string.join("");

  return string;
}

console.log(reverseString("hello"));
