function findAccountById(accounts, id) {
  return accounts.find((accounts) => accounts.id === id)
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((a, b) => a.name.last.toLowerCase() < b.name.last.toLowerCase() ? -1 :1) 
}

function getTotalNumberOfBorrows(account, books) {
  let total = books.reduce((total, book) => book.borrows.filter(borrow => borrow.id == account.id).length + total, 0)
  return total;
}

function getBooksPossessedByAccount(account, books, authors) {
  let result = books.filter((book) => book.borrows[0].id == account.id)
  .map(book => {
    book.author = authors.find(author => author.id == book.authorId)
    return book;
  } )
  return result;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};