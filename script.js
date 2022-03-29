let myLibrary = [];

function Book(author, title, pages) {
    this.author = author;
    this.title = title;
    this.pages = pages;
}

function addBookToLibrary() {
    const author = prompt('Author: ');
    const title = prompt('Title: ');
    const pages = prompt('Number of pages: ');
    const book = new Book(author, title, pages);
    myLibrary.push(book);
}