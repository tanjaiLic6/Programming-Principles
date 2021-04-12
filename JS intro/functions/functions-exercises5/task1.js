// 1. Find the min and max element in the following array and switch their places. Print out the
// modified array in the console.
// Input: [ 3, 500, 12, 149, 53, 414, 1, 19 ]
// Output: [ 3, 1, 12, 149, 53, 414, 500, 19 ]

function swithMinAndMax(array){
    var newArray=[];
    var min=array[0];
    var max=array[0];
    var minPosition=0;
    var maxPosition=0;
    for (var i=0; i<array.length; i++){
        if (min>array[i]){
            min=array[i];
            minPosition=i;//6
        }
        if (max<array[i]){
            max=array[i];
            maxPosition=i;//1
        }

    }
    for (var x=0; x<array.length; x++)
    if (x===minPosition){ 
        newArray[x]=max;
    }
    else if(x===maxPosition){
        newArray[x]=min;
    }
    else {
        newArray[x]=array[x];
    }

   return newArray;
}

console.log(swithMinAndMax([ 3, 50, 12, 149, 53, 414, 1, 19 ]));

