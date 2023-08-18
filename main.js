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

const dateContainer = document.getElementById('date');
const currentdate = new Date();
const month = (currentdate.getMonth() + 1);
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const datetime = `${months[month - 1]} ${
  currentdate.getDate()}th ${
  currentdate.getFullYear()}, @ ${
  currentdate.getHours()}:${
  currentdate.getMinutes()}:${
  currentdate.getSeconds()}`;
dateContainer.textContent = datetime;

const list = document.querySelector('#list');
const add = document.querySelector('#new');
const contact = document.querySelector('#contact');
const addSection = document.querySelector('.contact-form');
const listSection = document.querySelector('.list-part');
const contactSection = document.querySelector('.contact');

add.addEventListener('click', () => {
  addSection.style.display = 'block';
  listSection.style.display = 'none';
  contactSection.style.display = 'none';
});

list.addEventListener('click', () => {
  addSection.style.display = 'none';
  listSection.style.display = 'block';
  contactSection.style.display = 'none';
});

contact.addEventListener('click', () => {
  contactSection.style.display = 'flex';
  listSection.style.display = 'none';
  addSection.style.display = 'none';
});
