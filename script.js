// 12.22.24 - ideas: (1) store the data in between page reloads so that I can add books to the library
// (2) allow users to recommend books to me and put them in a separate library that will 
//      display recommended books
// (3) have a poll on each book so users can say whether or not they have also read the book 

// library
const library = [];

// // test books 
// const book1 = new Book("Parable of the Sower", "Octavia Butler", true);
// const book2 = new Book("What We Don't Talk About When We Talk About Fat", "Aubrey Gordon", false);

// container of all the things 
const container = document.querySelector("#container");
container.classList.add("mainContainer"); 

    // button that opens the form for recommending a book and adding it to the library
    const newBookButton = document.createElement("button");
    newBookButton.classList.add("newBookButton");
    newBookButton.id = "newBookBtn";
    newBookButton.textContent = "Recommend a book to me!";
    container.appendChild(newBookButton); 

        // dialog box with the form 
        const dialog = document.createElement('dialog');
        container.appendChild(dialog);

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

            // submit button which will contain the function for adding the new book to the library
            submitButton.addEventListener(`click`, () => {
                // create new object (book) from the form input and then 
                // push that object (book) into the library array
                    const recommendation = new Book(titleInput.value, authorInput.value, false);
                    recommendation.addBook();
                    newBookForm.reset(); 
                    dialog.close();
                    recommendation.displayBook();
                });

    // append the form to the dialog
    dialog.appendChild(newBookForm); 

    // book recommendation form is shown in the dialog with the "Recommend a book to me" button is pressed
    newBookBtn.addEventListener(`click`, () => {
    dialog.showModal();
    });

    const displayLibraryBtn = document.createElement("button");
    displayLibraryBtn.classList.add("libraryBtn");
    displayLibraryBtn.textContent = "Show my library"
    container.appendChild(displayLibraryBtn);

// library books will go here
const libraryContainer = document.createElement("div");
libraryContainer.classList.add("library");
container.appendChild(libraryContainer);

class Book {
    constructor(title, author, wasItRead) {
        this.title = title;
        this.author = author;
        this.read = wasItRead; 
    }

    addBook = () => {
        library.push(this);
    }

    displayBook = () => {
        const bookDiv = document.createElement("div");
        bookDiv.classList.add("bookDiv");
        bookDiv.textContent = `${this.title} by ${this.author}`; 
        
        const bookImage = document.createElement("img");
        bookImage.id = "bookImage"; 
        bookImage.src = "book.png"; 
        bookDiv.appendChild(bookImage); 

        const readBtn = document.createElement(`button`);
        readBtn.id = "readBtn"; 
        if (this.read === true) {
            readBtn.textContent = "I read it!";
        } else {
            readBtn.textContent = "It's on my list!";
        }
        bookDiv.appendChild(readBtn);

            // button that toggles whether the book was read
            readBtn.addEventListener(`click`, () => {
                if (this.read === true) {
                    readBtn.textContent = "It's on my list!"
                    // update the object with the new value 
                    this.read = false; 
                } else {
                    readBtn.textContent = "I read it!";
                    this.read = true; 
                }
            }); 
        libraryContainer.appendChild(bookDiv); 
    }
}

const displayLibrary = function () {
    library.map(displayBook); 
}
