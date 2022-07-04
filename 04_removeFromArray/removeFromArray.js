//Declare a function that takes an array as the first parameter and a rest parameter
//rest parameter ...toRemove holds all other user input parameters in an array
const removeFromArray = function(myArray, ...toRemove) {
    //For loop through toRemove[] comparing the value of removables in toRemove to elements of myArray and removing all instances of that removable from myArray

    for(const removable of toRemove){
        if(myArray.indexOf(removable)!==-1){
            myArray.splice(myArray.indexOf(removable),1)
        }
    }
    return myArray
}

removeFromArray([0,1,2,3,4],0,1,2)
// Do not edit below this line
module.exports = removeFromArray;
