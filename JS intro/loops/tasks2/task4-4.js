// Write a program that finds the first element larger than minimum and prints out its value.
// Input array: [4, 2, 2, -1, 6]
// Output: 2 

var array=[4, 2, 0, -1, 6];
 var minIndex=0;
 var secondIndex=0;
// definisala sam minindex kao 0,pocetna tacka sa cim se uporedjuje

 for( var i=0; i<array.length; i++){
      if (array[i]<array[minIndex]){
          minIndex=i;}

// prvi for pronalazi najmanji element , i za svaki manji br menja vrednost minindexa preuzima tu prednost

// drugi for trazi broj veci od najmanjeg a manji od ostalih,isto se pocinje od pretostavke da je to prvi br
  for (var x=0; x<array.length; x++){
     if( (  array[x]<array[secondIndex]) && (array[x]>array[minIndex])) {
         
         secondIndex=x;
         
     }

    }   
  }
console.log(array[secondIndex]);
  


 

