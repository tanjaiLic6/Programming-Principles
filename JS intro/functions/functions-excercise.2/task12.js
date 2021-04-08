// 12. Write a function to calculate how many years there are left until retirement based on the
// year of birth. Retirement for men is at age of 65 and for women at age of 60. If someone is
// already retired, a proper message should be displayed.


function retirement(yearOfBirth,gender){
    var yearsLeft=0;
    var currentYears=2021-yearOfBirth;
    if (gender==="women"){
        if (currentYears<60){
            yearsLeft="There is " + (60-currentYears) + " left until retirement";
        }
        else{
            yearsLeft="Person is retired";
        }
    }

    else if  ( gender==="men"){
        if (currentYears<65){
            yearsLeft="There is " + (65-currentYears) + " left until retirement";
        }
        else{
            yearsLeft="Person is retired";
        }
    }

    return yearsLeft;

    
}

console.log(retirement(1950,"men"));