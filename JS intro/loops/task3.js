// 2. Write a program to sum the multiples of 3 and 5 under 1000.


var a = 3;
var b = 5;
var sum = 0;

for (var i=0; i<1000;i++){
  if ((i%a===0)&&(i%b===0)){
    //  console.log(i)//
     sum+=i;
  }
}

console.log("sum is " + sum);