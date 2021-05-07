// 5. Write a function that returns a function that calculates a decimal value of the given octal
// number.
// Input: 034
// Output: 28


   function toDec(number){

     return  function  (num)
     {var result=parseInt(num,10);
      return result; }
       
    }
    var res=toDec();
    console.log(res);
    console.log(res(034));


