function Person (name,surname){
    this.name=name;
    this.surname=surname;
}
// employee
function Employee(name,surname,job,sallary){
    Person.call(this,name,surname);
    this.job=job;
    this.sallary=sallary;
}

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor=Employee;

Employee.prototype.getData= function(){
    return this.name+" "+ this.surname+ " " + this.sallary;
  }
Employee.prototype.getSallary= function(){
    return  this.sallary;
  }

 Employee.prototype.increseSallary= function(){
   this.sallary= this.sallary +    this.sallary*0.1;
  } 





// developer
function Developer(name,surname,job,sallary,specialization){
    Employee.call(this,name,surname,job,sallary);
    this.specialization=specialization;
}

Developer.prototype=Object.create(Employee.prototype);
Developer.prototype.constructor=Developer;

Developer.prototype.getspecialization= function(){
  return (this.specialization);
}

//manager
function Manager(name,surname,job,sallary,department){
    Employee.call(this,name,surname,job,sallary);
    this.department=department;
}
Manager.prototype=Object.create(Employee.prototype);
Manager.prototype.constructor=Manager;

Manager.prototype.getDepartment= function(){
    return (this.department);
  }
 Manager.prototype.changeDep=function(newDep){
     this.department=newDep;
 } 

var dev1= new Developer("Marina","P","programer",100,'frontEnd');
console.log(dev1.getspecialization());

var employee1=new Employee("tanja","ilic","programer",100);

employee1.increseSallary();

console.log(employee1.getSallary());
