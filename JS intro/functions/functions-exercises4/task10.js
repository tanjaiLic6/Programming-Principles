// 10. Write a program that inserts a given element e on the given position p in the array a. If
// the value of the position is greater than the array length, print the error message.
// Input: e = 78, p = 3, a = [2, -2, 33, 12, 5, 8]
// Output: [2, -2, 33, 78, 12, 5, 8]

function insertElement(array,element,position){
    var newArray=[];
    
    for(var i=0; i<array.length; i++){
        if (position>array.length){
            newArray="Position is greater than array length!";
        }
       else { 
        if(i===position){
            newArray[position]=element;
        }
        else {newArray[i]=array[i];}
    }}
    return newArray;
}

console.log(insertElement([2, -2, 33, 12, 5, 8],78,9));