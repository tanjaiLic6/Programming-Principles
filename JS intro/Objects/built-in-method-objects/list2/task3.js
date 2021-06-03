// 3. Write a function to alphabetize words of a given string. Alphabetizing a string means
// rearranging the letters so they are sorted from A to Z.
// &quot;Republic Of Serbia&quot; -&gt; &quot;Rbceilpu Of Sabeir&quot;


function alphabetize(string){

  var newString="";
var arr = string.split(" ");
for (var i=0; i<arr.length; i++){ 

 var sor=arr[i].split("").sort().join("");
 newString+=sor+" ";

}
 return newString;
     
}


console.log(alphabetize("Republic Of Serbia"))