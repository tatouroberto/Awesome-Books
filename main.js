let bookshell = [];

const addbtn = document.querySelector('#addBtn');
const BookListContainer = document.querySelector('.books-container');

if (bookshell != null) {
    display ();
}

function display () {
    BookListContainer.innerHTML = "";
    bookshell.forEach((item) => {
    BookListContainer.innerHTML += `
    <div>
    <div>${item.name}</div>
    <div>${item.author}</div>
    <button class='btn-remove' id='${item.id}' onclick='removeBook(${item.id})'>Remove</button>
    </div>
    <hr>
    `;
  });
}

function addBook() {
  const book = {
    id: bookshell.length,
    name: document.querySelector('#title').value,
    author: document.querySelector('#authur').value,
  };
  bookshell.push(book);
  display ();
}
addbtn.addEventListener('click', addBook);

function removeBook(id) {
  bookshell = bookshell.filter((item) => item.id !== id);
  display ();
}