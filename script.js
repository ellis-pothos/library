// container of all the things 
const container = document.querySelector("#container");
    container.classList.add("mainContainer"); 

    // button that opens the form for recommending a book and adding it to the library
        const newBookButton = document.createElement("button");
        newBookButton.classList.add("button");
        newBookButton.id = "bookBtn";
        newBookButton.textContent = "Recommend a book to me!";
        container.appendChild(newBookButton); 

        const dialog = document.createElement('dialog');
        container.appendChild(dialog);


        // book recommendation form 
            bookBtn.addEventListener(`click`, () => {
                dialog.showModal();

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
                    
                    const submitButton = document.createElement('button');
                    submitButton.type = 'button';
                    submitButton.textContent = 'Submit';

                    // append each input to the form
                    newBookForm.appendChild(titleInput);
                    newBookForm.appendChild(authorInput);
                    newBookForm.appendChild(submitButton);

                    // append the form to the dialog
                    dialog.appendChild(newBookForm); 

                // submit button which will contain the function for adding the new book to the library
                submitButton.addEventListener(`click`, () => {
                // create new object (book) from the form input and then 
                // push that object (book) into the library array
                    const recommendation = new Book(titleInput.value, authorInput.value);
                    library.push(recommendation);
                    console.log(recommendation);
                    dialog.close();
                });
            });


// library
const library = [];

// prototype - the function that creates new books as objects 
function Book(title, author) {
    this.title = title;
    this.author = author;
    console.log(this.title + ` by ` + this.author)
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
