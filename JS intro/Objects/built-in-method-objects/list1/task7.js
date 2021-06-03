// 7.
// a. Write a function that checks if a given string is written in all capitals.
// b. Write a function that checks if a given string contains any digits.
// c. Write a function that checks if a given string is a valid hexadecimal color.
// d. Write a function that checks if a given number belongs to the interval from 1900
// to 2018.
// e. Write a function named validator that returns an object with properties
// stringValidator, passwordValidator, colorValidator, and yearValidator referencing
// the functions from a) to d).

var inputString = '5AAA3';
function isInAllCapitals(string) {
  return string.toUpperCase() === string;
}
// console.log(isInAllCapitals(inputString))







// b

function hasDigits(string){
    for (var i = 0; i < string.length; i++) {
        if (!isNaN(parseInt(string[i]))) {
            return true;
        }
    }
    return false;
  }
//   console.log(hasDigits('5AAA'));


  // c

  function isHexadecimal(string){
     if (string.charAt(0)==="#"&&string.length===7){
         return "it is valid color";
     }

     else return " it is not valid color"
  }

//   console.log(isHexadecimal("ff22557"));
  

  // d

  function isNumberOfInterval(number,start,end){
    
    if(number>=start&&number<=end){
        return true;
    }
    else return false

  }


//   console.log(isNumberOfInterval(2000,1900,2018));



  //e 


  function Validator(string,string,string,number,start,end){
    this.stringValidator=isInAllCapitals(string);
    this.passwordValidator=hasDigits(string);
    this.colorValidator=isHexadecimal(string);
    this.yearValidator=isNumberOfInterval(number,start,end)


   

  }



  var nesto= new Validator("Tanja","12cao","#5555s",1856,1700,2050);

  console.log(nesto);


