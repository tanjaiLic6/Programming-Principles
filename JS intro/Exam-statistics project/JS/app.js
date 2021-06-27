var numberOfPassedStudents = document.querySelector('.numPassedStudents');
var numberOfFailedStudents = document.querySelector('.numFailedStudents');
var percentPassed = document.querySelector('.percentPassed');
var percentFailed = document.querySelector('.percentFailed');
var totalStudents=document.querySelector('.total');
// SECOND PART
var subjectName = document.querySelector('#subjects');
var studentData = document.querySelector('#nameSurname');
var grade = document.querySelector('#grade');
var buttonAdd = document.querySelector('#btnGrade');
var errorMsg=document.querySelector('#errorMsg');
// THIRD PART
var passedStudentsList = document.querySelector('.passedStudents');
var failedStudentsList = document.querySelector('.failedStudents');

var college= new College();

// events

var addStudent= function(){
    var data=collectData();
    var isvalid=validateData(data,college);
    updatingStudentList(college);
    updateStatistics(college);
}





buttonAdd.addEventListener('click', addStudent);
