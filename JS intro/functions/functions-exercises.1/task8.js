// 8. Write a program that calculates a number of appearances of a given number in a given
// array.
// Inputs: a = [2, 4, 7, 8, 7, 7, 1], e = 7
// Result: 3


function numOfappearance(arr,num){
    var res=0;
    
    
  for(var i=0; i<arr.length; i++){
      if (arr[i]===num){
          res+=1;
      }
  }
   return res;
}

var calculation=numOfappearance([2, 4, 7, 8, 9, 7, 9,9,9],9);
console.log(calculation);