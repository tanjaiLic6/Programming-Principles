// 8. Write a program that takes a string and prints its characters out in reversed order in the
// console.
// Input: Belgrade Institute of Technology
// Output: ygolonhceT fo etutitsnI edargleB

function reversed(string){
    var result="";
    for(var i=string.length-1; i>=0; i--){
      result+=string[i];
    }

    return result;
}

console.log(reversed("Belgrade Institute of Technology"));