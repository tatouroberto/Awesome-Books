let bookshell = [];

const addbtn = document.querySelector('#addBtn');
const BookListContainer = document.querySelector('.books-container');
const localData = JSON.parse(localStorage.getItem('Books'));

if (localData != null) {
  localData.forEach((item) => {
    BookListContainer.innerHTML += `
      <div>
      <div>${item.name}</div>
      <div>${item.author}</div>
      <button class='btn-remove' id='${item.id}' onclick='removeBook(${item.id})'>Remove</button>
      </div>
      <hr>
      `;
    const book = {
      id: item.id,
      name: item.name,
      author: item.author,
    };
    bookshell.push(book);
  });
}

function display() {
  BookListContainer.innerHTML = '';
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
  localStorage.setItem('Books', JSON.stringify(bookshell));
  display();
}
addbtn.addEventListener('click', addBook);

function removeBook(id) {
  bookshell = bookshell.filter((item) => item.id !== id);
  localStorage.setItem('Books', JSON.stringify(bookshell));
  display();
}
const linters = document.querySelector('linters');
linters.addEventListener('click', removeBook);
