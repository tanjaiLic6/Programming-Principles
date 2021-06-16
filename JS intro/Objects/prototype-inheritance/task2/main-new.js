class WebApp{
    constructor(name,url,technologies,licence,stars){
        this.name=name;
        this.url=url;
        this.technologies=technologies.split(",");
        this.licence=licence;
        this.stars=stars;
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

    isCC(){
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


class MobileApp{
    constructor(name,platforms,licence,stars){
        this.name=name;
        this.platforms=platforms.split(",");
        this.licence=licence;
        this.stars=stars;
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
    isCC(){
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


var webApp1= new WebApp('Mondo','https://mondo.rs/','React,PHP','CC',1);
var mobileApp= new MobileApp('Donesi','Android,IOS','KK',2);
webApp1.like();
mobileApp.like();

console.log(webApp1.showStars());
console.log(mobileApp.forAndroid());
console.log(mobileApp.isCC());
