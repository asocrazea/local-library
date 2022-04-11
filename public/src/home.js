function getTotalBooksCount(books) {

  return books.length;
  }
  
  function getTotalAccountsCount(accounts) {
  
    return accounts.length
  }
  
  function getBooksBorrowedCount(books) {
    return books.filter(({borrows}) =>borrows[0].returned == false).length
  }
  
  function getMostCommonGenres(books) {
    let genres = books.reduce((acc, book) => {
      if(acc[book.genre]) {
        acc[book.genre]++
      } else {
        acc[book.genre] = 1
      }
      return acc
    },{})
    
    let array = []
    for(key in genres) {
      array.push({
        name:key,
        count:genres[key]
      })
    }
    
    return array.sort((a, b) => b.count - a.count).slice(0, 5)
  }
  
  function getMostPopularBooks(books) {
    let bookCount = books.sort((a, b) => b.borrows.length - a.borrows.length).slice(0, 5).map(item => {
      return {
        name:item.title,
        count:item.borrows.length
      }
    })
    return bookCount;
  
  }
  
  function getMostPopularAuthors(books, authors) {
    let authorCount = authors.map(author =>  {
      return {
        name:author.name.first + " " + author.name.last,
        count:books.filter((book) => book.authorId == author.id).reduce((acc, book) => acc + book.borrows.length, 0)
      }
    })
    .sort((a, b) => b.count - a.count).slice(0, 5)
    return authorCount
  }
  
  module.exports = {
    getTotalBooksCount,
    getTotalAccountsCount,
    getBooksBorrowedCount,
    getMostCommonGenres,
    getMostPopularBooks,
    getMostPopularAuthors,
  };
  