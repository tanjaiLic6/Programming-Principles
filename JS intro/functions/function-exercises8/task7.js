// 7. Write a function that filters elements of the given array so that they satisfy a condition
// given by the callback function.
// Input: [2, 8, 11, 4, 9, 3], callback function checks if the number is odd
// Output: [11, 9, 3]

var startingArray=function(array,callback){
    var newarray=[];
    for (var i=0; i<array.length; i++){ 
     if (callback(array[i])){
         newarray[newarray.length]=array[i];
     }
    }
    return newarray;

}

var calb= function(num){
    if(num%2!==0){
       return true;
    }
        
    
}

console.log(startingArray([2, 8, 11, 4, 9, 3],calb));

