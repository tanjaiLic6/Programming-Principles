function collectData(){
  var choosenSubject=subjectName.value;
  var inputStudent=studentData.value;
  var choosenGrade=grade.value;
 
  return [choosenSubject,inputStudent,choosenGrade];
  
}


function validateData(data,college){
    
    var listOfNameAndSurname=data[1].split(' ');
    var name=listOfNameAndSurname[0];
    var surname=listOfNameAndSurname[1];
    var choosenSubject=data[0];
    var choosenGrade=data[2];

    
    if(choosenSubject==='-'){
      errorMsg.textContent='Please choose one subject!';
      return false  
    } 
    
     if(studentData.value===''){
      errorMsg.textContent='Please enter students name and surname';
     return false 
    }

     if( listOfNameAndSurname[1]===undefined){
        errorMsg.textContent='Please enter both students  name and surname';
        return false 
    }

     if(choosenGrade==='-'){
      errorMsg.textContent='Please choose one grade!';
      return false 
    } 

    else {
        var student= new Student(name,surname);
        var subject= new Subject(choosenSubject)
        var exam=new Exam(student,subject,choosenGrade);
        college.listOfExams.push(exam);
        errorMsg.textContent='';
        return true
    }



  

}

function updatingStudentList(college){
//   college.listOfExams.forEach(function(el){

  var element=college.listOfExams[college.listOfExams.length-1];

     if( element.hasPassed()){
         var li=document.createElement('li');
         var span1=document.createElement('span');
         var span2=document.createElement('span');
         span1.textContent=element.getExamInfo();
         span2.textContent=element.grade;

         li.appendChild(span1);
         li.appendChild(span2);
         passedStudentsList.appendChild(li);

     }

     else {
        var li=document.createElement('li');
        var span1=document.createElement('span');
        var span2=document.createElement('span');
        span1.textContent=element.getExamInfo();
        span2.textContent=element.grade;

        li.appendChild(span1);
        li.appendChild(span2);
        failedStudentsList.appendChild(li);
     }

     subjectName.value='-';
     studentData.value='';
     grade.value='-';
  }





function updateStatistics(college){
var passed=0;
var failed=0;
var total=0;

college.listOfExams.forEach(function(el){
  if(el.hasPassed()){
    passed+=1;
    numberOfPassedStudents.textContent=passed;
  
  }
   else {
       failed+=1;
       numberOfFailedStudents.textContent=failed;
      
   }
})
 

total=passed+failed;
totalStudents.textContent=total;

if(passed===0){
  percentPassed.textContent='';
}
else{
  percentPassed.textContent=Math.round((passed/total)*100)+'%';
}

if(failed===0){
  percentFailed.textContent=''
}

else{
  percentFailed.textContent=Math.round((failed/total)*100)+"%";
}




}
