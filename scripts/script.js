let myLibrary = [];

function Book(name, author, pages, read) {
    this.name = name
    this.author = author
    this.pages = pages
    this.read = read
}

function addBookToLibrary() {
    const name = document.getElementById("bookName")
    const author = document.getElementById("authorName")
    const pages = document.getElementById("pagesNumber")
    const rd1 = document.getElementById("yes")
    const rd2 = document.getElementById("no")

    if(rd1.checked==true) {
        var read = rd1}
    else if(rd2.checked==true) {
        var read = rd2}
    else {
        var read = "unspecified" }

    myLibrary.push(new Book(name, author, pages, read))

    const container = document.getElementById("container")
    const div = document.createElement("div")
    const nameB = document.createElement("h1")
    const authorB = document.createElement("h2")
    const pagesB = document.createElement("h2")
    const readB = document.createElement("h3")

    nameB.textContent = myLibrary[myLibrary.length - 1].name
    authorB.textContent = myLibrary[myLibrary.length - 1].author
    pagesB.textContent = myLibrary[myLibrary.length - 1].pages
    readB.textContent = myLibrary[myLibrary.length - 1].read

    div.appendChild(nameB)
    div.appendChild(authorB)
    div.appendChild(pagesB)
    div.appendChild(readB)
    container.appendChild(div)

    alert(`${name.value} by ${author.value}, ${pages.value} pages, has been added ${read.value}`)
    console.log(container)
}

function forma(){
    document.getElementById("form").style.display = "block"
}
