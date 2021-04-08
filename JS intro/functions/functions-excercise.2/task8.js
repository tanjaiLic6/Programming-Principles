// 8. Write a function that accepts a number as a parameter and checks if the number is prime or
// not.
// Note: A prime number (or a prime) is a natural number greater than 1 that has no positive
// divisors other than 1 and itself.

function prime(number){
    var res="";
    if (number<=1){
      res="Number is not prime";
      return res;
    }
    else { 
    for (var i=2; i<=number; i++){
       if (i===number){
         res="Number is prime"
         continue;
       }
       else{ 
        if ( number%i===0){
            res="Number is not prime";
            break;
        }
        else {
          res="NUmber is prime"
        }}
    }

    return res;}

}


console.log(prime(3));
