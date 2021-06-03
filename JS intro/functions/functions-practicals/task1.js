// 1. Write a function that checks if a given string contains digit 5.
// Input: “1b895abd”
// Output: true
// Input: “1bser9re”
// Output: false

var checking=function(string){
    var res;
    for (var i=0; i< string.length; i++){
      if (string[i]==="5"){
          res=true;
          break
          
      }
        else res=false;
    }
    return res;
    
}

console.log(checking("1b89bd"));