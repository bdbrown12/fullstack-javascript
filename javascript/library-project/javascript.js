// store all book objects in an array by creating a constructor for books
const myLibrary = [];

function Book(bookName, authorName, numPages){
    this.bookName = bookName,
    this.authorName = authorName,
    this.numPages = numPages
};

function addBookToLibrary() {
    const newBook = new Book(boo)
};

book1 = new Book('Harry Potter', 'J.K. Rowling', 550);

myLibrary.push(book1);

function displayBooks(book) {
    for(let prop in book){
        console.log(prop);
    }
}


//how to add objects to an array

// Object.setPrototypeOf(addBookToLibrary, Book);

const name = document.querySelector('#name');
name.textContent = 'harry potter';