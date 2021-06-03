// 5. Write a function to get the last element of an array. Passing a parameter n will return the
// last n`s elements of the array.
// [7, 9, 0, -2] -> -2
// [7, 9, 0, -2], 2 => [0, -2]

function lastElements(array,n){
    var newArray=[];
    n=n||1;
    for (var i=array.length-n; i<array.length; i++){
   
   newArray[newArray.length]=array[i];
   
    }
   
    return newArray;
   
   }
   
   console.log(lastElements([7, 9, 0, -2],2));