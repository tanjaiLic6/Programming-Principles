// 5. Write a function to find the position of the first occurrence of a character in a string. The
// result should be the position of character. If there are no occurrences of the character, the
// function should return -1.


function firstOcurrance(string,letter){
    var position=-1;
    for (var i=0; i<string.length; i++){
        if(letter===string[i]){
            position=i;
            break;
        }
    }
    return position;
}

console.log(firstOcurrance("Tanja","a"));