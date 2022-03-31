let myLibrary = [];

const submitButton = document.querySelector('.submit');
const addBookButton = document.querySelector('.add-book');

function Book(author, title, pages, read) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
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
            readButton.style.backgroundColor = myLibrary[i].read ? 'green' : 'red';
            deleteButton.innerText = 'X';

            card.classList.add('card');
            deleteButton.classList.add('delete');
            readButton.classList.add('.read-button');

            card.setAttribute('data-key', i);

            card.appendChild(cardTitle);
            card.appendChild(cardAuthor);
            card.appendChild(cardPages);
            card.appendChild(readButton);
            card.appendChild(deleteButton);
            
            container.appendChild(card);
            myLibrary[i].show = true;
            deleteButton.addEventListener('click', () => {
                let element = document.querySelector(`.card[data-key='${i}']`);
                container.removeChild(element);
            });

            readButton.addEventListener('click', () => {
                myLibrary[i].read = (myLibrary[i].read) ? false : true;
                readButton.innerText = myLibrary[i].read ? 'Read' : 'Not read';
                readButton.style.backgroundColor = myLibrary[i].read ? 'green' : 'red'; 
            });
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
    document.querySelector('.main-content').classList.toggle('blur');
}

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
    }
});


