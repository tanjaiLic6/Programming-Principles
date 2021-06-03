// 12. Write a function that prints out an array of the numbers aligned from the right side.
// Input: [78, 111, 4, 4321]
// Output:
//      78
//      111
//       4
//      4321

function align(array){
    var result="";
    for(var i=0; i<array.length; i++){
        result=result+"\t"+array[i]+"\n";
    }

    return result;

}

console.log(align([78, 111, 4, 4321]))