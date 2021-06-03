// 8. Write a function to find a word within a string.
// "The quick brown fox";, "fox"; - "fox" was found 1 times";
// "aa bb cc dd aa", "aa" - "aa" was found 2 times";

 function findString(string,stringToFind){
     var holder="";
     counter=0;
    for (var i=0, x=0; i<string.length; i++ ){
         if (string[i]===stringToFind[x]){
          holder+=stringToFind[x];
            x++;
            if(x===stringToFind.length){
              counter+=1;
                x=0;
            }
         }
       
    }

    return counter;
 }

 console.log(findString("The fox quick brown fox fox fox","fox"));

 