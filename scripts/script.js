if("library" in localStorage) {
    var myLibrary = localStorage.getItem("library")
}else{
    var myLibrary = [];
    localStorage.setItem("library", myLibrary)
}

function Book(name, author, pages, read) {
    this.name = name
    this.author = author
    this.pages = pages
    this.read = read
}

function addBookToLibrary(name, author, pages, rd1 = false, rd2 = false) {
    myLibrary = localStorage.getItem("library")

    if(rd1.checked==true) {
        var read = rd1}
    else if(rd2.checked==true) {
        var read = rd2}
    else {
        var read = "unspecified" }
    alert(`${name.value} by ${author.value}, ${pages.value} pages, has been added ${read.value}`)
    console.log(new Book(name, author, pages, read))
    myLibrary.push(new Book(name, author, pages, read))
    localStorage.setItem("library", myLibrary)
}

function forma(){
    document.getElementById("form").style.display = "block"
}

function cancel(){
    document.getElementById("form").style.display = "none"
}

function cont(){
    myLibrary = localStorage.getItem("library")
    const container = document.getElementById("container")
    var i
    for (i = 0; i < myLibrary.length; i++){
        const div = document.createElement("div")
        const nameB = document.createElement("h1")
        const authorB = document.createElement("h2")
        const pagesB = document.createElement("h2")
        const readB = document.createElement("h3")
        const btn1  = document.createElement("button")
        const btn2 = document.createElement("button")

        nameB.textContent = myLibrary[i].name.value
        authorB.textContent = myLibrary[i].author.value
        pagesB.textContent = myLibrary[i].pages.value
        readB.textContent = myLibrary[i].read.value
        btn1.textContent = "remove"
        btn2.textContent = "read/unread"

        btn1.addEventListener("click", () => {
            container.removeChild(div)
        })
    
        btn2.addEventListener("click", () =>{
            if (readB.value == "Yes I have read it"){
                readB.textContent = "No I haven't read it" 
            }else{
                readB.textContent = "Yes I have read it" 
            }
        })
    
        div.appendChild(nameB)
        div.appendChild(authorB)
        div.appendChild(pagesB)
        div.appendChild(readB)
        div.appendChild(btn1)
        div.appendChild(btn2)
        container.appendChild(div)
    }
}

console.log(localStorage)
addBookToLibrary("ricardo", "monos", 333, true)