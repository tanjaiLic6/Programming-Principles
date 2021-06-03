// 4. Write a program that finds the second smallest number and prints out its value.
// Input array: [4, 2, 0, -1, 6]
// Output: 2

function secondSmallest(array){
    var result=0;
    var min=array[0]
    var secMin=array[0];
    for (var i=0; i<array.length; i++){
        if (array[i]<min){
              min=array[i]; }}
        for(var x=0; x<array.length; x++){
        if (array[x]<secMin&&array[x]>min){
            secMin=array[x];
                     }
                 } 
            
        
    
    result=secMin;
    return result;

}

console.log(secondSmallest([4, 0, 2, -1, 6]));