// 8. Write a function to hide email addresses to protect them from unauthorized users.
// &quot;somerandomaddress@example.com&quot; -&gt; &quot;somerand...@example.com&quot;


function hideEmail(string){
    var length=string.length;
    console.log(length);
    var sign=string.indexOf("@");//17
    var dots="...";
    var lastPart=string.slice(sign,length);
    var firstPart=string.slice(0,sign).slice(-sign,sign-3);
   return firstPart+dots+lastPart;
}




console.log(hideEmail("tanjuska611@gmail.com"));