// 3.
// a. Write a function that checks if a given array has odd number of elements.
// Input: [1, 2, 9, 2, 1]
// Output: true
// b. Write a function that counts the number of elements less than the middle
// element. If the given array has an even number of elements, print out an error
// message.
// Input: [-1, 8.1, 3, 6, 2.3, 44, 2.11]
// Output: 4

// function checkIfOdd(array){
//     var arrLength=array.length;
//     if(arrLength%2!==0){
//         return true
//     }
//     else return false;
// }

// console.log(checkIfOdd([1, 2, 9, 2, 1,5]));

// -------------------------------------------------------

function mix(array){
    var res;
    var num;
    if (array.length%2===0){
       return  res="error";
    }
    else {
        var IndexOfmiddle=(array.length/2)+1;
        res=array.filter(function(el,pos){
            return el<IndexOfmiddle;
        })
        num=res.length;
        return num;
    }
  

}

console.log(mix([-1, 8.1, 3, 6, 2.3, 44, 2.11,2,8]));

