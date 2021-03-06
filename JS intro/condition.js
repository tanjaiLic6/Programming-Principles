
// 1.Write a program that compares
// two numbers and display the
// larger. Result should be
// displayed in the console.

var a=20;
var b=15;

if (a>b){console.log(a)} else {console.log(b)}


// 2.Write a program to check if the
// number is divisible by 2. If it
// is, print even, if not, print
// odd.

var a=12;

if (a%2===0){console.log("even")} else{console.log("odd")}

// 3 Write a program to check if the
// number is divisible by 3 and 5.
// If it is, print that number.
// jednostavniji zapis bi mozda bio ovako if(a%3==0 && a%5===0)


var a=15;
if ((a/3)%1===0&&(a/5)%1===0 ){ console.log(a)} else {console.log("nije deljiv sa oba broja")}


// 4Write a conditional statement to
// find the sign of product of
// three numbers. Display the
// result in the console with the
// specified sign.

var a=-2;
var b=6;
var c=5;

if (a+b+c<1){console.log("the sign is -") } else {console.log("the sign is +")}





//Task 1. Write a conditional statement to find the sign of product of three numbers. Display the result in the console with the specified sign.
//Sample numbers: 3, -7, 2 
//Output: The sign is – 

var a=15;
var b=-7;
var c=2;

if (a*b*c<1){console.log ("The sign is - ")} else {console.log("The sign is + ")}


// Task 2. Write a conditional statement to find the largest of five numbers. Display the result in the console.
// Sample numbers: -5, -2, -6, 0, -1 
// Output: 0 

var a=-25;
var b=25;
var c=6;
var d=0;
var e=-1;

if (a>b&&a>c) {
if (a>d&&a>e){console.log(a)}}
 else if (b>c&&b>d){if (b>e){console.log(g=b)}}
  else if (c>d&&c>e){console.log(c)} 
 else if(d>e) {console.log (d)} else  {console.log(e)}

 


// Task 3. Write a conditional statement to print three numbers as sorted number list.
// Sample numbers : 0, -1, 4 
// Output : 4, 0, -1 

var a=6;
 var b=6;
 var c=4;
 
 if (a>b&&a>c){if (b>c){console.log(a+","+b+","+c)} 
 
 else if (c>b){console.log(a+","+c+","+b)}}
 
 else if (b>a&&b>c){if (a>c){console.log(b+","+a+","+c)}
 else if (c>a){console.log(b+","+c+","+a)}}
 
 else if (c>a&&c>b){if (a>b){console.log(c+","+a+","+b)}
 else if (b>a){console.log(c+","+b+","+a)}}

 // druga verzija
 var a=6;
 var b=-1;
 var c=4;

 if (a>b&&a>c&&b>c){console.log(a+","+b+","+c)}
 else if (c>b){console.log(console.log(a+","+b+","+c))}
 else if (b>a&&b>c&&a>c){console.log(b+","+a+","+c)}
 else if (c>a){console.log(b+","+c+","+a)}
 else if (c>a&&c>b&&a>b){console.log(c+","+a+","+b)}
 else if (b>a){console.log(c+","+b+","+a)}




// Task 4. Write a program to check if the variable is a number and if it’s a number, check if it is divisible by 2. If it is, print the result, if not, show “X”.
// Sample input: 10  					Sample input: 7
// Output: 10 / 2 = 5					Output: X  

var a=11;
 if (typeof(a)==="number"){if ((a/2)%1===0){console.log(a/2)}
 else console.log("x")}


// Task 5. Write a program that compares two numbers and displays the larger. Display the result in the console.
var a=150;
var b=150;

if (a>b){console.log("a")} else if(b>a) {console.log("b")} else {console.log("numberas are equal")}


// Task 6. Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.
// Formula : F = (9*C/5) + 32 [ where c = temperature in Celsius and f = temperature in Fahrenheit ] 
// Sample Input: 60°C
// 	Output : 60°C is 140 °F
var C;
var F=140; 
 

if (!!C===true){ console.log( F=(9*C/5)+32+" °F");} 
 else if (!!F===true){ console.log(C=(F-32)*5/9+" °C");}



// Task 7. Write a JavaScript program to get the difference between a given number and 13, if the number is greater than 13 return double difference between that number and 13.
// 	Sample Input: 11					Sample Input: 32
// 	Output : 2						Output : 38


var a=32;


if (a>13){if ((a-13)>13) {console.log((a-13)*2)} else {console.log(a-13)}}
else if (a<13){ console.log(a-13)}


// Task 8. Write a JavaScript program to compute the sum of the two given integers. If the two
// values are same, then returns triple their sum.
// Sample Input: 12,5 Sample Input: 8,8
// Output : 17 Output : 48

var a=9;
var b=9;

if (a===b){console.log((a+b)*3)} else {console.log(a+b)}


// Task 9. Write a JavaScript program to check two given numbers and print “true” if one of
// the number is 50 or if their sum is 50.
// Sample Input: 5,54 Sample Input: 6,50 Sample Input: 40,10

// Output : -    Output : true    Output : true

var a=40;
var b=10;

if (a===50||b===50||a+b===50){console.log (true)} else {console.log("-")}


// Task 10. Write a JavaScript program to check a given integer is within 20 of 100 or 400,
// and print range in which number belongs.
// Sample Input: 13 Sample Input: 34 Sample Input: 256
// Output : - Output : 20 ⇔ 100 Output : 100 ⇔ 400

var a=250;

if (a<100&&a>=20){console.log("20⇔100")}
 else if (a<=400&&a>=100){console.log("100⇔400")}
 else {console.log("-")}


//  (condition) ? value1 : value2 ternary operator

// Write a program that compares
// two numbers and display the
// larger. Result should be
// displayed in the console.

var a=150;
var b=15;

(a>b) ? console.log(a):console.log(b);