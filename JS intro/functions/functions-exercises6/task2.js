// 2. Write a function that combines two arrays by alternatingly taking elements.
// [‘a’,’b’,’c’], [1,2,3] -&gt; [‘a’,1,’b’,2,’c’,3]

function combine(array1,array2){
    var result=[];
    
 var longerArray;

 if (array1.length>array2.length){
         longerArray=array1.length;
 }
 else {
         longerArray=array2.length;
 }

 for (var i=0; i<longerArray; i++){
         if (i<array1.length){
                 result[result.length]=array1[i];
         }

         if (i<array2.length){
                 result[result.length]=array2[i];
         }
 }



   
 
   return result;
}



console.log(combine(["a","b","c"],[1,2,3]));

