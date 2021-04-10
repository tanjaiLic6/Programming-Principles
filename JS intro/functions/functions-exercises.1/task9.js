// 9. Write a program that calculates the sum of odd elements of a given array.



function sumOdd(arr){
    var res=0
    for (var i=0; i<arr.length; i++){
        if (arr[i]%2!==0){
          res=res+arr[i];
        }
    }
    return res;
}
var k=[5,10,3,8];
var result=sumOdd(k);
console.log(result);