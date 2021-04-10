// 2. Write a function to check whether a string is blank or not.
// "My random string&quot"- false
// ""; - true
// 12 - false
// false - false

function blank(string){
    var result;
    if (string===""){
        result=true;
    }
    else {
        result=false;
    }
    return result
}
var res=blank(false);
console.log(res);

