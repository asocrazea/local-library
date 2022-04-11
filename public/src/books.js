function findAuthorById(authors, id) {
  return getById(authors, id)
}

function findBookById(books, id) {
  return getById(books, id)
}

function partitionBooksByBorrowedStatus(books) {
  let borrowBooks = books.filter(({borrows}) => borrows[0].returned == false)
  let returnBooks = books.filter(({borrows}) => borrows[0].returned == true)
  return [borrowBooks, returnBooks]

}

function getBorrowersForBook(book, accounts) {
  return book.borrows.map(borrow => {
  let count = getById(accounts, borrow.id)
  count.returned = borrow.returned
  return count;
  }).slice(0,10)
  
}
 function getById (array, id) {
   return array.find((item) => item.id == id)
 }
module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
