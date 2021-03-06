let myLibrary = [];

const submitButton = document.querySelector('.submit');
const addBookButton = document.querySelector('.add-book');

class Book {
    constructor(author, title, pages, read) {
        this.author = author;
        this.title = title;
        this.pages = pages;
        this.read = read;
    } 
}

function addBookToLibrary() {
    let author = document.querySelector('#author').value;
    let title = document.querySelector('#title').value;
    let pages = +document.querySelector('#pages').value;
    let read = document.querySelector('#read').checked;
    let book = new Book(author, title, pages, read);
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
            let readButton = document.createElement('button');
            let deleteButton = document.createElement('button');

            cardAuthor.innerText = `by ${myLibrary[i].author}`;
            cardTitle.innerText = myLibrary[i].title;
            cardPages.innerText = `${myLibrary[i].pages} pgs`;
            readButton.innerText = myLibrary[i].read ? 'Read' : 'Not read';
            readButton.style.backgroundColor = myLibrary[i].read ? '#4ade80' : '#ef4444';

            card.classList.add('card');
            deleteButton.classList.add('delete');
            readButton.classList.add('read-button');

            card.appendChild(cardTitle);
            card.appendChild(cardAuthor);
            card.appendChild(cardPages);
            card.appendChild(readButton);
            card.appendChild(deleteButton);
            
            container.appendChild(card);
            myLibrary[i].show = true;
        }
    }
}

function emptyForm() {
    document.querySelector('#author').value = '';
    document.querySelector('#title').value = '';
    document.querySelector('#pages').value = '';
    document.querySelector('#read').checked = false;
}

function toggleForm() {
    document.querySelector('form').classList.toggle('show');
    document.querySelector('.mask').classList.toggle('on');
}

function update() {
    let cards = Array.from(document.querySelectorAll('.card'));
    for(let i = 0; i < cards.length; i++) {
        cards[i].setAttribute('data-key', i);
    }
}

function displayErrorMessage() {
    if(!document.querySelector('.error')) {
        let referenceNode = document.querySelector('.submit');
        let errorMessage = document.createElement('p');
        errorMessage.classList.add('error');
        errorMessage.innerText = 'Please fill in all the fields.';
        referenceNode.parentNode.insertBefore(errorMessage, referenceNode);
    } 
}

function removeErrorMessage() {
    let errorMessage = document.querySelector('.error');
    if (errorMessage) {
        document.querySelector('form').removeChild(errorMessage);
    }
}

document.addEventListener('click', (e) => {
    const container = document.querySelector('.container');

    if (e.target.matches('.delete')) {
        let card = e.target.parentNode;
        container.removeChild(card);
        myLibrary.splice(card.dataset.key, 1);
        update();
    }

    if (e.target.matches('.read-button')) {
        let book = myLibrary[e.target.parentNode.dataset.key];
        book.read = book.read ? false : true;
        e.target.innerText = book.read ? 'Read' : 'Not read';
        e.target.style.backgroundColor = book.read ? '#4ade80' : '#ef4444'; 
    }
    
    if (e.target.matches('.on') || e.target.matches('.cancel')) {
        emptyForm();
        removeErrorMessage();
        toggleForm();
    }
});

addBookButton.addEventListener('click', toggleForm);

submitButton.addEventListener('click', () => {
    let author = document.querySelector('#author').value;
    let title = document.querySelector('#title').value;
    let pages = document.querySelector('#pages').value;
    if (author && title && pages) {
        addBookToLibrary();
        emptyForm();
        toggleForm();
        displayLibrary();
        update();
        removeErrorMessage();
    } else {
        displayErrorMessage();
    } 
});

