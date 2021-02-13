

const mainElement = document.querySelector('html');

const mainBody = document.querySelector('body');

/*Dark Mode Toggler*/

  

const toggler = document.querySelector('.bg-toggler-wrapper');

toggler.addEventListener('click', Toggler)

let checker = false;

function Toggler(){

    

    if(!checker){

      mainElement.style.setProperty('--primary-color', '#CE6603');

      mainElement.style.setProperty('--sub-primary-color', '#2F2D2D');

      mainBody.classList.add('body-dark');

      toggler.style.justifyContent = 'flex-end'

      checker = true;

    }else {

      mainElement.style.setProperty('--primary-color', 'orangered');

      mainElement.style.setProperty('--sub-primary-color', 'white');

      mainBody.classList.remove('body-dark');

      toggler.style.justifyContent = 'flex-start'

      checker = false;

    }

 }

 

 /******Book Logging Functionality********/

 

 /* Main Constructor Class */

 

class Book {    

     constructor(name, author, genre, year, isbn){

         this.name = name;

         this.author = author;

         this.genre = genre;

         this.year = year;

         this.isbn = isbn;

       }

       

     static bookLog(userBook){

  /* Grab the book-container element */

      const bookList = document.querySelector('.book-container');

      

      const newBook = document.createElement('div');

      

      newBook.setAttribute('class', 'book');

      

  

  /* Dynamically generate new books */

  

  newBook.innerHTML = `

          <div class="function-wrapper">

            <a href="" class="btn delete-btn">Delete</a>

          </div>

          <div class="book-details-wrapper">

            <p>Title: ${userBook.name}.</p>

            <p>Author: ${userBook.author}.</p>

            <p>Genre: ${userBook.genre}.</p>

            <p>Year: ${userBook.year}.</p>

            <p>ISBN: ${userBook.isbn}.</p>

          </div>`;

      

      bookList.appendChild(newBook);

       

     }

     

     static clearFields(){

         document.querySelector('#BookName').value = "";

document.querySelector('#BookAuthor').value = "";

document.querySelector('#BookGenre').value = "";

document.querySelector('#BookRelDate').value = "";

document.querySelector('#BookISBN').value = "";

        

     }

     

     static deleteBook(e){

       if(e.classList.contains('delete-btn')){

         e.parentElement.parentElement.remove();

       }

     }

     

     static displayAlert(message, className){

       let newDiv = document.createElement('div');

       newDiv.className = `alert alert-${className}`;

       newDiv.innerHTML = `<p>${message}</p>`;

       const container = document.querySelector('.info-input');

       const form = document.querySelector('.form');

       container.insertBefore(newDiv, form);

       

       setTimeout(() => {

         document.querySelector('.alert').remove()

       }, 2500);

       

       }

     

     

 }

/* Create a new Book element*/

  

  document.querySelector('.btn').addEventListener("click", (e) => {

  

  /* Prevent Default Action*/

  

  e.preventDefault();

  

 /* Create Variables to store the values of the input fields */

 

const bookName =       document.querySelector('#BookName').value;

   

const bookAuthor =       document.querySelector('#BookAuthor').value;

   

const bookGenre =       document.querySelector('#BookGenre').value;

   

const bookYear =       document.querySelector('#BookRelDate').value;

   

const bookISBN =       document.querySelector('#BookISBN').value;

  

if(bookName === "" || bookName === "" || bookName === "" || bookName === "" || bookISBN === "" ){

    Book.displayAlert('Please fill all the fields!!', 'danger')

}else{

  /* Instatiate new Book Object */

  

  const userBook = new Book(bookName, bookAuthor, bookGenre, bookYear, bookISBN);

  

/* Log book into list */

Book.bookLog(userBook);

/* Display Success Alert */

  

  Book.displayAlert('Book added!', 'success');

  

/* Clear Fields */

  

  Book.clearFields()

}

});

/* Delete Book */

  

  document.querySelector('.book-container').addEventListener('click', (e) => {

    e.preventDefault();

    Book.deleteBook(e.target);

    

 /* Display Alert For Book Removed */

   

    Book.displayAlert('Book removed!', 'success');

  })
