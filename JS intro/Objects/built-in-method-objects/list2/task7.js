// 7. Write a function to capitalize the first letter of a string and returns modified string.
// &quot;js string exercises&quot; -&gt; &quot;Js string exercises&quot;

function capitalize(string){
   
    var firstLetter=string.slice(0,1)
    var restLetters=string.slice(1,string.length);

    return firstLetter.toUpperCase()+restLetters;
}

console.log(capitalize("js string exercises"));