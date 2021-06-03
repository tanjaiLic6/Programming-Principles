// 10. Write a program that checks if the entered number is a prime number (i.e. divisible only
//     by 1 and by itself).
//     Input: 17 | 15
//     Output: true | false

function prime(number){
    var result=true;
    for (var i=2; i<=number; i++)
    if(i!==number){
        if(number%i===0){
            result=false;
        }
    }
    return result;
}

console.log(prime(6));