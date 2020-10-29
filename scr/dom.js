const dombook1 = () => {
  const name = document.getElementById('bookName').value;
  const author = document.getElementById('authorName').value;
  const pages = document.getElementById('pagesNumber').value;
  const rd1 = document.getElementById('yes');
  const rd2 = document.getElementById('no');
  const myLibrary = [];

  return {
    name,
    author,
    pages,
    rd1,
    rd2,
    myLibrary,
  };
};

const cont = () => {
  let myLibrary = JSON.parse(localStorage.getItem('library'));
  const container = document.getElementById('contn');
  let i = 0;
  for (i = 0; i < myLibrary.length; i++) {
    const div = document.createElement('div');
    const nameB = document.createElement('h1');
    const authorB = document.createElement('h2');
    const pagesB = document.createElement('h2');
    const readB = document.createElement('h3');
    const btn1 = document.createElement('button');
    const btn2 = document.createElement('button');
    const numB = myLibrary[i].num;
    nameB.textContent = myLibrary[i].name;
    authorB.textContent = myLibrary[i].author;
    pagesB.textContent = myLibrary[i].pages;
    readB.textContent = myLibrary[i].read;
    btn1.textContent = 'remove';
    btn2.textContent = 'read/unread';
    container.setAttribute('class', 'row');
    div.setAttribute('class', 'col-lg-4 book');
    btn1.setAttribute('class', 'btn btn-primary');
    btn2.setAttribute('class', 'btn btn-primary');

    btn1.addEventListener('click', () => {
      const result = myLibrary.find(({ num }) => num === numB);
      if (myLibrary.length === 1) {
        myLibrary = [];
      }
      myLibrary.splice(numB, 1);
      i -= 1;
      container.removeChild(div);
      localStorage.setItem('library', JSON.stringify(myLibrary));
      localStorage.setItem('counter', JSON.stringify(i));
    });

    btn2.addEventListener('click', () => {
      if (readB.textContent === 'Yes I have read it') {
        readB.textContent = "No I haven't read it";
        myLibrary[numB].read = "No I haven't read it";
        localStorage.setItem('library', JSON.stringify(myLibrary));
      } else {
        readB.textContent = 'Yes I have read it';
        myLibrary[numB].read = 'Yes I have read it';
        localStorage.setItem('library', JSON.stringify(myLibrary));
      }
    });

    div.appendChild(nameB);
    div.appendChild(authorB);
    div.appendChild(pagesB);
    div.appendChild(readB);
    div.appendChild(btn1);
    div.appendChild(btn2);
    container.appendChild(div);
  }
};
