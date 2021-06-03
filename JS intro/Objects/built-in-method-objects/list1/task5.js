// 5.
// a. Write a function that finds all the elements in a given array less than a given
// element.
// Input: [2, 3, 8, -2, 11, 4], 6
// Output: [2, 3, -2, 4]

// b. Write a function that finds all the elements in a given array that start with the “pro”
// substring. The function should be case insensitive.
// Input: [’JavaScript’, ’Programming’, ’fun’, ’product’]
// Output: [’Programming’, ‘product’]


// a

function lessThen(array,element){
    var newArr=array.filter(function(el){
        return el<element;
    })

    return newArr;
}

console.log(lessThen([2, 3, 8, -2, 11, 4],6));


// b

function startingWith(array,term){
 

    return array.filter(function(el){
      return  el.slice(0,term.length).toLowerCase() === term.toLowerCase();
    })

   

}

console.log(startingWith(["JavaScript", "Programming", "fun", "product"],"Pr"));


// c. Write a function that expects an array and a callback function that filters out
// some of the elements. Use functions defined in a) or b) to test it.

function filterica(array,callback){
  return array.filter(callback);
  
}

console.log(filterica([1,2,8,6,7],function(el){
    return el<6;
}));

