// 7. Write a program that intertwines two arrays. You can assume the arrays are of the same
// length.
// Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
// Output array: [4, 3, 5, 8, 6, 11, 2, 9]

var array1=[4, 5, 6, 2];
var array2=[3, 8, 11, 9];
var newArray=[];
var x=1;
var z=0;

for (var i=0; i<array1.length;i++){
  newArray[z]=array1[i];
  newArray[x]=array2[i];
 x+=2;
 z+=2;

}

console.log(newArray);