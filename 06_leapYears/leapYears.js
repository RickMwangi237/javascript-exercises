//Declare function that takes a year parameter
const leapYears = function(year) {
    //Add if statement with all conditions necessary for leap years and return true if they are all met
    if ((year % 4 === 0) && (year % 400 === 0)){
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
