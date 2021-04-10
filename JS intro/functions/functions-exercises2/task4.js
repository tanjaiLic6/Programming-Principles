// 4. Write a function to count the number of letter occurrences in a string.
// " My random string", "n" --> 2


function numofoccur(string,letter){
    var res=0;
    for (var i=0; i<string.length; i++){
        if (letter===string[i]){
            res+=1;
        }
    }
    return res; 
}

console.log(numofoccur("My random stringnnn","g"));