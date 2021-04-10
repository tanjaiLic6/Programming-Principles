// 9. Write a function that replaces spaces in a string with provided separator. If separator is not
// provided, use “-” (dash) as the default separator.
// "My random string", "_"  "My_random_string"
// "My random string", "+"" "My+random+string"
// "My random string"  "My-random-string"

function spaces(string,separator){
    var result="";
    for(var i=0; i<string.length; i++){
        if (string[i]===" "){
            if(separator===""){
                result+="-";  
            }
            else {
                result+=separator;
            }
             
        }
        else {
            result+=string[i];
        }
    }
    return result;
}

console.log(spaces("My random string","_"));