// Create DOM Elements
const books_container = document.createElement ("div");
const dynamic_content = document.createElement("div");

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

dynamic_content.className = 'dynamic-content';

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


// Query Selector HTML's Elements
const main_content = document.querySelector('.main-content');

const addBook = document.querySelector('.button.add');
const viewBook = document.querySelector('.button.view-book');


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

main_content.appendChild(dynamic_content);


// Element's Text Content
form_title.textContent = "Book's Details";
label_title.textContent = "Title: ";
label_author.textContent = "Author: ";
label_pages.textContent = "Pages: ";
submit_button.textContent = "Submit";
reset_button.textContent = "Reset";



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
    if (dynamic_content.contains(form_container)){
        cancelForm();
    }
    else {
        closeFormView();
        appendForm();
    }
})

/* 
    Create a function that appends the form to the screen and 
    disabled 'Add New Book' button.
*/
function appendForm() {
    dynamic_content.appendChild(form_container);
    addBook.textContent = 'Cancel'
}


// Create a function that change the text content and logic to 'New Book' button
function cancelForm() {
    form_container.remove();
    form_book.reset();
    addBook.textContent = 'Add Book';
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
    cancelForm();
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
    createBookCard(newBook);
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
function createBookCard(book) {
    // Create DOM elements
    const book_card = document.createElement("div");
    const title = document.createElement ("h3");
    const author = document.createElement ("p");
    const pages = document.createElement ("p");
    let isReadButton = document.createElement("button");
    let removeBookButton = document.createElement("button");
    let viewDetailButton = document.createElement("button");

    // Set its type and attribute
    book_card.className = 'book-card';
    title.className = 'info title';
    author.className = 'info author';
    pages.className = 'info pages';
    isReadButton.className = 'button-info isRead';
    isReadButton.type = "button";
    removeBookButton.className = 'button-info remove';
    removeBookButton.type = "button";
    viewDetailButton.className = 'button-info view';
    viewDetailButton.type = "button";

    // Set its text content
    title.textContent = "Title: " + book.title;
    author.textContent = "Author: " + book.author;
    pages.textContent = "Pages: " + book.pages;
    updateReadButtonStatus(book, isReadButton);
    removeBookButton.textContent = "Remove Book";
    viewDetailButton.textContent = "View Details";


    // Add event listeners to the buttons
    isReadButton.addEventListener('click', () => {
        toggleReadStatus(book, isReadButton);
    })

    removeBookButton.addEventListener('click', () => {
        removeBook(myLibrary, book_card, book);
    })

    viewDetailButton.addEventListener('click', () => {
        viewDetail(book_card, viewDetailButton);
    })


    // Append it to the book card
    book_card.appendChild(title);
    book_card.appendChild(isReadButton);
    book_card.appendChild(viewDetailButton);
    book_card.appendChild(removeBookButton);

    // Attach author and pages DOM elements to the book card
    book_card.author = author;
    book_card.pages = pages;

    // Append the book card to books container
    books_container.appendChild(book_card);
}

// Create a function that updates the state of isRead button
function updateReadButtonStatus(book, isReadButton){
    isReadButton.textContent = book.isRead ? "Have Read" : "Not Read Yet";
}

// Create a function to toggle the read status
function toggleReadStatus(book, isReadButton) {
    book.isRead = !book.isRead;
    updateReadButtonStatus(book, isReadButton);
}

// Create a function that remove a book from the array and books container
function removeBook(myLibrary, book_card, book) {
    // Remove from array
    const bookID = book.id;
    
    const index = myLibrary.findIndex(item => item.id === bookID);

    if (index !== -1) {
        myLibrary.splice(index, 1);
    }

    // Remove from books container
    book_card.remove();
}

// Create a function that allows user to see the details of the book
function viewDetail(book_card, viewDetailButton) {
    if (book_card.contains(book_card.author)) {
        hideDetails(book_card, viewDetailButton);
    } else {
        appendBookDetail(book_card, viewDetailButton);
    }
}

// Create a function that appends the detail of the book to the book card
function appendBookDetail(book_card, viewDetailButton) {
    book_card.appendChild(book_card.author);
    book_card.appendChild(book_card.pages);

    viewDetailButton.textContent = 'Hide Details';
}

// Create a function that allows user to hide the details from the book card
function hideDetails(book_card, viewDetailButton){
    book_card.author.remove();
    book_card.pages.remove();

    viewDetailButton.textContent = 'View Details';
}



////////////////////////////////////
//////// VIEW BOOKS FEATURE ////////
////////////////////////////////////

/*
    Create an event listener for 'View Books' button 
    that will render books inside the library.
*/
viewBook.addEventListener('click', () => {
    if (dynamic_content.contains(books_container)){
        closeView();
    } else
    {
        closeFormView();
        renderLibraryView();
    }
})

/*
    Create a function that clear books container,
    then call a function to display books.
*/
function renderLibraryView() {
    // Clear childs of books container 
    books_container.innerHTML = '';

    displayBooks();   
}

/* 
    Create a function that looping thorugh the myLibrary,
    create book card for each book then append it to the books container,
    finally it will be appended to the DOM.
*/
function displayBooks() {
    myLibrary.forEach(book => {
        createBookCard(book);
    })

    // Apppend the books container to the DOM
    if (!dynamic_content.contains(books_container)){
        dynamic_content.appendChild(books_container);
        viewBook.textContent = 'Close View';
    }
}


// Create a function to close the view of the books
function closeView(){
    books_container.remove();
    viewBook.textContent = 'View Books'
}



/////////////////////////////////////////
//////// CLOSE FORM/VIEW FEATURE ////////
/////////////////////////////////////////

/* 
    Create a function that will close form/view
    if user click press both buttons in sequence.
*/
function closeFormView() {
    if(dynamic_content.contains(form_container)){
        cancelForm();
    } 
    else if (dynamic_content.contains(books_container)){
        closeView();
    }
}