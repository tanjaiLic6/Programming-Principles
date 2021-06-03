// 11. Write a function that converts an array of strings into an array of numbers. Filter out all
// non-numeric values.
// ["1", "21";, undefined, "42", "1e+3", Infinity] ==> [1, 21, 42, 1000]

function convert(array){
    var numArray=[];
    for(var i=0; i<array.length; i++){
        var oneElement=parseFloat(array[i]);
        if(isFinite(oneElement)){
            numArray[numArray.length]=oneElement;
        }
      
    }

    return numArray;
}

console.log(convert(["1","21",undefined,"42","1e+3",Infinity]));