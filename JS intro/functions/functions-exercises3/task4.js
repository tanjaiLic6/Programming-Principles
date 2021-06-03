// 4. Write a function that reverses a number. The result must be a number.
// 12345 - 54321 // Output must be a number


function reverse(number){
    var reversed="";
    number=number+"";
    for (var i=number.length-1; reversed.length!==number.length; i--){
        reversed+=number[i];
    }
     
    return parseInt(reversed);
     
  }
  
  var numb=reverse(12345);
  console.log(numb);
  console.log(typeof numb);


