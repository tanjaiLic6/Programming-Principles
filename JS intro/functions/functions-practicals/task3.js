// 3. Write a function that inserts a given character on a given position in the string.
// Input: “Goo morning”, 4, ‘d’
// Output: “Good morning”

function insertChar(string,position,char){
    var newString="";

    for (var i=0; i<string.length; i++){
        if (i===position-1){
            if (string[i]===" "){ 
            newString+=char+string[i];}
            else { newString+=char }
        } 
        else {
            newString+=string[i];
        }
    }
    return newString;
}

console.log(insertChar("Goo morning",4,"d"));