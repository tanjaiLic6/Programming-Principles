// 10. Write a function that checks if the given array is an array of positive integer values.
// Input: [3, 11, 9, 5, 6]
// Output: yes
// Input: [3, -12, 4, 11]
// Output: no

let arePositiveInegers=(...arr)=>{
   
    if( arr.every((el)=>parseInt(el)>0)){

        return 'yes'
    }
       else { return 'no'}
         

     
   }
   
   let check1=(arePositiveInegers(3, 11, 9, 5, 6.4545));
   
   console.log(check1)