// 5. Write a function that deletes every second element of the given array.
// Input: [3, 5, 1, 8, 90, -4, 23, 1, 67]
// Output: [3, 1, 90, 23, 67]

function deleteElements(array){
    var newarr=[];
    for(var i=0; i<array.length; i++){
        if (i%2===0){
            newarr[newarr.length]=array[i];

        }
    }
    return newarr;
}

console.log(deleteElements([3, 5, 1, 8, 90, -4, 23, 1, 67]));