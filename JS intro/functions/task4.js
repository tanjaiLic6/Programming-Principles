// Write a program that calculates an arithmetic mean of four numbers.

function arithmeticMean(num1,num2,num3,num4){
 var res= (num1+num2+num3+num4)/4;
  return res;

}

var result= arithmeticMean(34,44,56,78,100);

console.log(result +"first");
// primer sa arguments i sa obicnim nizom

function mean(){
  var res=0;
  for (var i=0; i<arguments.length; i++){
    res+=arguments[i];
  }
  res/=arguments.length;
  return res;
}

var result= mean(34,44,56,78,100);

console.log(result);