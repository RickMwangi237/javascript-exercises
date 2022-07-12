const palindromes = function (string) {
    const splitStringArray = string.split("");
    //console.log(splitStringArray);
    const toRemove = ".?\!,:;-[]{}();\"' ";
    //console.log(toRemove)
    const toRemoveArray = toRemove.split("")
    //console.log(toRemoveArray);

    for(let element of splitStringArray){
        //console.log(element);
        if (toRemoveArray.indexOf(element) === -1){
            //console.log(splitStringArray);
        } else if (toRemoveArray.indexOf(element) !== -1){
           splitStringArray.splice(splitStringArray.indexOf(element),1);
           //console.log(splitStringArray) ;
        }
    };
    //console.log(splitStringArray);

    let joinedStringArray = splitStringArray.join("");
    //console.log(joinedStringArray);

    let reverseString = splitStringArray.reverse().join("");
    console.log(reverseString);

    if (joinedStringArray.toLowerCase() === reverseString.toLowerCase()){
        console.log(true);
        return true;
    } else {
        console.log(false);
        return false;
    }

};
 palindromes("tenet");
// Do not edit below this line
module.exports = palindromes;
