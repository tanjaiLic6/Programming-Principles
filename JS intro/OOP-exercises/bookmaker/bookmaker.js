'use strict';
(
    function(){

        var CONTINTES = Object.freeze({
            ASIA: 'AU'

        });
 
 function Country(name,odds,continent){
   this.name=name;
   this.odds=odds;
   this.continent=continent;

   
 }

 function Person(name,surname,dateOfBirth){
     this.name=name;
     this.surname=surname;
     this.dateOfBirth=new Date(dateOfBirth);
     this.personInfo=function(){
         var date=this.dateOfBirth.getDate();
         var month=this.dateOfBirth.getMonth()+1;
         var year=this.dateOfBirth.getFullYear();
         return this.name+" "+ this.surname+", "+ date+"."+month+"."+year;
     }
 }

 function Player(person,betAmount,country){
     this.person=person;
     this.betAmount=betAmount;
     this.country=country.name;
     this.bettingInfo=function(){
        var countryShort=this.country.slice(0,2).toUpperCase();
        var amount=country.odds*this.betAmount;
        var playersNameandSurname=person.name + " "+ person.surname;
        var playerYears=new Date().getFullYear() -  person.dateOfBirth.getFullYear();
         return countryShort+","+ amount+" eur"+", "+playersNameandSurname+", "+ playerYears+ "years"
     }
 }


 function Address(country,city,postalCode,street,streetNum){
  this.country=country.name;
  this.city=city;
  this.postalCode=postalCode;
  this.street=street;
  this.streetNum=streetNum;
  this.adressInfo=function(){
      var countryShort=this.country.slice(0,2).toUpperCase();
      return this.street+" "+ this.streetNum+","+this.postalCode+" "+ this.city+ ", "+ countryShort
  }
 }

 function BettingPlace(address){
   this.address=address;
   this.listOfPlayers=[];
   this.addPlayer=function(player){
       this.listOfPlayers.push(player);}
   this.bettingPlaceInfo=function(){

   }
 }

 function BettingHouse(competition,numbOfPlayers){
     this.competition=competition;
     this.listOfBettingPlaces=[];
     this.numbOfPlayers=numbOfPlayers;
 }


 var country1=new Country("Srbija",2,CONTINTES.ASIA);
 var person1=new Person("Tanja","Ilic","11.6.1991");
 var person2=new Person("Marina","TP","4.3.1984");

 var player1=new Player(person1,100,country1);
 var player2=new Player(person2,200,country1);
 
 var address1=new Address(country1,"Beograd",11000,"Knez M.",5);
 var betplace1=new BettingPlace(address1);
 var bettingHouse1=new BettingHouse("Football World Cup")
 betplace1.addPlayer(player1);
 betplace1.addPlayer(player2);

 console.log(country1);
//  console.log(person1.personInfo());
//  console.log(player1.bettingInfo());

//  console.log(address1.adressInfo());
//  console.log(betplace1);
//  console.log(betplace1.listOfPlayers);
//  console.log(bettingHouse1);

    }

    
)();