// Write a program that draws a horizontal chart representing three given values. For
// example, if values are 5, 3, and 7, the program should draw:
// * * * * *
// * * *
// * * * * * * *
4,5,6

function chart(){
  var res="";
for (var i=0; i<arguments.length; i++){ 
  for(var x=0;x<arguments[i]; x++){
     res=res+"*";
  }
  res+="\n" }

  return res;
}

var result=chart(4,3,7);

console.log(result);