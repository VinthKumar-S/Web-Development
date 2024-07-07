// Using variables to represent a book

var bookTitle;
var bookAuthor;

bookTitle = "The Hobbit";
bookAuthor = "J. R. R. Tolkien";

console.log(bookTitle + " by " + bookAuthor);

// Create an array of book objects
var books = [
    { title: "The Hobbit", author: "J. R. R. Tolkien" },
    { title: "1984", author: "George Orwell" },
    { title: "To Kill a Mockingbird", author: "Harper Lee" }
];

// Function to log book details
function logBookDetails(book) {
    console.log(book.title + " by " + book.author);
}

// Log details of each book
for (var i = 0; i < books.length; i++) {
    logBookDetails(books[i]);
}

// Adding a new book
books.push({ title: "Pride and Prejudice", author: "Jane Austen" });

// Log details of the new book
logBookDetails(books[books.length - 1]);



// Adding more books
books.push(
    { title: "Moby-Dick", author: "Herman Melville" },
    { title: "War and Peace", author: "Leo Tolstoy" },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
    { title: "Crime and Punishment", author: "Fyodor Dostoevsky" },
    { title: "The Catcher in the Rye", author: "J.D. Salinger" },
    { title: "Brave New World", author: "Aldous Huxley" },
    { title: "The Lord of the Rings", author: "J. R. R. Tolkien" }
);

// Log details of all books
for (var i = 0; i < books.length; i++) {
    logBookDetails(books[i]);
}


// Extending to more books is straightforward by adding more objects to the array


/* Further Adventures
 *
 * 1) Declare variables for a second book
 *    and assign them values.
 *
 * 2) Add code to log its details to the console.
 *
 * 3) Repeat steps 1 and 2 for a third book.
 *
 * 4) Consider the code needed for 10 books.
 *    For 100 books.
 *
 */