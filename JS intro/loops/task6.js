// 5. Write a program that prints the elements of the following array.
// var a = [

// [1, 2, 1, 24],
// [8, 11, 9, 4],
// [7, 0, 7, 27]
// ];



var a = [ [1, 2, 1, 24], [8, 11, 9, 4],[7, 0, 7, 27]];
var elements="";




for(var i=0; i<a.length; i++){ 


 for (var x=0; x<a[i].length; x++){
     elements+=a[i][x] + (",");
    
    }


}

console.log(elements );


// console.log(a.join(",")); ovo sam samo isprobavala


    