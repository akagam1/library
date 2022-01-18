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

const bookForm = document.getElementById("forms");
//Associate each DOM element with index
//When removing book we can access the index attribute and pop it from the array
//Then call function and re-draw the book cards on the screen by looping through the array