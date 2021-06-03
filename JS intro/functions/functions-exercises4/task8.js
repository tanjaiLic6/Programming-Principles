// 8. Write a program that concatenates two arrays.
// Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
// Output array: [4, 5, 6, 2, 3, 8, 11, 9]


function concat(array1,array2){
    var newArray=[];
    for(var i=0; i<array1.length; i++){
        newArray[i]=array1[i];
        for(var x=0, z=array1.length; x<array2.length; x++){

            newArray[z]=array2[x];
            z++;
        }
    }
    return newArray;
}

console.log(concat([4, 5, 6, 2],[3, 8, 11, 9]));