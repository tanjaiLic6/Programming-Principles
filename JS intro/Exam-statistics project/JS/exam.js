function Exam(student,subject,grade){
    this.student=student;
    this.subject=subject;
    this.grade=grade;
}

Exam.prototype.getExamInfo=function(){
    return this.subject.getSubjectName()+ "-" + this.student.getStudentData();
}

Exam.prototype.hasPassed=function(){
    return (this.grade>5);
}

