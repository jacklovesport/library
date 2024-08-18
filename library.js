myLibrary = [];

function Book(title, author, pages, read){
this.title = title;
this.author = author;
this.pages = pages;
this.read = read;
};

Book.prototype.toggleRead = function() {
    this.read = !this.read
}

function addBook(book) {
    myLibrary.push(book);
    displayBooks();
}

function displayBooks(){
    const bookList = document.getElementById('book-list')
    bookList.innerHTML = "";

    myLibrary.forEach((book, index) => {
        const bookCard = document.createElement('div');
        bookCard.classList.add('book-card')

        bookCard.innerHTML = `
        <h3>${book.title}</h3>
        <p>Author: ${book.author}</p>
        <p>Pages: ${book.pages}</p>
        <p>Read: <button onclick="toggleReadStatus(${index})">${book.read ? "Yes" : "No"}</button></p>
        <button onclick="removeBook(${index})">Remove</button>`;

        bookList.appendChild(bookCard)
        
    });

}

function removeBook(index){
    myLibrary.splice(index, 1)
    displayBooks()
}

function toggleReadStatus(index) {
    myLibrary[index].toggleRead();
    displayBooks();  
  }

document.getElementById('new-book-button').addEventListener('click', () => {
    document.getElementById('new-book-form').showModal();
});

document.getElementById('book-form').addEventListener('submit', function (e) {
  e.preventDefault()

  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const pages = document.getElementById('pages').value;
  const read = document.getElementById('read').checked;

  const newBook = new Book(title, author, pages, read);
  addBook(newBook);

  document.getElementById('new-book-form').close();
  document.getElementById('book-form').reset();
});

document.getElementById("cancel-button").addEventListener("click", () => {
    document.getElementById("new-book-form").close();
  });