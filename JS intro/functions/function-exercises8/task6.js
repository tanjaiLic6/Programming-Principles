// 6. Write a function that checks if a given string is valid password. The password is valid if it
// is at least 6 characters long and contains at least one digit. The function should receive
// two callbacks named successCallback and errorCallback that should be called in case
// password is correct or invalid.
// Input: JSGuru
// Output: Your password is invalid!



function passwordCheck(password,correct,invalid){
    for(var i=0; i<password.length; i++){
        if (password.length>=6&& typeof(parseInt(password[i]))==="number"){
            return successCallback();
        }
        
           
        }
        return errorCallback();
    }
    


function successCallback(){
    return "Your password is correct!"
}

function errorCallback(){
    return "Your password is invalid!"
}


console.log(passwordCheck("T5njakk",successCallback,errorCallback));
