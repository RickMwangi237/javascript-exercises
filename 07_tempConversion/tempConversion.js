// Declare a function with parameter f for farenheit
const ftoc = function(f) {
  // Declare a variable that with formula for farenheit to celcius as it's value 
  let degCelcius = (f-32) * 5/ 9;
  console.log(degCelcius);

  // Add if statement to check if variable is whole number or fraction
  if (degCelcius - Math.floor(degCelcius) !== 0){
    return  Number(degCelcius.toFixed(1));
  } else {return degCelcius};

};
ftoc(-100)

const ctof = function() {

};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
