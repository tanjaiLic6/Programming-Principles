// 6. Write a function to input temperature in Centigrade and convert to Fahrenheit.

function toFahenheit(tempInCent){
    var res;
    res=tempInCent*(9/5)+32;
    return 'The temp in Fahrenheit is '+res;
}
var result=toFahenheit;
console.log(result(30));