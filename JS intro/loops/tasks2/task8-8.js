// 8. Write a program that concatenates two arrays.
// Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
// Output array: [4, 5, 6, 2, 3, 8, 11, 9]

var array1=[4, 5, 6, 2];

var array2=[3, 8, 11, 9];
var x=0;
var newArray=[];

for (var i=0; i<array1.length; i++){
  newArray[x]=array1[i];
  x++;
  
}
for (var z=0; z<array2.length; z++){
    newArray[newArray.length]=array2[z];
}
console.log(newArray);