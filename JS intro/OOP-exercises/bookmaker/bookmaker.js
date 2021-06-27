'use strict';
(
    function(){

        var CONTINTES = Object.freeze({
            ASIA: 'AS',
            EUROPE:'EU',
            AUSTRALIA:'AU',
            AFRICA:'AF',
            SOUTHAMERICA:'SA',
            NORTHAMERCIA:'NA'

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
         return countryShort+","+ amount+" eur"+", "+playersNameandSurname+", "+ playerYears+ " years"
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
       var sum=0;
     var sumOfAllBets=this.listOfPlayers.forEach(function(el){
        return sum+=el.betAmount;
     })
     return this.address.street+","+this.address.postalCode+" "+this.address.city+","+ "sum of all bets is:" +sum+" eur";
   }
 }

 function BettingHouse(competition){
     this.competition=competition;
     this.listOfBettingPlaces=[];
     this.addBettingPlaces=function(betplace){
         this.listOfBettingPlaces.push(betplace);
     }
     this.numbOfBetsPlayers=function(){
         var sumOfplayers=0;
         this.listOfBettingPlaces.forEach(function(el){
               return sumOfplayers+=el.listOfPlayers.length;
         })
         return sumOfplayers;
     }
    
     this.bettingInfo=function(){
           var res="";
           var count=0;
           var self=this;
           this.listOfBettingPlaces.forEach(function(el,index){
            res+=  "\t"+el.bettingPlaceInfo()+"\n";
            self.listOfBettingPlaces[index].listOfPlayers.forEach(function(el){
               return res+="\t" +"\t"+ el.bettingInfo()+"\n";
            })
            
            return res ;
            });
        this.listOfBettingPlaces.forEach(function(el,index){
            self.listOfBettingPlaces[index].listOfPlayers.forEach(function(el){
                if (el.country==="Serbia"){
                  count+=1;
                }
                return count;
            })
            return count;
        });

           return this.competition+", "+ this.listOfBettingPlaces.length+" betting places"+", "+ this.numbOfBetsPlayers()+" bets"+"\n"+res+"\n"+
           'There are ' + count + ' bets on Serbia';

           
       } 
 }




 function createPlayer(name,surname,dateOfBirth,betAmount,countryName,odds,continent){
   var person=new Person(name,surname,dateOfBirth);
   var country=new Country(countryName,odds,continent);
     return new Player(person,betAmount,country);
 }

 function createBettingPlace(address){
     return new BettingPlace(address);
 }

 var country1=new Country("Serbia",2,CONTINTES.EUROPE);

 var person1=new Person("Tanja","Ilic","11.6.1991");
 var person2=new Person("Marina","TP","4.3.1984");

 var player3=createPlayer("Lena","Ilic","12.21.1994",250,"Germany",15,CONTINTES.EUROPE);
 var player4=createPlayer("Sendi","Ilic","6.6.1990",600,"USA",50,CONTINTES.NORTHAMERCIA);
 var player1=new Player(person1,100,country1);
 var player2=new Player(person2,200,country1);
 
 var address1=new Address(country1,"Beograd",11000,"Knez M.",5);
 var address2=new Address(country1,"Novi Sad",21000,"Bul.Oslobodjenja",10);

 var betplace1=createBettingPlace(address1);
 var betplace2=createBettingPlace(address2);
 betplace1.addPlayer(player1);
 betplace1.addPlayer(player2);
 betplace2.addPlayer(player3);
 betplace2.addPlayer(player4);


 var bettingHouse1=new BettingHouse("Football World Cup")
 
bettingHouse1.addBettingPlaces(betplace1);
bettingHouse1.addBettingPlaces(betplace2);

 
 

//  console.log(country1);
//  console.log(person1.personInfo());
//  console.log(player1.bettingInfo());

//  console.log(address1.adressInfo());
//  console.log(betplace1.bettingPlaceInfo());
//  console.log(betplace1.listOfPlayers);
// console.log(bettingHouse1.listOfBettingPlaces);
 console.log(bettingHouse1.bettingInfo());

    }

    
)();