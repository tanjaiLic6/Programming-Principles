// 4. Write a function with parameters name and surname that returns a function that
// suggests an email in the form name.surname@gmail.com.
// Input: pera peric
// Output: pera.peric@gmail.com

var emailGenerate=function(name,surname){
    var result="";
    result=name+"."+surname+"@gmail.com";
    // console.log(result);
    return result;
    
 }//("tanja","ilic")

// console.log(emailGenerate("tanja","ilic"));

var sugestion=emailGenerate("tanja","ilic");
console.log(sugestion);