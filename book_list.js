// function getRandomInt(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is exclusive and the minimum is inclusive
//   }

// var book_List = [];

// var genre_list = ["Adventure", "Fantasy", "Biography", "Sci-Fiction", "Dystopian", "Drama", "Horror", "Romance"];

// // ToDo import file from local
// function populateList(){
//     for(let i = 0; i<100; i++){
//         book_List.push({
//             bookId: 1000 + i + 1,
//             genre: genre_list[getRandomInt(0,7)],
//             price: getRandomInt(100,500)
//         })
//     }
// }

// populateList();

// //export {bookList};

// var textFile = null;

// function makeTextFile(text) {
//     var data = new Blob([text], {type: 'text/plain'});

//     // If we are replacing a previously generated file we need to
//     // manually revoke the object URL to avoid memory leaks.
//     if (textFile !== null) {
//       window.URL.revokeObjectURL(textFile);
//     }

//     textFile = window.URL.createObjectURL(data);

//     // returns a URL you can use as a href
//     return textFile;
//   }

//   var file_link = makeTextFile(JSON.stringify(book_List));
//   console.log(file_link);