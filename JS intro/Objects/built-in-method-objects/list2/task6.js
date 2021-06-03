// 6. Write a function that adds string to the left or right of string, by replacing it’s characters.
// &#39;0000&#39;, ‘123’, &#39;l&#39; -&gt; 0123
// &#39;00000000&#39;, ‘123’, &#39;r&#39; -&gt; 12300000


// function adding(toChange,toAdd,x){

//  var lengthToCut=toAdd.length;

//  if (x==="l"){
//  var ll=toChange.lenght-lengthToCut;
 
//   return toChange.slice(0,toChange.length-lengthToCut);



//  }

// }

function addingStrings(toChange, toAdd, x){
    var lengthtoCut = toAdd.length;

    if(x === 'l'){
        return editedText = toChange.slice(0,- lengthtoCut) + toAdd;

    }

    else if(x==="r"){
        return editedText=toAdd+toChange.slice(lengthtoCut);
    }
}
console.log(addingStrings("00000000","123","r"));