Output:
//     *
//    * *
//   * * *
//  * * * *
// * * * * *
                   5
function pyramid(numberTall){
 var result="";
 for(var i=1; i<=numberTall; i++){
    for( var x=1; x<=numberTall-i; x++){
        result+=" ";
    }
    for(var j=1; j<=i; j++){
        result+="* ";
    }
    
    result+="\n"
 } 

 return result
}

var res=pyramid(5);
console.log(res);