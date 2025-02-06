let formAddBook = document.getElementById("form-add-book");
let inputBook = document.getElementById("input-book");
let inputAuthor = document.getElementById("input-author");
let inputPages = document.getElementById("input-pages");
let validationMsg = document.getElementById("validation-msg");

document.addEventListener("DOMContentLoaded", function() {
    formAddBook.addEventListener("submit", (e) => {
        e.preventDefault();
        console.log('success!');

        validateForm();
        });
});

let validateForm = () => {
    if (inputBook.value === "" || inputAuthor.value === "" || inputPages.value === "") {
        // Display validation message
        validationMsg.innerHTML ="All fields must have a value";
        console.log();
        
        // Focus on the first empty input field
        if (inputBook.value === "") {
            inputBook.focus();
        } else if (inputAuthor.value === "") {
            inputAuthor.focus();
        } else if (inputPages.value === "") {
            inputPages.focus();
        }
    } else {
        //create a new book
        let newBook = new Book(inputBook.value, inputAuthor.value, inputPages.value);
        //add the book to my library array
        myLibrary.push(newBook);

        console.log("Book added:", newBook);
        console.log("Updated books array:", myLibrary);

        // Clear input fields after adding a book
        inputBook.value = "";
        inputAuthor.value = "";
        inputPages.value = "";

        //Update the UI to reflect the new book list
        addBookToLibrary(newBook);
    }
};

let addBookToLibrary = (newBook) => {
    let bookList = document.getElementById("book-list");
    let row = document.createElement("tr");
    row.innerHTML = `
    <tr>
        <td>${newBook.bookName}</td>
        <td>${newBook.authorName}</td>
        <td>${newBook.numPages}</td>
        <td><button type="submit">Read</button></td>
    </tr>
    `;

    bookList.appendChild(row);
}

let toggleBookStatus = (e) => {
    let btnRead = document.getElementById("btn-read");
    btnRead.innerHTML = 'Unread';
    console.log("Unread");
}

// store all book objects in an array by creating a constructor for books
const myLibrary = [];

function Book(bookName, authorName, numPages){
    this.bookName = bookName,
    this.authorName = authorName,
    this.numPages = numPages
};