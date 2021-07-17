// 11. Write a function that calculates the product of the elements of the array.
// Input: [2, 8, 3]
// Output: 48

let getproduct= (...arr)=>{
    let res=1;
    arr.forEach((el)=>{
        res=el*res;
    })

    return res;
}

console.log(getproduct(2, 8, 3));