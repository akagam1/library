let myLibrary = [];


class Book {
    constructor(title, author, pages, readStatus){
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.status = readStatus;
    }
}

function addBook(title, author, pages, readStatus) {
    const book = new Book(title, author, pages, readStatus);
    myLibrary.push(book);
}

let bookForm = document.getElementById("forms");
    bookForm.addEventListener("keypress", function(event){
      if (event.key === "Enter") {
        event.preventDefault();
      }
});

//Associate each DOM element with index
//When removing book we can access the index attribute and pop it from the array
//Then call function and re-draw the book cards on the screen by looping through the array