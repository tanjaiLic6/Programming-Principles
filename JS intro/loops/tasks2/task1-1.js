// Write a program that checks if a given element e is in the array a.
// Input: e = 3, a = [5, -4.2, 3, 7]
// Output: yes 

var e = 8;
var a =[5, -4.2, 3, 7];
var result='no';

for (var i=0; i<a.length; i++){
     if (e===a[i]){
         result="yes";
         break;
     }
     
 }

 console.log(result);
 
 

 


