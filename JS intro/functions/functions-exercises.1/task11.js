// 11. Write a program that concatenates a given string given number of times. For example, if
// “abc” and 4 are given values, the program prints out abcabcabcabc.

function concatStrings(word,number){
    var res="";
    var i=0;
    while (i<number){
        res=res+word;
        i++;
    }
    return res;
}

var result=concatStrings("au",4);
console.log(result);