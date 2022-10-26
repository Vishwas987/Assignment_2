
var bookList;
var bookListCurrent;
var isSorted = false;

async function fetchBooks(){

    const response = await fetch('book_list.json');
    if(!response.ok){
        throw new Error("HTTP error " + response.status);
    }

    const data = await response.json();
    
    return data;
}

function renderBookList(books){
    let tBody = document.getElementById('tbody-all-books');
    let bookListHtml = "";

    books.forEach(function (book) {
        bookListHtml += `<tr><td>${book.bookId}</td><td>${book.genre}</td><td>${book.price}</td><td>No</td></tr>`;
    });

    tBody.innerHTML = bookListHtml;
}

function pageSetup(){
    document.getElementById ("btn-search-id").addEventListener ("click", searchById, false);
    document.getElementById ("btn-search-genre").addEventListener ("click", searchByGenre, false);
    document.getElementById ("btn-search-price").addEventListener ("click", searchByPrice, false);
    document.getElementById ("book-price-col").addEventListener ("click", sortByPrice, false);

    renderBookList(bookList);
    
    bookListCurrent = bookList;
}

function searchById(){
    let id = document.getElementById('input-search-id').value;
    if(id.length <= 0)return;

    id = parseInt(id);
    bookListCurrent = bookList.filter(book => book.bookId === id);

    renderBookList(bookListCurrent);

    //console.log(books);
}

function searchByGenre(){
    let genre = document.getElementById('input-search-genre').value;
    if(genre.length <= 0)return;

    genre = genre.toLowerCase();
    bookListCurrent = bookList.filter(book => book.genre.toLowerCase() === genre);

    renderBookList(bookListCurrent);

    //console.log(books);
}

function searchByPrice(){
    let price = document.getElementById('input-search-price').value;
    if(price.length <= 0)return;

    price = parseInt(price);
    bookListCurrent = bookList.filter(book => book.price === price);

    renderBookList(bookListCurrent);

    //console.log(books);
}

function sortByPrice(){
    // let asc = true, dsc = true;
    // for(let i = 0; i<bookListCurrent.length-1; i++){ // Check if sorted
    //     if(bookListCurrent[i].price > bookListCurrent[i+1].price){
    //         asc = false;
    //     }
    //     if(bookListCurrent[i].price < bookListCurrent[i+1].price){
    //         dsc = false;
    //     }
    // }

    // if(asc === true || dsc === true){ // If already sorted just reverse
    //     bookListCurrent.reverse();
    // }
    // else { // Else sort in ascending order
    //     //bookListCurrent = bookListCurrent.sort((b1, b2) => (b1.price > b2.price) ? 1 : (b1.price < b2.price) ? -1 : 0);
    //     bookListCurrent = bookListCurrent.sort((b1, b2) => b1.price - b2.price);
    // }

    if(isSorted === false){
        bookListCurrent = bookListCurrent.sort((b1, b2) => b1.price - b2.price);
        isSorted = true;
    }
    else {
        bookListCurrent.reverse();
    }

    renderBookList(bookListCurrent);
}

bookList = await fetchBooks();
//console.log(bookList);
pageSetup();
