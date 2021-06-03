// 8. Write a function that calculates a number of days to your birthday.

// Input: 25 February
// Output: 5 days


function daysToBirthday(day,month){
var monts = new Array();
monts[0] = "January";
monts[1] = "February";
monts[2] = "March";
monts[3] = "April";
monts[4] = "May";
monts[5] = "June";
monts[6] = "July";
monts[7] = "August";
monts[8] = "September";
monts[9] = "October";
monts[10] = "November";
monts[11] = "December";

// console.log(monts)   
var birthday= new Date();
var m=monts.indexOf(month,0);
//  console.log(m);

birthday.setMonth(m);
birthday.setDate(day);
var today= new Date();
var milisToday= today.getTime();
var milisB=birthday.getTime();
var diff=Math.floor((milisB-milisToday)/((1000 * 3600 * 24)));//in brekets number of miliseconds in one day
    
   return diff;

    
   
}

console.log(daysToBirthday(26,'September'));