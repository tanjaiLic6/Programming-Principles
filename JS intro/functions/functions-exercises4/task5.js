// 5. Write a program that calculates the sum of positive elements in the array.
// Input array: [3, 11, -5, -3, 2]
// Output: 16

function sumPositives(array){
    var res=0;
    var result=0;
    for (var i=0; i<array.length; i++){
        if (array[i]>0){
            res+=array[i];
        }
        
    }
    if (res===0){
      res="There is no positive numbers";
    }
     result=res
    return result;
}

console.log(sumPositives([-3, -1.5,-2.5, -5, -3, -10]));