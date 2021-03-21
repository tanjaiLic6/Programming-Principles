// Write a program that uses console.log to print all the numbers from 1 to 100, with two
// exceptions. For numbers divisible by 3, print &quot;Fizz&quot; instead of the number, and for numbers
// divisible by 5 (and not 3), print &quot;Buzz&quot; instead. When you have that working, modify your
// program to print &quot;FizzBuzz&quot;, for numbers that are divisible by both 3 and 5 (and still print
// &quot;Fizz&quot; or &quot;Buzz&quot; for numbers divisible by only one of those).

var fizz="fizz";//3
var buzz="buzz";//5 i ne sa 3
var FizzBuzz="FizzBuzz";//3 i 5
for (var i=0; i<=100; i++){
   if (i%3===0&&i%5===0){
       console.log(FizzBuzz);
   } else if (i%3===0){console.log(fizz)}
      else if (i%5===0 && i%3!==0){console.log(buzz)}
      else {console.log(i)}
 } 

// var fizz="fizz";
// var buzz="buzz";
// var FizzBuzz="FizzBuzz";

// for (var i=0; i<=100; i++){
//     switch (true) {
//         case (i%3===0&&i%5===0):
//             console.log(FizzBuzz);
//             break;
//         case (i%3===0):
//             console.log(fizz);
//             break;
        
//         case (i%5===0):
//             console.log(buzz);
//             break;

//             default:console.log(i);
//             break;
        
//     }
// }