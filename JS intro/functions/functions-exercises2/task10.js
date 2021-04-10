// 10. Write a function to get the first n characters and add “...” at the end of newly created string.

function newlyString(word,nuberOfchar){
      
    var newString="";
    for(var i=0; i<nuberOfchar; i++){
        newString+=word[i];
    }
    newString+="..."
    return newString;
}

console.log(newlyString("Tanja",2));