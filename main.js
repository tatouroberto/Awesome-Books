class Bookshell {
    books = [];

    constructor() {
      this.books = [];
    }

    addBook(bookName, bookAuthor) {
      const book = {
        name: bookName.value,
        author: bookAuthor.value,
      };
      this.books.push(book);
      localStorage.setItem('Books', JSON.stringify(this.books));
    }

    removeBook(index) {
      this.books = this.books.filter((item, i) => i !== index);
      localStorage.setItem('Books', JSON.stringify(this.books));
    }
}

const localData = JSON.parse(localStorage.getItem('Books'));
const BookListContainer = document.querySelector('.books-container');

const Book = new Bookshell();

if (localData != null) {
  localData.forEach((item) => {
    BookListContainer.innerHTML += `
      <div class='item'>
      <li class='list'>
      <div>${item.name} by ${item.author}</div>
      </li>
      <button class='btn-remove'>Remove</button>
      </div>
        `;
    const book = {
      id: item.id,
      name: item.name,
      author: item.author,
    };
    Book.books.push(book);
  });
}

function display() {
  BookListContainer.innerHTML = '';
  Book.books.forEach((item) => {
    BookListContainer.innerHTML += `
      <div class='item'>
      <li class='list'>
      <div>${item.name} by ${item.author}</div>
      </li>
      <button class='btn-remove'>Remove</button>
      </div>
          `;
  });
}

const bookName = document.querySelector('#title');
const bookAuthor = document.querySelector('#authur');
const addbtn = document.querySelector('#addBtn');

addbtn.addEventListener('click', () => {
  Book.addBook(bookName, bookAuthor);
  display();
  window.location.reload();
});

const removebtn = document.querySelectorAll('.btn-remove');

for (let item = 0; item < removebtn.length; item += 1) {
  removebtn[item].addEventListener('click', () => {
    Book.removeBook(item);
    display();
    window.location.reload();
  });
}
