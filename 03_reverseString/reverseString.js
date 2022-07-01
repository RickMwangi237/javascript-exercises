//Create a function that takes a string parameter
// The argument for this function should declare an array variable whose value is an array of split substrings 
//Return 

const reverseString = function(string) {
    //.split() splits strings and creates an array of split substrings
    const splitStringArray = string.split("");
    // //.reverse() reverses the order of an array and returns a reversed array
    // //.join("") joins the reversed array 
    // const reversedString = splitStringArray.reverse().join("");
    // return reversedString;

};
// console.log(reverseString("hello there"))
// console.log(typeof(splitStringArray))
// // Do not edit below this line
module.exports = reverseString;
