// 11. Check if a given string is a palindrome (spaces are ignored).
// Input: eye | Geek | a nut for a jar of tuna
// Output: true | false | true

function palindrome(string){
    var result=false;
    var space=" ";
    var blanks=0;
    var counter=0;
     for (var i=0,x=string.length-1; i<string.length;i++,x--){
         if(string[i]===" "){
             blanks+=1;
             i++;
         }
         if(string[x]===" "){
             blanks+=1;
             x--;
         }
        if (string[i]===string[x]){
              counter+=1;
              
        }
     }
     blanks/=2;
     if ((blanks+counter)===string.length){
         result=true;
     }

     return result;
}

console.log(palindrome("ana voli milovana"));