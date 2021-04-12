// 7. Define a 10 element array. Take the first two letters from every string (that has at least 2
//     letters) in the array and create a new string from them. Print it out in the console.
//     Input: [ "M", "Anne", 12, "Steve", "Joe", "John", "David", "Mark", true, "A" ]
    
//     Output: AnStJoJoDaMa

function createString(array){
    var result="";
    var holder="";
    for( var i=0; i<array.length; i++){
          holder=array[i].length;
        if (typeof(array[i])==="string"&&holder>=2){
            result+=array[i][0]+array[i][1];
        }
    }
    return result;
}

console.log(createString([ "M", "Anne", 12, "Steve", "Joe", "John", "David", "Mark", true, "A" ]))

