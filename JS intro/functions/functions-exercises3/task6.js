// 6. Write a function to create a specified number of elements with pre-filled numeric value
// array.
// 6, 0 ==> [0, 0, 0, 0, 0, 0]
// 2, none ==> ["none", "none";]
// 2 ==> [null, null]

function createArray(numOfElements,value){
   if (typeof value==undefined){
       value=null;
   }
   

    var array=[];
    for(var i=0; i<numOfElements; i++){
      array[array.length]=value;
    }

   return array;
}

console.log(createArray(2,"none"));