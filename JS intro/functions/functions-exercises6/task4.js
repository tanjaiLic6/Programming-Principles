// 4. Write a function that takes a number and returns array of its digits.

function toArray(number){
    var result=[];
    var numString=number+"";
    for(var i=0; i<numString.length; i++){
        result[result.length]=numString[i];
    }

    return result;
}


console.log(toArray(12444455));