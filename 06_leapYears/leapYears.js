//Declare function that takes a year parameter
const leapYears = function(year) {
    //Add if statement with all conditions necessary for leap years and return true if they are all met
    if (year % 4 !== 0){
        console.log("false");
         return false;
       } else if ((year % 400 === 0) && (year % 4 === 0) && (year % 100 === 0)){
        console.log("true");
        return true;
        } else if ((year % 100 === 0) && (year % 400 !== 0)){
            console.log("false");
            return false;
        }
        else if (year % 4 === 0){
            console.log("true");
            return true;
        } else {
         return false;
        }
    //else {
    //     return false;
    // }
    
};

leapYears(700)

// Do not edit below this line
module.exports = leapYears;
