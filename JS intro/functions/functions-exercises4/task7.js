// 7. Write a program that intertwines two arrays. You can assume the arrays are of the same
// length.
// Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
// Output array: [4, 3, 5, 8, 6, 11, 2, 9]


function intertwines(array1,array2){
    var newArray=[];
    for (var i=0; i<array1.length; i++){
        newArray[newArray.length]=array1[i];
        newArray[newArray.length]=array2[i];
    }

    return newArray;
}

console.log(intertwines([4, 5, 6, 2],[3, 8, 11, 9]));