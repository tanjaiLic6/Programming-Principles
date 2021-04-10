// 6. Write a function to find the position of the last occurrence of a character in a string. The
// result should be in human numeration form. If there are no occurrences of the character,
// function should return -1.


function lastOccurane(string,letter){
    var position=-1;
    for(var i=0; i<string.length; i++){
        if (letter===string[i]){
            position=i+1;
        }
    }
    return position;
}

console.log(lastOccurane("Tanja","a"));