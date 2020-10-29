if (localStorage.getItem('library') === '' || localStorage.getItem('library') === null) {
  const myLibrary = [];
  const i = 0;
  localStorage.setItem('counter', i);
  localStorage.setItem('library', myLibrary);
}

const Book = (name, author, pages, read, num) => ({
  name,
  author,
  pages,
  read,
  num,
}
);

const addBookToLibrary = (name, author, pages, rd1 = false, rd2 = false) => {
  let bb = dombook1()
  if ('library' in localStorage && localStorage.getItem('library') !== '') {
    bb.myLibrary = JSON.parse(localStorage.getItem('library'));
  }

  let i = JSON.parse(localStorage.getItem('counter'));
  const num = i;

  if (bb.rd1.checked === true) {
    read = rd1.value;
  } else if (bb.rd2.checked === true) {
    read = bb.rd2.value;
  } else {
    read = 'unspecified';
  }

  bb.myLibrary[i] = Book(bb.name, bb.author, bb.pages, bb.read, num);
  i += 1;
  localStorage.setItem('library', JSON.stringify(bb.myLibrary));
  localStorage.setItem('counter', JSON.stringify(i));
};

const forma = () => {
  document.getElementById('form').style.display = 'block';
};

const cancel = () => {
  document.getElementById('form').style.display = 'none';
};
cont();