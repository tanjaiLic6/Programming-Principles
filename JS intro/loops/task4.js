// Write a program to compute the sum and product of an array of integers.


var array = [2,4,6,8];

 var suming=0;
var product=1;

for (var i=0; i<array.length;i++){
    // console.log( "i" + i);
     suming+=array[i];
    // console.log("sum" +suming);
    product*=array[i];

}

console.log("sum " + suming + " , " + "product " + product);


