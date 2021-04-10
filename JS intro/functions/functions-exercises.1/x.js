//      x
//      x
//  x x x x x 
//      x
//      x


function cross(number){

    var res="";
    var half=0.5;
    for (var i=1; i<=number; i++ ){
        for ( var j=1; j<=number; j++){
            if (number%2===0){
                if (i==(number/2)||j==(number/2)){
                    res+="x ";
                  }
                  else{  res+="  ";}
                }

            else { 
                if (i==(number/2)+half||j==(number/2)+half){
                    res+="x ";
                  }
                  else {  res+="  ";}
              }
              } 
            
            
        res+="\n";
    }
    return res
}


var result=cross(13);
console.log(result);