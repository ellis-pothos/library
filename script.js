// container of all the things 
const container = document.querySelector("#container");
    container.classList.add("mainContainer"); 

    // button that opens the form for recommending a book and adding it to the library
        const newBookButton = document.createElement("button");
        newBookButton.classList.add("button");
        newBookButton.id = "bookBtn";
        newBookButton.textContent = "Recommend a book to me!";
        container.appendChild(newBookButton); 

        // book recommendation form 
            bookBtn.addEventListener(`click`, () => {
                const newBookForm = document.createElement('form');
                newBookForm.id = 'bookForm';

                const titleInput = document.createElement('input');
                titleInput.type = 'text';
                titleInput.name = 'title';
                titleInput.placeholder = 'Enter the book title';

                const authorInput = document.createElement('input');
                authorInput.type = 'text';
                authorInput.name = 'author';
                authorInput.placeholder = "Enter the book's author";
                
                // append each input to the form
                newBookForm.appendChild(titleInput);
                newBookForm.appendChild(authorInput);

                // append the form to the container
                container.appendChild(newBookForm); 

                
            });


// library
const library = [];

// prototype - the function that creates new books as objects 
function Book(title, author) {
    this.title = title;
    this.author = author;
    console.log(this.title + " by " + this.author)
}

// function that pushes the new book into the library array
const addBook = function(newBook) {
    library.push(newBook);
}

// test books 
const book1 = new Book("Parable of the Sower", "Octavia Butler")
const book2 = new Book("What We Don't Talk About When We Talk About Fat", "Aubrey Gordon")

// function that displays each book on the page
const displayBook = function(book) {
    // const container = document.querySelector("#container");
    // container.classList.add("mainContainer"); 

        const bookDiv = document.createElement("div");
        bookDiv.classList.add("bookdiv");
        bookDiv.textContent = `${book.title} " by " ${book.author}`
        container.appendChild(bookDiv); 
}

const testFunc = function() {
    console.log("testing!");
}

const displayLibrary = function () {
    library.map(displayBook); 
}
