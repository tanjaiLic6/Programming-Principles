// 9. Write a function that sorts an array of strings by the number of appearances of the letter
// "a’ or "A’.
// Input: ["apple’, "tea’, "amazing’, "morning’, "JavaScript’]
// Output: ["morning’, "apple’, "tea’, "JavaScript’, "amazing’]

function sorting(array,letter1,letter2){
   var numOfA;
   var maxNumA=0;
   var newArray=[];
   for (var i=0; i<array.length; i++){
    for(var x=0; x<array[i].length; x++){
      numOfA=  checkLetters(array[i][x],letter1,letter2);
      

    }
    if (numOfA>maxNumA){
        maxNumA=numOfA;
        newArray[i+1]=array[i];
    }
    else if(numOfA<maxNumA){
        newArray[i-1]=array[i]
    }
    else if(numOfA===maxNumA){
        newArray[i]=array[i];
    }
   }
   return newArray;
}

var checkLetters=function(letterInString,letter1,letter2){
    var counter=0;
      if (letterInString===letter1||letterInString===letter2){
             counter++;
             

      }
      return counter;
}

console.log(sorting(["apple", "tea", "amazing", "morning", "JavaScript"],"a","A"));



function sorting(array,letter1,letter2){
    var numOfA;
    var maxNumA=1;
    var newPosition=0;
    var counter=0;
    var newArray=[];
    for (var i=0; i<array.length; i++){
     for(var x=0; x<array[i].length; x++){
      if(array[i][x]===letter1||array[i][x]===letter2){
          counter+=1;
      }
        
      if(counter<maxNumA){
          newArray[array.length-i]=array[i];
          counter=0;
 
      }
      else if(counter===maxNumA){
          newArray[array.length-i+1]=array[i];
          counter=0;
      }
 
    else if(counter>maxNumA){
          newArray[i]=array[i];
          maxNumA=counter;
          counter=0;
      }
     } 
 
 
       
     
    }
    return newArray;
 }
 
 // var checkLetters=function(letterInString,letter1,letter2){
 //     var counter=0;
 //       if (letterInString===letter1||letterInString===letter2){
 //              counter++;
              
 
 //       }
 //       return counter;
 // }
 
 console.log(sorting(["apple", "tea", "amazing", "morning", "JavaScript"],"a","A"));
 
 
 