// 1. Write a function to count vowels in a provided string. Vowels are a, e, i, o, and u as well as A,
// E, I, O, and U.

function vowels(string){
    var lower=string.toLowerCase();
    var vowelsLetters=["a","e","i","o","u"];
    var result=0;
    for(var i=0; i<lower.length;i++){
        for(var j=0;j<vowelsLetters.length; j++){ 
        if (lower[i]===vowelsLetters[j]){
          result+=1;
        }


    }}
    return result;
 
}

console.log(vowels("TANJA"));