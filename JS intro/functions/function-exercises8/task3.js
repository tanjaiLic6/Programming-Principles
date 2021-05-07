// 3. Write IIFE that replaces all appearances of the letters m or M with * and returns the
// number of replacements.
// Input: prograMming
// Output: progra**ing, 2

(
       function(letter,letter2,word) {
           var newWord="";
           var numberReplacment=0;
         for(var i=0; i<word.length; i++){
             if (word[i]===letter||word[i]===letter2){
                 numberReplacment+=1;
                 newWord+="*";
             }
             else {
                 newWord+=word[i];
             }
         }

           console.log(newWord);
           console.log(numberReplacment);

       }
)("m","M","prograMming");