class Person{
  constructor(name,surname){
      this.name=name
      this.surname=surname
  }
  


}

class Employee extends Person{
  constructor(name,surname,job,sallary){
      super(name,surname)
      this.job=job;
      this.sallary=sallary
  }

  getData(){
    return this.name+" "+ this.surname+ " " + this.sallary;
  }

  getSallary(){
    return  this.sallary;
  }

  increseSallary(){
    this.sallary= this.sallary +    this.sallary*0.1;
  }
}


class Developer extends Employee{
    constructor(name,surname,job,sallary,specialization){
        super(name,surname,job,sallary)
        this.specialization=specialization
    }

    getSpecializaton(){
        return this.specialization;
    }
}

class Manager extends Employee{
    constructor(name,surname,job,sallary,department){
        super(name,surname,job,sallary)
        this.department=department;
    }

    getDepartment(){
        return (this.department);
    }

    changeDepartment(newDep){
        this.department=newDep;
    }
}

var manager1=new Manager("tanja","ilic","programer",250,"sales");
console.log(manager1);
manager1.changeDepartment("control");
console.log(manager1.getDepartment());