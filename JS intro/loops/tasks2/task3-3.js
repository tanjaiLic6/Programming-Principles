// 3. Write a program that finds the minimum of a given array and prints out its value and
// index.
// Input array: [4, 2, 2, -1, 6]
// Output: -1, 3

var array=[-4, 2, -25, -1,-33, -6];


var minIndex=0;//2


for (var i=0; i<array.length; i++){

  if(array[i]<array[minIndex]) {
    minIndex = i;
    

  }
      

}

console.log(minIndex, array[minIndex])

// console.log({minValue:array[minIndex],minIndex:minIndex});

