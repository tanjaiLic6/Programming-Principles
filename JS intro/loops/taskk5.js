// 4. Write a program which prints the elements of the following array as a single string.
// var x = ["1";, "A";, "B";, "c";,"r";, true, NaN, undefined];

var string="";
var x = ["1", "A", "B", "c","r", true, NaN, undefined];
for (var i=0; i<x.length; i++){
  string+=x[i] + "\t";
}

console.log(string);

