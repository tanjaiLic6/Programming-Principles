// Write a program that checks if a given number is odd.

function isOdd(number){
    if (number%2!==0){
        return true;
    }
    else {
        return false;
    }
}

var result=isOdd(5);
console.log(result);