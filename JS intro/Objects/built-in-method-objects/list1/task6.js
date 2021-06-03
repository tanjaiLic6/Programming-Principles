// 6.
// a. Write a list (array) of products you usually buy in the supermarket. Write a price
// and name for each product. For example,
// [

// {name: ‘apples’, price: 100},
// {name: ‘milk’, price: 80},
// {name:’bananas’, price: 150}
// ]

// b. Write a function that calculates the total price of your shopping list.
// c. Write a function that calculates the average product price of your shopping list.
// Print this value with the precision of three decimals.
// d. Write a function that prints out the name of the most expensive product on your
// shopping list. Write the name in uppercase.

//a
var list=[
    {name:"bread", price:140},
    {name:"juice", price:100},
    {name:"chocolate", price:200}
]


function totalPrice (lis){
    var sum=0;
    lis.forEach(element => {
        sum+=element.price;
    });

    return sum;
}

console.log(totalPrice(list));


//c 

function average(sum){
  return  Math.round(sum/list.length);
}

console.log(average(totalPrice(list)));


//d

function max(array){
  var sorted=  array.sort(function(a,b){
      return   b.price-a.price;
    })

    var mostExpensive=sorted[0].name;
    return mostExpensive.toUpperCase();
}

console.log(max(list));