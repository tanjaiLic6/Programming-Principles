// 5. Write a program that draws a square of a given size. For example, if the size of square
// is 5 the program should draw:
// *****
// *   *
// *   *
// *   *
// *****


function square(number){

  var res="";

  for(var i=1; i<=number; i++){
      for(var j=1; j<=number; j++){
          if (i==1||j==1||i==number||j==number){
              res+="*";
          }
          else{
              res=res+" ";
          }
      }
      res=res+"\n"
  }

 return res;

}

var k=square(10);
console.log(k);
 