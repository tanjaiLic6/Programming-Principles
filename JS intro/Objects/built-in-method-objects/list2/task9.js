// 9. Write a program that accepts a string as input and swaps the case of each character. For
// example, if you input &#39;The Quick Brown Fox&#39;, the output should be &#39;tHE qUICK bROWN fOX&#39;.
// var UPPER = &#39;ABCDEFGHIJKLMNOPQRSTUVWXYZ&#39;;
// var LOWER = &#39;abcdefghijklmnopqrstuvwxyz&#39;;
// &quot;The Quick Brown Fox&quot; -&gt; &quot;tHE qUICK bROWN fOX&quot;

function swap(string){
    var newSt='';
    var UPPER = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var up=UPPER.split("");

    var LOWER = "abcdefghijklmnopqrstuvwxyz";
    var low=LOWER.split("");
    var array=string.split("").forEach(function(element) {
       if(element===" "){
         newSt+=" ";
       }
       else{ 
        if(up.includes(element)){
          var pos=up.indexOf(element);
           newSt+=low[pos];
        }

      

        else if(low.includes(element)){
          var pos2=low.indexOf(element);
            newSt+=up[pos2];
        }

    }});
    return newSt;
    
}

console.log(swap("The Quick Brown Fox"));