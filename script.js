
var bookList;

async function fetchBooks(){
    let books;
    await fetch('book_list.json').then(response => {
        if(!response.ok){
            throw new Error("HTTP error " + response.status);
        }
        return response.json();
    })
    .then(data => {
        books = data;
    });
    
    return books;
}

function pageSetup(){
    document.getElementById ("btn-search-id").addEventListener ("click", searchById, false);
    document.getElementById ("btn-search-genre").addEventListener ("click", searchByGenre, false);
    document.getElementById ("btn-search-price").addEventListener ("click", searchByPrice, false);

    let tBody = document.getElementById('tbody-all-books');

    bookList.forEach(function (book) {
        tBody.insertAdjacentHTML('beforeend', `<td>${book.bookId}</td><td>${book.genre}</td><td>${book.price}</td><td>No</td>`);
    });
    
}

function searchById(){
    let id = document.getElementById('input-search-id').value;
    if(id.length <= 0)return;

    id = parseInt(id);
    let books = bookList.filter(book => book.bookId === id);

    let tBody = document.getElementById('tbody-all-books');
    tBody.innerHTML = "";

    books.forEach(function (book) {
        tBody.insertAdjacentHTML('beforeend', `<td>${book.bookId}</td><td>${book.genre}</td><td>${book.price}</td><td>No</td>`);
    });

    //console.log(books);
}

function searchByGenre(){
    let genre = document.getElementById('input-search-genre').value;
    if(genre.length <= 0)return;

    genre = genre.toLowerCase();
    let books = bookList.filter(book => book.genre.toLowerCase() === genre);

    let tBody = document.getElementById('tbody-all-books');
    tBody.innerHTML = "";

    books.forEach(function (book) {
        tBody.insertAdjacentHTML('beforeend', `<td>${book.bookId}</td><td>${book.genre}</td><td>${book.price}</td><td>No</td>`);
    });

    //console.log(books);
}

function searchByPrice(){
    let price = document.getElementById('input-search-price').value;
    if(price.length <= 0)return;

    price = parseInt(price);
    let books = bookList.filter(book => book.price === price);

    let tBody = document.getElementById('tbody-all-books');
    tBody.innerHTML = "";

    books.forEach(function (book) {
        tBody.insertAdjacentHTML('beforeend', `<td>${book.bookId}</td><td>${book.genre}</td><td>${book.price}</td><td>No</td>`);
    });

    //console.log(books);
}

bookList = await fetchBooks();
pageSetup();

//console.log(bookList);
//console.log(searchByGenre("Fantasy"));