// Write a program that checks if a given number is a three digit long number.

function isThreeDigit(number){
    if (number>=100&&number <1000){
        return "three digit";
    }
    else {
        return "not three digit";
    }
}

var result= isThreeDigit(4550);
console.log(result);