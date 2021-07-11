// 2.	Write a function that calculates sale tax that should be paid for the product of the given price. Use a constant to set a fixed value of the tax rate (i.e. 20% in Serbia). 
// 	Input: [{ name: “Banana”, price: 120 }, {name: “Orange”,  price: 100}]
// 	Output: [{ name: “Banana”, price: 144 }, { name: “Orange”,  price: 120 }] // product full price
// 	Output2: [ 24, 20 ] // tax only


const tax = 0.2;
    const calculateTax = (...arr) => {
        let taxes = [];
        arr.map(item => item.forEach(el => taxes.push(el.price*tax)));
        arr.map(item => item.forEach(el => el.price = el.price + el.price*tax));
        console.log(taxes);
        console.log(...arr)   
    }
    console.log(calculateTax([{name: "Banana", price: 120 }, {name: "Orange",  price: 100}]))
  
