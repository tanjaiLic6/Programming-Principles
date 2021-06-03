// 4. Write a function to split a string and convert it into an array of words.
// &quot;John Snow&quot; -&gt; [ &#39;John&#39;, &#39;Snow&#39; ]

function toArray(string){
    return string.split(" ");
}

console.log(toArray("John Snow"));