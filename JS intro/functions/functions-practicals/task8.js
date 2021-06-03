// 8. Write a function that checks if every element of the first array is contained in the second
// array. Be careful with repetitions!
// Input: [3, 4, 1, 3], [8, 9, 3, 1, 11, 4, 3]
// Output: true

function contained(array1,array2){
    var result;
    var thirdArray=[];
    for(var i=0;i<array1.length; i++){
        for(var j=0; j<array2.length;j++){
            if (array1[i]===array2[j]){
                thirdArray[thirdArray.length]=array2[j];
                delete array2[j];
                break;
            }
        }
    }

    if (array1.length===thirdArray.length){
        result=true;
    }
    else result=false;

    return result;
}
console.log(contained([3, 4, 1, 3],[8, 9, 3, 1, 11, 4,3]));