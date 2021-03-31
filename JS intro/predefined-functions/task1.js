// 1. Write a function that converts an array of strings into an array of numbers. Filter
// out all non-numeric values.
// Input: [&quot;1&quot;, &quot;21&quot;, undefined, &quot;42&quot;, &quot;1e+3&quot;, Infinity]
// Output: [1, 21, 42, 1000]


function filterNumbers(array){
    var newArray=[];
   for (var i=0, x=0; i<array.length; i++){
           
        if   ( isFinite(parseFloat(array[i]))){
           
            newArray[x]=parseFloat(array[i]);
            x++;

        }
           
           
       }
    

   return newArray;
}

var result=filterNumbers(["1","21",undefined,"42","1e+3",Infinity,"1.2bla","0xf5"]);

console.log(result);
// zasto mi parseInt ne daje 1000 nego 1?? zato sto parseInt ne razume exponents