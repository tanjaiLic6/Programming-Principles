// 5. Write a function to convert a string to its abbreviated form.
// &quot;John Snow&quot; -&gt; &quot;John S.&quot;

function toArray(string){
    var arr= string.split(" ");
    var surname=arr[1].slice(0,1).concat(".");
    return arr[0]+" "+surname;

}

console.log(toArray("John Snow"));