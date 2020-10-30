import { dombook1, cont } from './dom';


const getLibrary = () => {
  if (localStorage.getItem('library') === '' || localStorage.getItem('library') === null) {
    const myLibrary = [];
    const i = 0;
    localStorage.setItem('counter', i);
    localStorage.setItem('library', myLibrary);
  }
};

getLibrary();

const Book = (name, author, pages, read, num) => ({
  name,
  author,
  pages,
  read,
  num,
}
);

const addBookToLibrary = (name, author, pages, rd1 = false, rd2 = false) => {
  const bb = dombook1();
  if ('library' in localStorage && localStorage.getItem('library') !== '') {
    bb.myLibrary = JSON.parse(localStorage.getItem('library'));
  }

  let i = JSON.parse(localStorage.getItem('counter'));
  const num = i;
  if (bb.rd1.checked === true) {
    rd1 = bb.rd1.value;
    bb.read = rd1;
  } else if (bb.rd2.checked === true) {
    rd2 = bb.rd2.value;
    bb.read = rd2;
  } else {
    bb.read = 'unspecified';
  }

  bb.myLibrary[i] = Book(bb.name, bb.author, bb.pages, bb.read, num);
  i += 1;
  localStorage.setItem('library', JSON.stringify(bb.myLibrary));
  localStorage.setItem('counter', JSON.stringify(i));
};

const button2 = document.querySelector('.button2');

button2.addEventListener('click', () => {
  addBookToLibrary();
});

const forma = () => {
  document.getElementById('form').style.display = 'block';
};

const button1 = document.querySelector('.button1');

button1.addEventListener('click', () => {
  forma();
});

const cancel = () => {
  document.getElementById('form').style.display = 'none';
};

const button3 = document.querySelector('.button3');

button3.addEventListener('click', () => {
  cancel();
});

cont();