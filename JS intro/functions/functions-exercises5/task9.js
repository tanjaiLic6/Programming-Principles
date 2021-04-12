// 9. Write a program that displays all the combinations of two numbers between 1 and 7.
// Don&#39;t display two of the same numbers at the same time. Display the number of possible
// combinations, as well. (E.g. (1.2),(2,1) is allowed, but not (1,1), (2,2)...).

function combinations(){
    var result="";
    var numOfComb=0;
    for (var i=1; i<=7; i++){
        for(var x=1; x<=7; x++){
            if (i!==x){
                result+="("+i+","+x+")";
            }
        }
    }
    numOfComb=(i*(i-1));
    return result,numOfComb;
}

console.log(combinations());