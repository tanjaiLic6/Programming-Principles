// 2. Write a JavaScript function that returns a passed string with letters in alphabetical order.
// Note: Assume punctuation, numbers and symbols are not included in the passed string.
// “Webmaster” -&gt; “abeemrstw”


function sorting(string){
    var small=string.toLowerCase();
    var ar= small.split('');
    var sorted=ar.sort();
    return sorted.join('');



   
}

console.log(sorting("Webmaster"));