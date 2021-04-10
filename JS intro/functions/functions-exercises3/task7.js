// 7. Write a function that says whether a number is perfect.
// 28 -&gt; 28 is a perfect number.
// Note: According to Wikipedia: In number theory, a perfect number is a positive integer that is equal to the sum
// of its proper positive divisors, that is, the sum of its positive divisors excluding the number itself (also known
// as its aliquot sum). Equivalently, a perfect number is a number that is half the sum of all of its positive divisors
// (including itself).
// E.g.: The first perfect number is 6, because 1, 2 and 3 are its proper positive divisors, and 1 + 2 + 3 = 6.

// Equivalently, the number 6 is equal to half the sum of all its positive divisors: (1 + 2 + 3 + 6) / 2 = 6. The next
// perfect number is 28 = 1 + 2 + 4 + 7 + 14. This is followed by the perfect numbers 496 and 8128.

function perfectNumber(number){
    var result="";
    var holder;
    var sumOfDividers=0;
   if (number!==0){ 
     for (i=1; i<number; i++){
           holder = number%i;
        if (holder===0){
            sumOfDividers+=i;}
      }
     if (sumOfDividers!==number ){
            result=number+" is not perfect number";
     }
     else if ((sumOfDividers+number)/2===number){
            result=number+" is  perfect number";
     }}
    else {
        result=number+" is not  perfect number";
    }

    return result;
}

console.log(perfectNumber(6));
    