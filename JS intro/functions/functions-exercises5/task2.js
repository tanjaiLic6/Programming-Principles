// 2. Use the following array to make a new one by dividing its values by two and adding 5. If
// a given element&#39;s value is 0, change it to 20.
// Input: [ 3, 500, -10, 149, 53, 414, 1, 19 ]
// Output: [ 6.5, 255, 20, 79.5, 31.5, 212, 5.5, 14.5 ]

function newArray(array){
    var changed=[];
    var checker=0;
    for(var i=0; i<array.length; i++){
      checker=(array[i]/2)+5;
        if(checker===0){
            changed[i]=20;
        }
        else {changed[i]=checker;}
    }

    return changed;
}

console.log(newArray([ 3, 500, -10, 149, 53, 414, 1, 19 ]));