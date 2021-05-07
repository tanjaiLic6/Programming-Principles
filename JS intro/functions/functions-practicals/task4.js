// 4. Write a function that deletes a character from the given position in the string.
// Input: “Goodd morning!”, 3
// Output: “Good morning!”

function deleteChar(string,positionToDelete) {
   var res="";
   for(var i=0; i<string.length; i++){
       if(positionToDelete!==i){
           res+=string[i];
       }
       
   }
   return res;
}

console.log(deleteChar("Goodd morning!",3));