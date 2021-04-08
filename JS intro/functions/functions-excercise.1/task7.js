// Write a program that calculates a number of digits of a given number.



function numberOfDigits(number){
   var  newnumber=number+"";
   var res=newnumber.length;
   
   for (var i=0; i<newnumber.length; i++){ 
    if (newnumber[i]==="."){
        res-=1;
    }}
    
    return res;
}

var result=numberOfDigits(5.55);

console.log(result);




