// 3. Write a function that rotates a list by k elements.
// For example [1,2,3,4,5,6] rotated by two becomes [3,4,5,6,1,2]

function rotate(array, k){
    var result=[];
    for(var i=k,j=0; i<array.length; i++,j++){
       result[j]=array[i];
    }

    for(var x=0; x<k;x++){
      result[result.length]=array[x];
    }
    
    return result;
}

console.log(rotate([1,2,3,4,5,6],3));