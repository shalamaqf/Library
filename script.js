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

// Set Element's Attribute and Type
books_container.className = 'books_container';
book_card.className = 'book_card';
title.className = 'info title';
author.className = 'info author';
pages.className = 'info pages';
isRead.className = 'button-info isRead';
isRead.type = "button";
removeBook.className = 'button-info remove';
removeBook.type = "button";
viewDetail.className = 'button-info view';
viewDetail.type = "button";

form_container.className = 'form_container';

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
