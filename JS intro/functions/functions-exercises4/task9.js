// 9. Write a program that deletes a given element e from the array a.
// Input: e = 2, a = [4, 6, 2, 8, 2, 2]
// Output array: [4, 6, 8]

function deleteElement(array,element){
    var newArray=[];
    for(var i=0; i<array.length; i++){
        if (element!==array[i]){
            newArray[newArray.length]=array[i];
        }
    }
    return newArray;
}

console.log(deleteElement([4, 6, 2, 8, 2, 2],2));