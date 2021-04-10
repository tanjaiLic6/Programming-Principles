// 3. Write a function that concatenates a given string n times (default is 1).
// "Ha" - "Ha"
// "Ha", 3 -"  HaHaHa"


function concat(string,a){
    var res="";
     for(var i=1; i<=a; i++){
         res+=string;
     }

     return res;
}

console.log(concat("Ha",3));