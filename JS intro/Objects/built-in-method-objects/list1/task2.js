// 2. Write a functional expression that removes all duplicates in a given array.
// Input: [8, 13, 8, 9, 12, 8, 1, 1, 4, 13]
// Output: [1, 4, 8, 9, 12, 13]

var arr = [ 8, 13, 8, 9, 12, 8, 1, 1, 4, 13];

var unique=function(array){
 var filtered = array.filter(function(el,pos){ 

     return  array.indexOf(el)===pos  ; 
  });
  var newAr= filtered.sort(function(a,b){
    return a-b;
  })

  return newAr;
}

console.log(unique(arr));
console.log(arr);

     