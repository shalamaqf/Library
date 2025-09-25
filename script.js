// Create DOM Elements
const books_container = document.createElement ("div");

const form_container = document.createElement("div");
const form_book = document.createElement("form");
const form_title = document.createElement("h2");
const title_container = document.createElement("div");
const label_title = document.createElement("label");
const input_title = document.createElement("input");
const author_container = document.createElement("div");
const label_author = document.createElement("label");
const input_author = document.createElement("input");
const pages_container = document.createElement("div");
const label_pages = document.createElement("label");
const input_pages = document.createElement("input");
const submit_button = document.createElement("button");
const reset_button = document.createElement("button")


// Set Element's Attribute and Type
books_container.className = 'books-container';

form_container.className = 'form-container';

title_container.className = 'label title';
label_title.htmlFor = 'title';
input_title.id = 'title';
input_title.type = 'text';
input_title.required = true;

author_container.className = 'label author';
label_author.htmlFor = 'author';
input_author.id = 'author';
input_author.type = 'text';
input_author.required = true;

pages_container.className = 'label pages';
label_pages.htmlFor = 'pages';
input_pages.id = 'pages';
input_pages.type = 'text';
input_pages.required = true;

submit_button.type = "submit";
submit_button.className = 'submit-button';

reset_button.type = "reset";
reset_button.className = "reset-button";


// Append DOM Elements
form_container.appendChild(form_book);
form_book.appendChild(form_title);

form_book.appendChild(title_container);
title_container.appendChild(label_title);
title_container.appendChild(input_title);

form_book.appendChild(author_container);
author_container.appendChild(label_author);
author_container.appendChild(input_author);

form_book.appendChild(pages_container);
pages_container.appendChild(label_pages);
pages_container.appendChild(input_pages);

form_book.appendChild(submit_button);
form_book.appendChild(reset_button);


// Element's Text Content
form_title.textContent = "Book's Details";
label_title.textContent = "Title: ";
label_author.textContent = "Author: ";
label_pages.textContent = "Pages: ";
submit_button.textContent = "Submit";
reset_button.textContent = "Reset";


// Query Selector HTML's Elements
const addBook = document.querySelector('.button.add');
const viewBook = document.querySelector('.button.view-book');





//////////////////////////////////////////
///////////// FUNCTIONALITY //////////////
//////////////////////////////////////////

// Create an array to contain books
let myLibrary = [];

// Create an object constructor for a book
function Book (title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.id = crypto.randomUUID();
    this.isRead = false;
}


///////////////////////
// Add New Book Feature
///////////////////////

/*
    Add an event listener to 'Add New Book' button
    When user click it, form will appears in screen.
*/
addBook.addEventListener('click', () => {
    appendForm();
})

/* 
    Create a function that appends the form to the screen and 
    disabled 'Add New Book' button.
*/
function appendForm() {
    document.body.appendChild(form_container);
    addBook.disabled = true;
}

/* 
    Add an event listener to 'Submit' button,
    that when user click it, it will calls functions that handle user input,
    create a book object,
    and add it to the library array.
    'Add New Book' button will enable again and the form will disappear.
*/
form_book.addEventListener('submit', (e) => {
    e.preventDefault();
    handleUserInput();
    addBook.disabled = false;
    form_container.remove();
})

/* 
    Create a function that handle user input from the form,
    it will create new Book object and push it to the library array.
*/
function handleUserInput() {
    const titleInput = input_title.value;
    const authorInput = input_author.value;
    const pagesInput = input_pages.value;

    const newBook = new Book(titleInput, authorInput, pagesInput);

    myLibrary.push(newBook);
}



////////////////////
// Book Card Feature
////////////////////

/*
    Create a function that creates DOM elements for book card,
    set its type and attribute,
    it will sets element's text content,
    and append it to the book's container.
*/
function createBookCard(Book) {
    // Create DOM elements
    const book_card = document.createElement("div");
    const title = document.createElement ("h3");
    const author = document.createElement ("p");
    const pages = document.createElement ("p");
    let isRead = document.createElement("button");
    let removeBook = document.createElement("button");
    let viewDetail = document.createElement("button");

    // Set its type and attribute
    book_card.className = 'book-card';
    title.className = 'info title';
    author.className = 'info author';
    pages.className = 'info pages';
    isRead.className = 'button-info isRead';
    isRead.type = "button";
    removeBook.className = 'button-info remove';
    removeBook.type = "button";
    viewDetail.className = 'button-info view';
    viewDetail.type = "button";

    // Set its text content
    title.textContent = "Title: " + Book.title;
    author.textContent = "Author: " + Book.author;
    pages.textContent = "Pages: " + Book.pages;
    isRead.textContent = "Not Read Yet";
    removeBook.textContent = "Remove Book";
    viewDetail.textContent = "View Details";

    // Append it to the book card
    book_card.appendChild(title);
    book_card.appendChild(isRead);
    book_card.appendChild(viewDetail);
    book_card.appendChild(removeBook);

    // Append the book card to books container
    books_container.appendChild(book_card);
}
