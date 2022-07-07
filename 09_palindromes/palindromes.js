//Declare a funtion that takes a string parameter
const palindromes = function (string) {
    
    //Use .split to create an array of split sub string elements
    let splitStringArray = string.split("");

     //Use for loop to remove blank space from array
    for (let element of splitStringArray){
        if (element === " "){
            splitStringArray.splice(splitStringArray.indexOf(element),1)
        }
    }  

//  console.log(splitStringArray);
    
    //use .join to return a string of joined array items
    const splitString = splitStringArray.join("");
    //use .reverse() to reverse the order of array items and .join to join elements into a string in reversed order
    const reverseString = splitStringArray.reverse().join("");



    if (splitString === reverseString){
        console.log(true);
        return false;
    } else {
        console.log(false);
        return false;
    }
  };
 palindromes("racecar")
// // Do not edit below this line
// module.exports = palindromes;
