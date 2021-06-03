// 1. Write a program to insert a string within a string at a particular position (default is 1,
//     beginning of a string).
//     ";My random string";, "JS "; -&gt; ";JS My random string";
//     ";My random string";, "JS ";, 10 -&gt; ";My random JS string";


function insertString(string1,string2,position){
    var stringNew="";
    var space=" ";
    position=position||0;
    // if (position===undefined){
    //     position=0;
    // }
         
     for (var i=0; i<string1.length;  i++){
            if (i===position){
               stringNew+=space+string2; 
            }
               
             {stringNew+=string1[i];}
        
        }
   
       return stringNew; 
    
}

console.log(insertString("My random string","JS ",1));