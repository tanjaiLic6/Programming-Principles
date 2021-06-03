// 2. Write a function that in a given string replaces all the appearances of the string ‘JS’ with
// ‘**’.
// Input: “Programming in JS is super interesting!”
// Output: “Programming in ** is super interesting!”

function replace(sentance,string,starscalc){
    var res="";
    var counter=0;
    var holder
    for (var i=0; i<sentance.length;i++){
        for (var j=0; j<string.length;j++){
            if(sentance[i]===string[j]){ 
             if (sentance[i+1]===string[j+1]){
                res+=starscalc(string);
                i=i+string.length-1;
               break;
             }
                break;
            }
            
            else {  res+=sentance[i];break;}
        
    }

   
    }
return res;
}

function stars(word){
    var stringLength=word.length;
    var numOfStars="";
    for (var i=0;i<stringLength;i++){
        numOfStars+="*";
    }
    return numOfStars;
}

console.log(replace("Programming in Javascript is super  interesting!","Javascript",stars));
