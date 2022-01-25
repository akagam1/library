let myLibrary = [];
let cardContainer = document.getElementById("cardContainer");

let bookForm = document.getElementById("forms");
bookForm.addEventListener("keypress", function(event){
      if (event.key === "Enter") {
        event.preventDefault();
      }
});

class Book {
    constructor(title, author, pages, element, readStatus='no'){
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.status = readStatus;
        this.element = element
    }
}
let bookTitle = document.getElementById("title");
let authName = document.getElementById("authName");
let numPages = document.getElementById("numPages");

function addBook() {
    bookForm.onsubmit = function(){
        let card = document.createElement('div');
        card.classList.add("card")
        cardContainer.appendChild(card);
        let book = new Book(bookTitle.value, authName.value, numPages.value, card);
        myLibrary.push(book);
    }
}

function displayBook() {
    
}

//Associate each DOM element with index
//When removing book we can access the index attribute and pop it from the array
//Then call function and re-draw the book cards on the screen by looping through the array