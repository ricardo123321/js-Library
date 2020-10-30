const dombook1 = () => {
  const name = document.getElementById('bookName').value;
  const author = document.getElementById('authorName').value;
  const pages = document.getElementById('pagesNumber').value;
  const rd1 = document.getElementById('yes');
  const rd2 = document.getElementById('no');
  const myLibrary = [];
  const read = '';

  return {
    name,
    author,
    pages,
    rd1,
    rd2,
    myLibrary,
    read,
  };
};

const cont = () => {
  const myLibrary = JSON.parse(localStorage.getItem('library'));
  const container = document.getElementById('contn');
  for (let i = 0; i < myLibrary.length; i += 1) {
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
      let myLibrary2 = JSON.parse(localStorage.getItem('library'));
      if (myLibrary2.length === 1) {
        myLibrary2 = [];
      }
      myLibrary2.splice(numB, 1);
      i -= 1;
      container.removeChild(div);
      localStorage.setItem('library', JSON.stringify(myLibrary2));
      localStorage.setItem('counter', JSON.stringify(i));
    });

    btn2.addEventListener('click', () => {
      const myLibrary2 = JSON.parse(localStorage.getItem('library'));
      if (readB.textContent === 'Yes I have read it') {
        readB.textContent = "No I haven't read it";
        myLibrary2[numB].read = "No I haven't read it";
        localStorage.setItem('library', JSON.stringify(myLibrary2));
      } else {
        readB.textContent = 'Yes I have read it';
        myLibrary2[numB].read = 'Yes I have read it';
        localStorage.setItem('library', JSON.stringify(myLibrary2));
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

export { dombook1, cont };