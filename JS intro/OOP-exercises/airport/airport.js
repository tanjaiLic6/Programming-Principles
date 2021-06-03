(
    function(){



function Person(name,surname){
this.name=name;
this.surname=surname;
this.getData=function(){
    return this.name+" "+this.surname;
}
}

function Seat(number,category){
    this.number=number||Math.floor((Math.random() * (100 - 10 + 1) + 10));
    this.category=(category||"e").toUpperCase();
    this.getData=function(){
        return this.number+","+this.category;
    }

}

function Passenger(person,seat ){

    this.person=person;
    this.seat=seat;
    this.getData=function(person,seat){
        return this.seat.getData()+","+this.person.getData();
    }
    

}

function Flight(relation,date){
   this.relation=relation;
   this.date=new Date(date).toLocaleDateString();
   this.listOfPassengers=[];
   this.addPassenger=function(passenger){
       this.listOfPassengers.push(passenger);
   }
   this.getData=function(){
       var res="";
     var li= this.listOfPassengers.forEach(function(element,index){
         return res+="\t"+(index+1)+", "+element.seat.category+", "+element.person.name+" "+ element.person.surname+"\n";

      })
       return this.date +","+this.relation+"\n"+ res;
           
       
   }
}

function Airport(){
this.name="Nikola Tesla";
this.listOfFlights=[];
this.addFlight=function(flight){
    this.listOfFlights.push(flight);
}
  this.getData=function(){
      var res="";
      var num=0;
      this.listOfFlights.forEach(function(element){
         return res+= element.getData();
      })
      this.listOfFlights.forEach(function(element){
         return num+=element.listOfPassengers.length;
      })
      var lis=this.listOfFlights;
      console.log(lis);
    return "Airport : "+this.name+", "+ "total passengers: "+num+"\n"+ res;
    
  }
}


function createFlight(relation,date){

    return new Flight(relation,date);

}

function createPassenger(name,surname,seatNumber,category){
    var person= new Person(name,surname);
    var seat = new Seat(seatNumber,category);
    return new Passenger(person,seat);
  
}



var airport=new Airport();


var fligth1=createFlight("Belgrade-New York","Oct 25 2017");
var fligth2=createFlight("Barcelona-Belgrade","Nov 11 2017");

var passanger1= createPassenger("John","Snow",1,"b");
var passanger2= createPassenger("Cersei","Lannister",2,"b");
var passanger3= createPassenger("Daenerys","Targaryen",14,);
var passanger4= createPassenger("Tyrion","Lannister");

fligth1.addPassenger(passanger1);
fligth1.addPassenger(passanger2);
fligth2.addPassenger(passanger3);
fligth2.addPassenger(passanger4);

airport.addFlight(fligth1);
airport.addFlight(fligth2);
console.log(fligth1);
// console.log(fligth1.getData());
console.log(airport.getData());

    }
)();