let myLibrary = [];
let cardContainer = document.getElementById("cardContainer");
let button = document.getElementById("but");

let bookForm = document.getElementById("forms");
bookForm.addEventListener("keypress", function(event){
      if (event.key === "Enter") {
        event.preventDefault();
      }
});

bookForm.addEventListener("submit", function(event){
    event.preventDefault();
    addBook();
});

class Book {
    constructor(title=0, author=0, pages=0, element, readStatus='no'){
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
bookForm.addEventListener('submit', addBook());

function addBook() {
    /*bookForm.onsubmit = function(){*/
        let card = document.createElement('div');
        card.classList.add("card");
        let book = new Book(bookTitle.value, authName.value, numPages.value, card);
        myLibrary.push(book); 
        let i = myLibrary.length - 1;     
        myLibrary[i].element.style.backgroundColor = "#3882f6"; 
        myLibrary[i].element.style.height = "350px";
        myLibrary[i].element.style.width = "250px";   
        myLibrary[i].element.style.margin = "50px";
        cardContainer.appendChild(myLibrary[i].element);  
}

//Associate each DOM element with index
//When removing book we can access the index attribute and pop it from the array
//Then call function and re-draw the book cards on the screen by looping through the array