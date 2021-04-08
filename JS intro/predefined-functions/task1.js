// 1. Write a function that converts an array of strings into an array of numbers. Filter
// out all non-numeric values.
// Input: [&quot;1&quot;, &quot;21&quot;, undefined, &quot;42&quot;, &quot;1e+3&quot;, Infinity]
// Output: [1, 21, 42, 1000]

function filterNumbers(array) {
  var newArray = [];
  for (var i = 0;  i < array.length; i++) {
    var converted = parseFloat(array[i]);
    if (isFinite(converted)) {
      newArray[newArray.length] = converted;
     
    }
  }

  return newArray;
}

var result = filterNumbers(["1", "-2.1", undefined, "42", "1e+3", Infinity]);

console.log(result);
// zasto mi parseInt ne daje 1000 nego 1?? zato sto parseInt ne razume exponents
