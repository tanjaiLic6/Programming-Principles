function hideMail(mail){
    var result="";
    var lastPart="";
    for (var i=0; i<mail.length; i++){

        if (i<=2){
            result+=mail[i];
        }
        if(i<=5&&i>2){
            result+=".";
        }
       
      if(mail[i]==="@"){
          for (var x=i; x<mail.length; x++){
              
              lastPart+=mail[x];
          }
      }

       
    }
    
    return result+ lastPart;
}

console.log(hideMail("tanjuska611@gmail.com"));
