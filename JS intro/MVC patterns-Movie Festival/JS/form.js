var festival1=new Festival();


    var title=document.querySelector('#Title');
    var length=document.querySelector('#Length');
    var genre=document.querySelector('#genre-option');
    var addMovieButton=document.querySelector('#btn-crateMovie');
    var listOfMovies=document.querySelector('#listOfMovies');
    var ErrorMsgMovie=document.querySelector('#ErrorMsgMovie');
    var dateInput=document.querySelector('#dateInput');
    var btnCreateProgram=document.querySelector('#btn-createProgram');
    var movieSelect=document.querySelector('#movie-select');
    var programSelect=document.querySelector('#program-select');
    var btnAddMovieToProgram=document.querySelector('#btn-addMovieToProgram');



    addMovieButton.addEventListener('click',addMovieToList);
    btnCreateProgram.addEventListener('click',createProgram);
    btnAddMovieToProgram.addEventListener('click',addMovieToProgram);


    function  addMovieToList(){
        var titleInput=title.value;
        var lengthInput=length.value;
        var genreInput=genre.value;
        if (titleInput===''){
           ErrorMsgMovie.innerText="Title name is required!"
        }
        else if (lengthInput===''){
            ErrorMsgMovie.innerText="Length  is required!";
        }
        
        else if (genreInput==='-'){
           ErrorMsgMovie.innerText="Genre is required!";
        } 
        else { 
        
        var movie=new Movie(titleInput,lengthInput,genreInput);
      
        var li=document.createElement('li');
        li.innerText= movie.movieInfo();
    
        listOfMovies.appendChild(li);

        var option=document.createElement('option');
        option.innerText=movie.title;
        movieSelect.appendChild(option);


        title.value='';
        length.value='';
        genre.value='-';
        ErrorMsgMovie.innerText='';
        }
        
    }


    function createProgram(){
        var date=dateInput.value;
        var program=new Program(date);
        var li=document.createElement('li');
        li.innerText= program.programInfo();
        listOfPrograms.appendChild(li);
        var option=document.createElement('option');
        option.innerText=program.programInfo();
        programSelect.appendChild(option);



        dateInput.value='';
    }

    
    





