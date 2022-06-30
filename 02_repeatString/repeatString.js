const repeatString = function(string, num) {
    let repeatedString = string.repeat(num);
    return repeatedString;
}; 
//repeatString("hey",3)
for (let i =0; i < 20; i++){
    repeatString("hey",20)
}

// Do not edit below this line
module.exports = repeatString;
