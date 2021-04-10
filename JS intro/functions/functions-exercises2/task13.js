// 13. Write a function to humanize a number (formats a number to a human-readable string) with
// the correct suffix such as 1st, 2nd, 3rd or 4th.
// 1 ==> 1st
// 11 ==> 11th

// st is used with numbers ending in 1 (e.g. 1st, pronounced first)
// nd is used with numbers ending in 2 (e.g. 92nd, pronounced ninety-second)
// rd is used with numbers ending in 3 (e.g. 33rd, pronounced thirty-third)
// As an exception to the above rules, all the "teen" numbers ending with 11, 12 or 13 use -th (e.g. 11th, pronounced eleventh, 112th, pronounced one hundred [and] twelfth)
// th is used for all other numbers (e.g. 9th, pronounced ninth).
   
    function humanizeNumber(number){
        var numberString=number+"";
        var beforeLastDigit=numberString[numberString.length-2];
        var lastDigit=numberString[numberString.length-1];
    
    
        if (beforeLastDigit==="1"){
            numberString+="th";
        }
        else { 
         if ( lastDigit==="1"){
                numberString+="st";
            }
         else if (lastDigit==="2"){
                numberString+="nd";
            }
         else if (lastDigit==="3"){
                numberString+="rd";
            }
         else {numberString+="th";}     
        }    
            return numberString;
        }
    
        console.log(humanizeNumber(121));
        