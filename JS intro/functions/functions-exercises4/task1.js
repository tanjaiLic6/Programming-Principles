// 1. Write a program that checks if a given element e is in the array a.
// Input: e = 3, a = [5, -4.2, 3, 7]
// Output: yes
// Input: e = 3, a = [5, -4.2, 18, 7]
// Output: no

function checkElement(array, e){
    var result="no";
    for (var i=0; i<array.length; i++){
        if (array[i]===e){
            result="yes"
        }
       
    }
    return result;
}

console.log(checkElement([5, -4.2, 3, 7],8));