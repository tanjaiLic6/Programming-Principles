// 5. Write a function that filters all the strings from the given array that contain substring JS or js.
// Input: [''compiler'', ''transpiler'', ''babel.js'', ''JS standard'', ''linter'']
// Output: [''babel.js, ''JS standard'']

let findString= (string,...arr)=>{
 
    return arr
   
    
    .filter((item)=>{
        return item.includes(string.toLowerCase())||item.includes(string.toUpperCase())
    })
}


let filteredArr=findString('js','compiler', 'transpiler', 'babel.js', 'JS standard', 'linter');
console.log(filteredArr);