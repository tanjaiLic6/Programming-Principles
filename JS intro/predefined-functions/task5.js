// 5. Write a program that calculates a number of float values in the array.
// Input: [NaN, 23.1, 15, false, -22.5, &#39;&#39;, 4, 7, null]
// Output: 2


function numOfFloat(array){
    var res=0;
    for(var i=0; i<array.length; i++){
     if(isNaN(parseFloat(array[i]))){
        
     }
     else {
       if (parseInt(array[i])!==array[i]){ 
         res+=1;}
     }
    }
    return res;
}

var array=[NaN,23.1,15,false,-22.5,"",4,7,null,33.5];

var result=numOfFloat(array);

console.log(result);