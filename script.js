let myLibrary = [];

const submitButton = document.querySelector('.submit');
const addBookButton = document.querySelector('.add-book');

function Book(author, title, pages) {
    this.author = author;
    this.title = title;
    this.pages = pages;
}

function addBookToLibrary() {
    let author = document.querySelector('#author').value;
    let title = document.querySelector('#title').value;
    let pages = +document.querySelector('#pages').value;
    let book = new Book(author, title, pages);
    myLibrary.push(book);
    console.log(myLibrary);
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

function emptyForm() {
    document.querySelector('#author').value = '';
    document.querySelector('#title').value = '';
    document.querySelector('#pages').value = '';
}

function toggleForm() {
    document.querySelector('form').classList.toggle('show');
    document.querySelector('.main-content').classList.toggle('blur');
}

addBookButton.addEventListener('click', toggleForm);

submitButton.addEventListener('click', () => {
    addBookToLibrary();
    emptyForm();
    toggleForm();
    displayLibrary();
});
