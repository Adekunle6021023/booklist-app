var bookName = document.querySelector('#BookName');
var bookAuthor = document.querySelector('#BookAuthor');
var bookGenre = document.querySelector('#BookGenre');
var bookRelDate = document.querySelector('#BookRelDate');
var bookISBN = document.querySelector('#BookISBN');

function logIt() {

    function createTableRow() {
        var tableBody = document.getElementsByTagName('tbody');
        var newRow = document.createElement('tr');
        tableBody.appendChild(newRow);
        var dataBox = (document.createElement('td')) * 6;
        newRow.appendChild(dataBox);
    }
    
}