// 7. Write a function to convert string into an array. Space in a string should be represented as
// “null” in new array.
// " My random string"  [" M", "y", null, "r", "a"]
// &quot;Random&quot; -&gt; [&quot;R&quot;, &quot;a&quot;, &quot;n&quot;, &quot;d&quot;, &quot;o&quot;, &quot;m&quot;]

function toArray(string){
    var array=[];
    for(var i=0; i<string.length;i++){
        var placehold=string[i];
        if (placehold===" "){
          array[i]=null;

        }
        else {
            array[i]=placehold;
        }
    }

    return array;
}

console.log(toArray("Random string"));