// 6. Write a function that replaces the elements of the given array between two positions with
// their doubled values.
// Input: [3, 5, 1, 8, 90, -4, 23, 1, 67], 2, 6
// Output: [3, 5, 2, 16, 180, -8, 46, 1, 67]

function doubleElements(array,start,end,doubling){

    var newArr=[];
    for(var i=0; i<array.length;i++){
        if (i>=start&&i<=end){
           newArr[newArr.length]=doubling(array[i]);
        }
        else {
            newArr[newArr.length]=array[i];
        }
    }
    return newArr;
}

var doubleNumber=function(number){

  return  number*2;
    

}


console.log(doubleElements([3, 5, 1, 8, 90, -4, 23, 1, 67],2,6,doubleNumber));

