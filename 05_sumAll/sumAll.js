const sumAll = function(param1, param2) {
        //Initialise empty array to hold all numbers to sum
        // initialise a sum variable with the value of zero this variable will
        let toSum = [];
        let sum = 0;
        
        //if statement with conditions for all tests in .spec.js
         if ((param1 < 0) || (param2 < 0)){
              return "ERROR";
          } else if((typeof(param1) != "number")||(typeof(param2) != "number")){
              return "ERROR";
         } else if (param1 > param2) {
              for(let i = param1; i>=param2; i--){
                 toSum.push(i);
                };
    //          for (let i = 0; i < toSum.length; i++) {
    //             sum += toSum[i];
    //          };
    //          return (sum);
    //     } else if(param1 < param2){
    //         for(let i = param1; i<=param2; i++){
    //             toSum.push(i);
    //         }
    //         for (let i = 0; i < toSum.length; i++) {
    //              sum += toSum[i];
    //         };
    //         return sum;
    //     }
      
    }
    

sumAll(40,1)
// Do not edit below this line
module.exports = sumAll;
