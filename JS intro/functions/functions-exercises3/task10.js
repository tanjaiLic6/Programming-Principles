// 10. Write a program to find the most frequent item of an array.
// [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3]


function mostFrequent(array) {
    var mostFreq = 0;
    var result = array[0];
     for(var i = 0; i < array.length; i++){
         var counter = 0;
         for(var j = 0; j<array.length; j++){
          if(array[i] === array[j]){
         counter += 1;
         }
     }
     if(mostFreq < counter) {
         result = array[i];
         mostFreq = counter;
     }
     }
     return result;
 }
 console.log(mostFrequent([3, 'a', 3, 'a', 'a', 2,'a', 3, 'a', 2, 4, 9, 3]));