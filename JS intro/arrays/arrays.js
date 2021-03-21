// Write an array of months in a year. Using console.log display June, October and January
// from the array.

var months = ["January", "February" , "March" , "April", "May" , "June", "July", "August" , "September" , "October" , "November" , "December"];
console.log(months[5]);
console.log(months[9]);
console.log(months[0]);


// Write an arrays of days in a week. Using console.log display Sunday from the array. 


var week= ["monday", "tuesday", "wednesday", "thursday", "friday","saturday", "sunday"];

console.log(week[6]);


// Print all negative elements from the array [2, -4, 5, -2, -11].

var numbers = [2, -4, 5, -2, -11];

console.log(numbers[1],numbers[3],numbers[4]);

// Print all elements with indices divisible by 3 from the array [5, 15, -5, 20, 12, 18,
//     72, 14, 9].

var array=[0,3,6,];
console.log(array[1],array[4],array[5],array[6],array[8]);


// What is the index of number 24 in the following array?
// [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3,
// 10, 26, 7]];
// Using console.log:
// ● Display the 3rd element of the array,
// ● Display the 2nd element of the 3rd element.

var array=[[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
var index24=array[0][3];



console.log(index24 , array[2] , array[2][1]);