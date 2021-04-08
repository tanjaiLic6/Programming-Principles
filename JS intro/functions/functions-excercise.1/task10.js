// 10. Write a program that calculates the number of appearances of a letter a in a given string.
// Modify the program so it calculates the number of both letters a and A.

function countOfletterA(word){
    var res=0;
    for (var i=0; i<word.length; i++){
        if (word[i]==="a"|| word[i]==="A"){
            res+=1;
        }
    }
    return res;
}

var a="Ananas";
var result=countOfletterA(a);
console.log(result);