// Declare a books array for test purposes
const books = [
   {
     title: 'Book',
     author: 'Name'
   },
   {
     title: 'Book2',
     author: 'Name2'
   }
 ];

 //Declare a function that takes the  books array as a parameter
const getTheTitles = function(books) {

   //initiate array to hold book titles
      const titlesArray = [];
   
   //Add for loop to push the title value for all books in books array to titlesArray
     for (let book of books){
        titlesArray.push(book.title)
     }
     return(titlesArray);
 };

//  getTheTitles(books)

// Do not edit below this line
module.exports = getTheTitles;
