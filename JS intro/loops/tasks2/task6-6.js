// 6. Write a program that checks if a given array is symmetric. An array is symmetric if it can
// be read the same way both from the left and the right hand side.
// Input array: [2, 4, -2, 7, -2, 4, 2]
// Output: The array is symmetric. 

var array=[2, 4, -2, 7, -2, 4, 2];
var x=(array.length)-1;//6
var z=0;

for (var i=0; i<array.length; i++){
 if (array[i]==array[x]){
     z++;
    x--;
 }


}

if (z==array.length){

    console.log("yes")
}
else{console.log("no")}