// 3. Write a program that finds the minimum of a given array and prints out its value and
// index.
// Input array: [4, 2, 2, -1, 6,-7]
// Output: -1, 3

function minimum(array){
    var result="";
    var index=0;
    var minNum=array[0];

    for (var i=0; i<array.length; i++){
          if (array[i]<minNum){
              minNum=array[i];
              index=i;
          }

    }
    result=minNum+", "+ index;
    return result;
}

console.log(minimum([4, 2, 2, -1, 6,-7]));