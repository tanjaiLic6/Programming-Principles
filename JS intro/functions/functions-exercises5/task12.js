// 12. Write a program that calculates the greatest common divisor of two integers. Note: The
// greatest common divisor of two non-zero integers is the greatest positive number that
// divides both numbers with no remainder.
// Input: 192 42 | 81 9
// Output: 6 | 9


function greatestComonDiv(number1,number2){
    var result=0;
    for(var i=1; i<number1; i++){
        if (number1%i===0&&number2%i===0){
          result=i;
        }
    }

    return result;
}

console.log(greatestComonDiv(81,9));