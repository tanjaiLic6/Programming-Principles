// 5. Write a program that prints a multiplication table for numbers up to 12.


function multiplication(number){
  var result;
  for (var i=1; i<=12; i++){
      result=i+"*"+number+" = "+(i*number)+"\n";
     console.log(result);
  }

  
}

console.log(multiplication(5));