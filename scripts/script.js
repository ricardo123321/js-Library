if("library" in localStorage && localStorage.getItem("library") != ""){
    var myLibrary = JSON.parse(localStorage.getItem("library"))
    var i = JSON.parse(localStorage.getItem("counter"))
}else{
    var myLibrary = [];
    var i = 0
    localStorage.setItem("counter", i)
    localStorage.setItem("library", myLibrary)
}

function Book(name, author, pages, read, num) {
    this.name = name
    this.author = author
    this.pages = pages
    this.read = read
    this.num = num
}

function addBookToLibrary(name, author, pages, rd1 = false, rd2 = false) {
    if ("library" in localStorage && localStorage.getItem("library") != ""){
    myLibrary = JSON.parse(localStorage.getItem("library"))
    }

    i = JSON.parse(localStorage.getItem("counter"))
    const num = i

    if(rd1.checked==true) {
        var read = rd1.value}
    else if(rd2.checked==true) {
        var read = rd2.value}
    else {
        var read = "unspecified" }

    alert(`${name} by ${author}, ${pages} pages, has been added ${read}`)
    myLibrary[i] = new Book(name, author, pages, read, num)
    i = i + 1
    localStorage.setItem("library", JSON.stringify(myLibrary))
    localStorage.setItem("counter", JSON.stringify(i))
}

function forma(){
    document.getElementById("form").style.display = "block"
}

function cancel(){
    document.getElementById("form").style.display = "none"
}

function cont(){
    myLibrary = JSON.parse(localStorage.getItem("library"))
    var container = document.getElementById("contn")
    for (i = 0; i < myLibrary.length; i++){
        const div = document.createElement("div")
        const nameB = document.createElement("h1")
        const authorB = document.createElement("h2")
        const pagesB = document.createElement("h2")
        const readB = document.createElement("h3")
        const btn1  = document.createElement("button")
        const btn2 = document.createElement("button")
        const numB = myLibrary[i].num
        nameB.textContent = myLibrary[i].name
        authorB.textContent = myLibrary[i].author
        pagesB.textContent = myLibrary[i].pages
        readB.textContent = myLibrary[i].read
        btn1.textContent = "remove"
        btn2.textContent = "read/unread"
        container.setAttribute("class", "row")
        div.setAttribute("class", "books")
        div.setAttribute("class", "col-lg-4")
        btn1.setAttribute("class", "btn")
        btn1.setAttribute("class", "btn-primary")
        btn2.setAttribute("class", "btn")
        btn2.setAttribute("class", "btn-primary")

        btn1.addEventListener("click", () => {
            const result = myLibrary.find( ({ num }) => num === numB );
            if (myLibrary.length == 1){
                myLibrary = []
            }
            myLibrary.splice(numB, 1)
            i = i - 1
            container.removeChild(div)
            localStorage.setItem("library", JSON.stringify(myLibrary))
            localStorage.setItem("counter", JSON.stringify(i))
            console.log(myLibrary)
        })
    
        btn2.addEventListener("click", () =>{
            if (readB.textContent == "Yes I have read it"){
                readB.textContent = "No I haven't read it"
                myLibrary[numB].read = "No I haven't read it"
                localStorage.setItem("library", JSON.stringify(myLibrary))
            }else{
                readB.textContent = "Yes I have read it"
                myLibrary[numB].read = "Yes I have read it"
                localStorage.setItem("library", JSON.stringify(myLibrary))
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
cont()
console.log(localStorage)