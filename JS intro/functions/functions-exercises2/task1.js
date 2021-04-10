// Write a function to check whether the `input` is a string or not.
// "My random string"- true
// 12 - false


function check(input){
    var result;
    if (typeof(input)==="string"){
        result=true;
    }

    else {
        result=false;
    }
    return result;
}

var res=check(undefined);
console.log(res);