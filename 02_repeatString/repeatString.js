const repeatString = function(string, num) {    
    if (num >= 0){
        let repeatedString = string.repeat(num);
        return repeatedString;
    } else {
        let error = "ERROR";
        return error;
    }
}; 
//repeatString("hey",3)
for (let i =0 ; i < 20; i++){
    repeatString("hey",i)
    
}

// Do not edit below this line
module.exports = repeatString;
