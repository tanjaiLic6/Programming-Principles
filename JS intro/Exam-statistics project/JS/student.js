
function Student(name,surname){
 this.name=name;
 this.surname=surname;
}

Student.prototype.getStudentData=function(){
     
    // var nameFirstLetter=this.name[0].toUpperCase();
    // var surnameFirstLetter=this.surname[0].toUpperCase();
    var name=this.name.charAt(0).toUpperCase() + this.name.slice(1).toLowerCase();
    var surname=this.surname.charAt(0).toUpperCase() + this.surname.slice(1).toLowerCase();
 

    return name+' ' +surname;
    
   }

  

  