// 3. Write a function that creates an object that represents a project. Each project is
// described by: description, programming language, git repository, boolean status that
// says if the project is in development or not. Add a method that prints out the project&#39;s
// repository, a method that checks if the project is written in JavaScript as well as a
// method that checks if the project is in development or not.

function createProject(projectName,descript,programingLang,gitRepo,IsDevelopmentBool){
    var project={
        projectName:projectName,
        Description:descript,
        ProgramingLanguage:programingLang,
        GitRepository:gitRepo,
        Development:IsDevelopmentBool,
        PrintProjectsRepo:function(){ return(project.GitRepository);},
        IsJavaScript:function(){
            var res="";
            if (project.ProgramingLanguage ==="JavaScript"){
                 return res="true";
            }
            else  return res="false";
        },
        IsDevelopment:function(){
            if(project.Development==="Development"){
                return console.log(true);
            }
            else return console.log(false);
        }
    
}
    return project;
}

var newP=createProject("MySite","Create new site","JavaScript","Demo","Development");
console.log(newP);

console.log(newP.PrintProjectsRepo());
