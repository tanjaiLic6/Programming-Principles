var festival1=new Festival();


    var title=document.querySelector('#Title');
    var length=document.querySelector('#Length');
    var genre=document.querySelector('#genre-option');
    var addMovieButton=document.querySelector('#btn-crateMovie');
    var listOfMovies=document.querySelector('#listOfMovies');
    var listOfPrograms=document.querySelector('#listOfPrograms');
    var ErrorMsgMovie=document.querySelector('#ErrorMsgMovie');
    var dateInput=document.querySelector('#dateInput');
    var btnCreateProgram=document.querySelector('#btn-createProgram');
    var movieSelect=document.querySelector('#movie-select');
    var programSelect=document.querySelector('#program-select');
    var btnAddMovieToProgram=document.querySelector('#btn-addMovieToProgram');
    var errorDateMsg=document.querySelector('#errorDate');

   // listeners


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
        // push to festival list
        festival1.listOfMovies.push(movie)
      
        var li=document.createElement('li');
        li.innerText= movie.movieInfo();
    
        listOfMovies.appendChild(li);

        var option=document.createElement('option');

        option.innerText=movie.title;
        // adding index numbers to value
        for(var i=0; i<festival1.listOfMovies.length;i++){
            option.value=i;
        }
        movieSelect.appendChild(option);


        title.value='';
        length.value='';
        genre.value='-';
        ErrorMsgMovie.innerText='';
        }
        
    }


    function createProgram(){
         
        var date=dateInput.value;
        var d=new Date(date);
        var today=new Date();

        if(d>today){ 

        var program=new Program(date);
        // push to festival list
        festival1.listOfPrograms.push(program);

        var li=document.createElement('li');
        li.innerText= program.programInfo();
        listOfPrograms.appendChild(li);

        var option=document.createElement('option');
        option.innerText=program.programInfo();
         // adding index numbers to value
        for(var i=0; i<festival1.listOfPrograms.length;i++){
            option.value=i;
        }
        programSelect.appendChild(option);

        dateInput.value='';
        errorDateMsg.innerText='';
                                }

        else {
          errorDateMsg.innerText="Please select valid date!"
        }
 
    }


    function addMovieToProgram(){
    var choosenMovie=movieSelect.value;
    var choosenProgram=programSelect.value;
    

    festival1.listOfPrograms[choosenProgram].pushMovie(festival1.listOfMovies[choosenMovie]);// adding movies to program list
    listOfPrograms.children[choosenProgram].innerText=festival1.listOfPrograms[choosenProgram].programInfo();//changing info for program in ul
    programSelect.options[programSelect.options.selectedIndex].innerText=festival1.listOfPrograms[choosenProgram].programInfo();//changing program info in options
    programSelect.options.selectedIndex=0;
    movieSelect.options.selectedIndex=0;


    }

    

    
    





