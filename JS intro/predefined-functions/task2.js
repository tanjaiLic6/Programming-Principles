// 2. Write a program to join all elements of the array into a string skipping elements
// that are undefined, null, NaN or Infinity.
// Input: [NaN, 0, 15, false, -22, &#39;&#39;, undefined, 47, null]
// Output: “015false-2247”

function makingStrin(array){
    var newString="";
    for(var i=0; i<array.length; i++){

        if (array[i]!==null){      
        if(isFinite(array[i])){

            newString+=array[i];
        }
    }
    }
    return newString;
}

var result=makingStrin([NaN,0,15,false,-22,"",undefined,47,null]);

console.log(result);