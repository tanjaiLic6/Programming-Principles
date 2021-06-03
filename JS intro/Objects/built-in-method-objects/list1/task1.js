// 1. Write a functional expression that duplicates each element of a given array.
// Input: [2, 4, 7, 11, -2, 1]
// Output: [2, 2, 4, 4, 7, 7, 11, 11, -2, -2,

a=[2, 4, 7, 11, -2, 1];
b=[]
var c =function (){ 
for(var i=0; i<a.length; ++i){

    b.push(a[i]);
    b.push(a[i]);

}
return b;
}

console.log(c(a));