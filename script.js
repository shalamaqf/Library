// Create DOM Elements
const books_container = document.createElement ("div");
const book_card = document.createElement("div");
const title = document.createElement ("h3");
const author = document.createElement ("p");
const pages = document.createElement ("p");
let isRead = document.createElement("button");
let removeBook = document.createElement("button");
let viewDetail = document.createElement("button");

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


// Set Element's Attribute and Type
books_container.className = 'books-container';
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

form_container.className = 'form-container';

title_container.className = 'label title';
label_title.htmlFor = 'title';
input_title.id = 'title';
input_title.type = 'text';

author_container.className = 'label author';
label_author.htmlFor = 'author';
input_author.id = 'author';
input_author.type = 'text';

pages_container.className = 'label pages';
label_pages.htmlFor = 'pages';
input_pages.id = 'pages';
input_pages.type = 'text';

submit_button.type = "submit";
submit_button.className = 'submit-button'


// Append DOM Elements
book_card.appendChild(title);
book_card.appendChild(isRead);
book_card.appendChild(viewDetail);
book_card.appendChild(removeBook);

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


// Query Selector HTML's Elements
const addBook = document.querySelector('.button.add');
const viewBook = document.querySelector('.button.view-book');


// Element's Text Content
title.textContent = "Title: ";
author.textContent = "Author: ";
pages.textContent = "Pages: ";
isRead.textContent = "Not Read Yet";
removeBook.textContent = "Remove Book";
viewDetail.textContent = "View Details";

form_title.textContent = "Book's Details";
label_title.textContent = "Title: ";
label_author.textContent = "Author: ";
label_pages.textContent = "Pages: ";
submit_button.textContent = "Submit";








// Functionality

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
