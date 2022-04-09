function findAuthorById(authors, id) {
  return authors.find((authors) => authors.id === id)
}

function findBookById(books, id) {
  return books.find((books) => books.id === id)
}

function partitionBooksByBorrowedStatus(books) {
  let borrowBooks = books.filter(book => book.borrows[0].returned == false)
  let returnBooks = books.filter(book => book.borrows[0].returned == true)
  return [borrowBooks, returnBooks]

}

function getBorrowersForBook(book, accounts) {
  return book.borrows.map(borrow => {
  let count = accounts.find(account => account.id == borrow.id)
  count.returned = borrow.returned
  return count;
  }).slice(0,10)
  
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
