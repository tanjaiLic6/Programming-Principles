// 7. Write a function to find the maximum element in array of numbers. Filter out all non-number
// elements.

function maxNUmAndFilter(array){
    var result=[];
    var maxNum=array[0];

    for (var i=0; i<array.length;i++){
        if(isFinite(parseFloat(array[i]))){
            result[result.length]=array[i];
        }

        if(array[i]>maxNum){
            maxNum=array[i];
        }
    }

    console.log(maxNum);
    return result;

}

var res=maxNUmAndFilter;
console.log(res([2,5,"tanja",12.5,"cao"]));