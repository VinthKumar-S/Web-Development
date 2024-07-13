// Using the same function with multiple objects

var movie1;
var movie2;
var movie3;
var movie;
var showMovieInfo;

movie1 = {
    title: "Inside Out",
    actors: "Amy Poehler, Bill Hader",
    directors: "Pete Doctor, Ronaldo Del Carmen"
};

movie2 = {
    title: "Spectre",
    actors: "Daniel Craig, Christoph Waltz",
    directors: "Sam Mendes"
};

movie3 = {
    title: "Star Wars: Episode VII - The Force Awakens",
    actors: "Harrison Ford, Mark Hamill, Carrie Fisher",
    directors: "J.J.Abrams"
};

showMovieInfo = function () {
    console.log("Movie information for " + movie.title);
    console.log("------------------------------");
    console.log("Actors: " + movie.actors);
    console.log("Directors: " + movie.directors);
    console.log("------------------------------");
};

movie = movie1;
showMovieInfo();

movie = movie2;
showMovieInfo();

movie = movie3;
showMovieInfo();


var question1 = {
    question: "1. Which is object oriended Language.",
    option1:"C",
    option2:"C++",
    option3:"RDBMS"
};

var question2 = {
    question: "2. Which is Procedural Language.",
    option1:"Java",
    option2:"C++",
    option3:"C"
};


var showQuiz = function(){
    console.log(exam.question);
    console.log("------------------------------");
    console.log("Option 1." + exam.option1);
    console.log("Option 2." + exam.option2);
    console.log("Option 3." + exam.option3);
    console.log("------------------------------");
}

var exam = question1;
showQuiz();

var exam = question2;
showQuiz();
/* Further Adventures
 *
 * 1) Create an object to represent
 *    a multiple choice quiz question.
 *
 * 2) Create two more quiz question objects.
 *
 * 3) Create a function to show
 *    the question and answer options.
 *
 * 4) Use the same variable assignment technique
 *    as above to display all three questions
 *    on the console.
 *
 */