// 6. Write a program that checks if a given array is symmetric. An array is symmetric if it can
// be read the same way both from the left and the right hand side.
// Input array: [2, 4, -2, 7, -2, 4, 2]
// Output: The array is symmetric.

function symetric(array){
    var result="The array is symetric";
     var counter=0;
    for (var i=0, x=array.length-1; i<array.length; i++,x--){
        if(array[i]===array[x]){
         result="The array is symetric";
        }
         else {
            result="The array is not symetric";
         }
    }  
    return result;
}

console.log(symetric([2, 4, -2, -2, 4, 2]));