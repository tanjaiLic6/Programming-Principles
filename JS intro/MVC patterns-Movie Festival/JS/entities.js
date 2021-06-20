function Festival(){
    var listOfMovies=[];
    var listOfPrograms=[];
}

var GENRE=Object.freeze({
   DRAMA:'DA',
   COMEDY:'CY',
   ACTION:'AN',
   THRILLER:'TR'

});

function Movie(){
  var title=document.querySelector('#Title').value;
  var length=parseInt(document.querySelector('#Length').value);


}

Movie.prototype.movieInfo=function(){
  return this.title+","+ this.length+","+GENRE()
}