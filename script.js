let myLibrary = [{author: 'Alexandre Dumas', title: 'The Count of Monte Cristo', pages: 1276}];

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

function displayLibrary() {
    for(let i = 0; i < myLibrary.length; i++) {
        if(!myLibrary[i].show) {
            const container = document.querySelector('.container');

            let card = document.createElement('div');
            let cardAuthor = document.createElement('p');
            let cardTitle = document.createElement('p');
            let cardPages = document.createElement('p');

            cardAuthor.innerText = myLibrary[i].author;
            cardTitle.innerText = myLibrary[i].title;
            cardPages.innerText = myLibrary[i].pages;

            card.classList.add('card');
            card.appendChild(cardAuthor);
            card.appendChild(cardTitle);
            card.appendChild(cardPages);
            
            container.appendChild(card);
            myLibrary[i].show = true;
        }
    }
}

const addBookButton = document.querySelector('.add-book');
addBookButton.addEventListener('click', () => {
    const form = document.querySelector('form');
    form.classList.toggle('show');
});