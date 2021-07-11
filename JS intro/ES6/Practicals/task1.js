// // 1.	Write a function that capitalizes the first letter of each string argument it receives.  
// // 	Function arguments: ['hello', 'there', 'ES', 6]
// // 	Output: ['Hello', 'There', 'ES']
// let arguments=['hello', 'there', 'ES', 6]

//   let array=['hello', 'there', 'ES',6];

   let capitalize =(...arr)=>{ 
       return arr 
       .filter(item=> typeof item==='string')
       .map (item=>item[0].toUpperCase()+item.slice(1))
   } 




console.log(capitalize('hello', 'there', 'ES','Tanja',55));





 

