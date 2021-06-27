
class Web{
    constructor(name,licence,stars){
        this.name=name;
        this.licence=licence;
        this.stars=stars;
    }


    isCClicence(){
        if(this.licence==="CC"){
            return true;
        }
        else return false;
    }

     like(){
        this.stars+=1;
    }


    showStars(){
        return 'The number of stars is: '+ this.stars;
        }

}






class WebApp extends Web{
    constructor(name,url,technologies,licence,stars){
        super(name,licence,stars)
        this.url=url;
        this.technologies=technologies.split(",");
    }

    getData(){
        return (this.name+", "+this.technologies+", "+this.licence+", "+ this.stars);
    }

    reactBased(){
        if(this.technologies.includes('React')){
            return true;
        }
        else return false;
    }



}


class MobileApp extends Web{
    constructor(name,platforms,licence,stars){
        super(name,licence,stars)
        this.platforms=platforms.split(",");
    }

    getData(){
        return (this.name+", "+this.platform+", "+this.licence+", "+ this.stars);
    }

    forAndroid(){
        if(this.platforms.includes('Android')){
            return true;
        }
        else return false;
    }
   
   
}

var web=new Web('facebook','CC',4);
var webApp1= new WebApp('Mondo','https://mondo.rs/','React,PHP','CC',1);
var mobileApp= new MobileApp('Donesi','Android,IOS','KK',2);
webApp1.like();
mobileApp.like();

console.log(webApp1.showStars());
console.log(mobileApp.forAndroid());
