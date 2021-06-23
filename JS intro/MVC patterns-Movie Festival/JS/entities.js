function Festival(){
    this.listOfMovies=[];
    this.listOfPrograms=[];
}



function Movie(title,length,genre){
  this.title=title;
  this.length=parseInt(length);
  this.genre=genre;


}


Movie.prototype.movieInfo=function(){
  var firstLetter=this.genre.slice(0,1);
  var lastLetter=this.genre.slice(this.genre.length-1);
  return this.title+","+ this.length+", "+ (firstLetter+lastLetter).toUpperCase();
}


function Program(date){
  this.date=new Date(date);
  this.movies=[];
  
}

// Program.prototype.getDuration=function(){
//   this.movie.forEach(function(el){
//     var res;
//     return res += el.length;
// })}

Program.prototype.getFullDate=function(){
  var day=this.date.getDate();
  var month=this.date.getMonth()+1;
  var year=this.date.getFullYear();

  var date=day+'.'+month+'.'+year+'.';

  return date;
}

Program.prototype.movieDuration=function(){
  if(this.movies.length!=0){ 
  this.movie.forEach(function(el){
    var res;
     res += el.length;
     return this.movies.length+'movies ,'+'duration'+ res;
})}
else return "No movies yet!"
}

Program.prototype.programInfo = function(){
  
  return this.getFullDate()  + ", " + this.movieDuration();
}


Program.prototype.pushMovie=function(movie){
  this.movies.push(movie);
}

