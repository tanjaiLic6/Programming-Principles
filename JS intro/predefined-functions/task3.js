// 3. Write a program to filter out falsy values from the array.
// Input: [NaN, 0, 15, false, -22, &#39;&#39;, undefined, 47, null]
// Output: [15, -22, 47]

function falsy(array){
    var newArray=[];
    for(var i=0, x=0; i<array.length; i++){
        if (!!array[i]===true){
            newArray[x]=array[i];
            x++;
        }
    }
    return newArray;
}

var array=[NaN,0,15,false,-22,"",undefined,47,null];

var result=falsy(array);
console.log(result);