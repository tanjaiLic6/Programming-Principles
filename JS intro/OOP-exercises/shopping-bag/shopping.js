"use strict";
(
    function(){
 // product 
 function Product(name,price,expirationDate){
     this.productID=(Math.floor(Math.random()* (99999 - 10000 + 1) + 10000));
     this.name=name;
     this.price=price.toFixed(2);
  
     this.expirationDate=new Date(expirationDate).toLocaleDateString('en-us');
 
     this.getInfo=function(){
         var fLetter=(this.name.slice(0,1)).toUpperCase();
         var lLetter=(this.name.slice(-1)).toUpperCase();
         return fLetter+lLetter+this.productID+", "+ this.name+" ,"+ this.price;
     }
   
 }

 // shoppingbag
 
 function ShoppingBag(){
 this.productList=[];
 
 this.addProduct=function(product){
     var today=new Date().valueOf();
     var productTime=new Date(product.expirationDate).valueOf();
     if(productTime>today){
          this.productList.push(product); 
     }
 
     else {   console.log("error")}
     
 };
 
 this.averagePrice=function(){
     var sum=0;
     this.productList.forEach(function(element){
     
       sum+= parseFloat(element.price);
      
 
 
 })
 return Number(sum/this.productList.length.toFixed(4));}
 
 this.mostExpensive=function(){
     var mostExp=[];
     var sorted=this.productList.sort(function(a,b){
         return b.price-a.price
     })
 return mostExp=[sorted[0].name,sorted[0].price];
 
 }
 this.totalPrice=function(){
     var sum=0;
     this.productList.forEach(function(element){
         return sum+=parseFloat(element.price);
     })
     return sum;
 }
 
 }
 
 function PaymentCard(balance,validDate){
     this.accountBalance=Number(balance.toFixed(2));
     this.status=function(){
         var validdate=new Date(validDate);
         var today=new Date();
         if(validdate<today){
             return "inactive";
         }
         else return "active";
    };
     this.validDate=function(){
         var fullDate=new Date(validDate);
         var day=fullDate.getDate();
         var month=fullDate.getMonth()+1;
         var year=fullDate.getFullYear();
         return day+"/"+month+"/"+ year;
      }
 
 }
 
 function checkOutAndBuy(shoppingBag,paymentCard){

     var price=shoppingBag.totalPrice();
    
   if(price<paymentCard.accountBalance){
       return "Sucessfull purchase"
   }
   else {
       return "Not enough money! Missing "+ (price-paymentCard.accountBalance);
   }
 }
 
 
 
 
 // var product1= new Product("Sok",250.8555,"12/24/2021");
 // var product2= new Product("Keks",350.6666,"10/10/2021");
 // // console.log(p1);
 // // console.log(p1.getInfo());
 
 
 // var sh1=new ShoppingBag();
 // sh1.addProduct(product1);
 // sh1.addProduct(product2);
 
 // console.log(sh1);
 // console.log(sh1.averagePrice(sh1.productList));
 // console.log(sh1.mostExpensive(sh1.productList));
 // console.log(sh1.totalPrice(sh1.productList));
 // var card1=new PaymentCard(1000,"active","06/15/2021");
 // console.log(card1);
 var cokolada=new Product("cokolada",120,'06/31/2021');
 var vino= new Product("kovacevic",650,'08/15/2022')
 
 // console.log(cokolada);
 // console.log(vino);
 
 var bag= new ShoppingBag();
 bag.addProduct(cokolada);
 bag.addProduct(vino);
 var mycard= new PaymentCard(1000,"8/7/2021");
 console.log(bag);
 console.log(bag.productList);
//  console.log(mycard.status());
//  console.log(mycard.validDate());
 
 console.log("average price "+bag.averagePrice(bag.productList));
 console.log("most expensive "+bag.mostExpensive(bag.productList));
 console.log("total price "+ bag.totalPrice(bag.productList));
 console.log(checkOutAndBuy(bag,mycard));
 
 }
 )();
 
 