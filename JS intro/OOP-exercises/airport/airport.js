'use strict';

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
    var self=this;
    var lis=[];
     var niz=this.listOfPassengers.forEach(function(el){

          return lis[lis.length]=el.seat.number;

      })
    if (this.listOfPassengers.length<4){
   if(this.listOfPassengers.length>=1){ 
       if(lis.includes(passenger.seat.number)){
            console.log("The seat of "+passenger.person.name+" "+passenger.person.surname +" is already been taken! We will provide you another seat number")
            passenger.seat.number=Math.floor((Math.random() * (100 - 10 + 1) + 10));
            self.listOfPassengers.push(passenger);
       }
       else self.listOfPassengers.push(passenger);
  
}  else self.listOfPassengers.push(passenger);

}
else console.log("The maximum number of passangers is reached.")}
   this.getData=function(){
       var res="";
     var li= this.listOfPassengers.forEach(function(element,index){
         return res+="\t"+(index+1)+", "+element.seat.category+", "+element.person.name+" "+ element.person.surname+"\n";

      })
       return this.date +","+this.relation+"\n"+ res;
           
       
   }

   this.getData2=function(){
       var res="";
       var rel=this.relation.split("-");
       var firstword=getingLetters(rel[0]).toLocaleUpperCase();
       var secodnword=getingLetters(rel[1]).toLocaleUpperCase();
      return  res= this.date+" "+ firstword+"-"+secodnword;


   }
}

function getingLetters(word){
    var res="";
    var vowels=["a","e","i","o","u"];
    for (var i=0; i<word.length; i++){
        if(!vowels.includes(word[i])){
            res+=word[i];
            break;
        }
    }
    for (var i=word.length-1; i>0; i--){
        if(!vowels.includes(word[i])){
            res+=word[i];
            break;
        }
    }
    return res;

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


var fligth1=createFlight("Belgrade-Paris","Oct 25 2017");
var fligth2=createFlight("Barcelona-Belgrade","Nov 11 2017");

var passanger1= createPassenger("John","Snow",1,"b");
var passanger2= createPassenger("Cersei","Lannister",1,"b");
var passanger3= createPassenger("Daenerys","Targaryen",14,);
var passanger4= createPassenger("Tyrion","Lannister");
var passanger5= createPassenger("Tanja","Ilic",25,"e");

fligth1.addPassenger(passanger1);
fligth1.addPassenger(passanger2);
fligth1.addPassenger(passanger3);
fligth1.addPassenger(passanger4);
fligth1.addPassenger(passanger5);
airport.addFlight(fligth1);
airport.addFlight(fligth2);
console.log(fligth1);
console.log(fligth1.listOfPassengers.length)
// console.log(fligth1.getData2());
// console.log(airport.getData());

    }
)();
