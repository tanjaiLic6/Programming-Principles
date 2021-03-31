// 4. Write a program that calculates a number of integer values in the array.
// Input: [NaN, 23.1, 15, false, -22.5, &#39;&#39;, 4, 7, null]
// Output: 3

function numOfIntegers(array){
    var res=0;
    for (var i=0; i<array.length; i++){
        if(parseInt(array[i])===array[i]){
            res+=1;
        }
    }
    return res;
}

var array=[NaN,23.1,15,false,-22.5,"",4,7,null];

var result=numOfIntegers(array);
console.log("number of integers is " +result);


