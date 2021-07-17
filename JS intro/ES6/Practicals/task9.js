// 9.
// a. Create an array of persons. A person should be an object with name and age properties.
// Experiment with enhanced object literals.
// b. Write a function that prints out the names of persons older than 25.
// c. Write a function that check if there is a person older than 40.
// d. Write a function that checks if all persons are older than 20.

let personsArr=[{name:'Tanja',age:30},{name:'Nedja',age:30},{name:'Lena',age:1}];

let personsOlderthan25= (arr)=>{
    arr.forEach(el => {
        if(el.age>25){
            console.log(el.name)
        }
    });
}

let pers=personsOlderthan25(personsArr);


let isOlderThan40=(arr)=>{
 return   arr.some((el)=>  el.age>40)
}

let old40=isOlderThan40(personsArr)
console.log(`Is there person older than 40 :${old40}`)

let isAllOlderThan20= (arr)=>{
  return  arr.every((el)=>el.age>20)
}

let older20=isAllOlderThan20(personsArr);
console.log(`All persons older than 20:${older20}`);


