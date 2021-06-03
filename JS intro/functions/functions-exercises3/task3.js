// 3. Write a program to filter out falsy values from the array.
// [NaN, 0, 15, false, -22, &#39;&#39;, undefined, 47, null] -&gt; [15, -22, 47]


function falsy(array){
    var newArray=[];
    for(var i=0; i<array.length; i++){
         var n=parseFloat(array[i]);
        if (n){
            newArray[newArray.length]=array[i];
            
        }
    }
    return newArray;
}

var array=[NaN,0,15,false,-22,"",undefined,47,null];

var result=falsy(array);
console.log(result);