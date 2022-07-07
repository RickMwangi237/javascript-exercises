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

// Declare a function with parameter c for celcius
const ctof = function(c) {
  let degFarenheit =  c * 9/5 + 32;
  console.log(degFarenheit);

  // Add if statement to check if variable is whole number or fraction
  if (degFarenheit - Math.floor(degFarenheit) !== 0){
    return  Number(degFarenheit.toFixed(1));
  } else {return degFarenheit};
};

ctof(100)
// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
