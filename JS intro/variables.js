// 1. Create several variables using different letter cases and beginning characters. Check if they
// still exist if you refer to them in different case - does case matter here? Try to declare a variable
// starting with number as the first character.

var Vreme = 1;
var vreme = 3;
var $novac = 25;
var 4dana = 4;//not correct

//  2. Save a string (text) describing your current mood in a variable and print it out in console.
var feeling="osecam se odlicno danas";
console.log(feeling);


// // Play around in the console: add, subtract, multiply and divide some numbers. Use numbers
// stored in variables you created as well. Think about expressions: 3-2-31, 3*5-7/3, 4/2-1.14*3.
// Why do we get these results?
var a = 3;
var b = 5;
var c = 7;
var d = 3;
var result = (a*b-c/d);
console.log(result);

// 5. How many grams weight 1.2kg of bananas?
var bananas = 1.2;
var kg = 1000;
console.log(bananas*kg + 'grams');

// 6. How many extra seconds we wait for our friend Anna who is being late for 5 minutes? What
// about Tom who is being late half an hour? It is hard to be on time these days…
var TomMinutes = 30;
var AnnaMinutes=5;
var seconds = 60;
console.log(TomMinutes*seconds);

//  7. How many MB of additional memory we have if we buy a 4GB USB stick? How many news
//  articles each in size 98KB can fit in it?
var memoryGB = 4;
var articles = 98;
var totalmemoryMB=memoryGB*1024;
var articlesInUsb=totalmemoryMB/articles;
console.log(totalmemoryMB,articlesInUsb);

///8.  Create the following variables:
// - a variable containing your name,
// - a variable containing your age,
// - a variable describing if you have a cat or not.
// * Each variable has to start with a different type of character.
// Print them all out in the console and check their types.

var _name="Tanja";
var $age=29;
var cat=false;

console.log(typeof cat,typeof _name,typeof $age);
console.log(_name,$age,cat)

// 11. Check which type are these values:
// - “number”
// - true
// - null
// - “false”
// - 56
var a = 'number';
var b = true;
var c = null;
var d = 'false';
var e = 56;

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
console.log(typeof d);
console.log(typeof e);
//13. Use the console to check the results you think should go in the following table:
var p = true;
var q = false;
console.log(p&&q);
console.log(p||q);

// 14. If the variable age stores the information about user’s age, how we can check whether it
// contains a correct value? Write expressions for checking:
// ● Is age negative value
// ● Is age greater than 120

var age = 20;
var a = age < 0;
var b = age > 120;
console.log(a&&b);
console.log(a||b);

// 15. Let’s say there are speed limitations on a motorway from 60 to 120 kilometers per hour. If
// we store the current speed value in the variable speed. Write an expression which will check if
// we are driving drive safely or not? (true if we are driving safe and false if not)
var speed = 90;
var a = speed <= 120;
var b = speed >= 60;
console.log(a&&b);
