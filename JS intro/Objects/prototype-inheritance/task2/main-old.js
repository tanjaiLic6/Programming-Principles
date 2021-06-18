function Web(name,licence,stars){
    this.name=name;
    this.licence=licence;
    this.stars=stars;
}
Web.prototype.isCCLicence=function(){
    if(this.licence==="CC"){
        return true;
    }
    else return false;
}

Web.prototype.like=function(){
    this.stars+=1;
}

Web.prototype.showStars=function(){
    return 'The number of stars is: '+ this.stars;
}

// Web.prototype.getData()=fun




function WebApp (name,url,technologies,licence,stars){
    Web.call(this,name,licence,stars);
    this.url=url;
    this.technologies=technologies.split(",");
}
WebApp.prototype=Object.create(Web.prototype);
WebApp.prototype.constructor=WebApp;

WebApp.prototype.getData=function(){
    return (this.name+", "+this.technologies+", "+this.licence+", "+ this.stars)
}

WebApp.prototype.reactBased=function(){
    if(this.technologies.includes('React')){
        return true;
    }
    else return false;

    
}








function MobileApp(name,platforms,licence,stars){
    Web.call(this,name,licence,stars);
    this.platforms=platforms;
}

MobileApp.prototype=Object.create(Web.prototype);
MobileApp.prototype.constructor=WebApp;

MobileApp.prototype.getData=function(){
    return (this.name+", "+this.platforms+", "+this.licence+", "+ this.stars);
}

MobileApp.prototype.forAndroid=function(){
    if(this.technologies.includes('Android')){
        return true;
    }
    else return false;
}


var web1=new Web('Mondo','CC','2');
var webApp1=new WebApp('Blic','https://:blic.rs/','php,React','CC',4);
var mobApp1= new MobileApp('facebook','Android,IOS','CC',2);

// console.log(web1);
webApp1.like()
console.log(webApp1.showStars());
// console.log(mobApp1);


