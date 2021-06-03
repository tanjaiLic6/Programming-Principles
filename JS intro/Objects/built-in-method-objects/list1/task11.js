// 11.
// a. Write a function that generates a random integer value between 5 and 20.
// b. Write a function that generates a random integer value between 50 and 100.
// c. Write a function which expects a number and a callback generator function and
// returns an array of numbers produced by the generator function.

//a and b

function generator(start,end){
   return Math.floor(Math.random()* (end - start + 1) + start);
}

console.log(generator(50,100));


// c

function arrayer(number,callback){
    var array=[];
    for (var i=0; i<5; i++){ 
    array[i]=Math.floor(callback()*number);
    }
    return array
    
    }
    
    console.log(arrayer(25,function(){return  (Math.random())}));