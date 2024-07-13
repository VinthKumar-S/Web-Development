// Displaying an object's properties on the console

var movie1;

movie1 = {
  title: "Inside Out",
  actors: "Amy Poehler, Bill Hader",
  directors: "Pete Doctor, Ronaldo Del Carmen"
};

console.log("Movie information for " + movie1.title);
console.log("------------------------------");
console.log("Actors: " + movie1.actors);
console.log("Directors: " + movie1.directors);
console.log("------------------------------");

movie2 = {
  title: "The Matrix",
  actors: "Bill Hader",
  directors: "The Wachowskis"
  ,year:1999
};

console.log(movie2)
console.log(movie1)

const blogPost ={
  title:"Understanding JavaScript Closures",
  author:"Jane Doe",
  content:"JavaScript closures are a fundamental concept that allows functions to access variables from an outer scope, even after the outer function has closed."
}

function displayBlogPost(blogPost){
  console.log(blogPost.title);
  console.log(blogPost.author);
  console.log(blogPost.content);
}

displayBlogPost(blogPost);

/* Further Adventures
 *
 * 1) Add a second movie and display the same info for it.
 *
 * 2) Create an object to represent a blog post.
 *
 * 3) Write code to display info about the blog post.
 *
 */