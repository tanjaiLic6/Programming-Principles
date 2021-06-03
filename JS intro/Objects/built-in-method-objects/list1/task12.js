// 12. Write a function that shuffles the elements of a given array.

// Input: [3, 6, 11, 2, 9, 1]

// Output: [6, 2, 9, 1, 3, 11] (it can be any random permutation of the given array)


function shuffle(array){
    var newArr=[];
    newArr=array.sort(function(a){
        a=Math.floor(Math.random()*array.length);
        return newArr[newArr.length]=array[a];
    })

    return newArr;
}

console.log(shuffle([3, 6, 11, 2, 9, 1]));