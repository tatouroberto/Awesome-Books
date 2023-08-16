let bookshell = [];

const addbtn = document.querySelector('#addBtn');
const BookListContainer = document.querySelector('.books-container');
const localData = JSON.parse(localStorage.getItem('Booked'));

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

function addBook() {
  const book = {
    id: bookshell.length,
    name: document.querySelector('#title').value,
    author: document.querySelector('#authur').value,
  };
  bookshell.push(book);
  localStorage.setItem('Booked', JSON.stringify(bookshell));
  window.location.reload();
}
addbtn.addEventListener('click', addBook);

function removeBook(id) {
  bookshell = bookshell.filter((item) => item.id !== id);
  localStorage.setItem('Booked', JSON.stringify(bookshell));
  window.location.reload();
}
const linters = document.querySelector('linters');
linters.addEventListener('click', removeBook);
