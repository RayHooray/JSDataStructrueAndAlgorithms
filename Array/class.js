function Book(title, pages, isbn) {
  this.title = title
  this.pages = pages
  this.isbn = isbn
}
Book.prototype.printTitle = function() {
  console.log(22222222, this)
  console.log(this.title)
}
let book = new Book('title', 'pag', 'isbn')


class ITBook extends Book {
  constructor(technology, title, pages, isbn){
    super(title, pages, isbn)

    this.technology = technology
  }

  printTitle() {
    console.log(this.technology, this.title, this.pages, this.isbn)
  }
}

let jsBook = new ITBook('JavaScript', '数据结构和算法', 200, 1234567890)

console.log(jsBook.title)

jsBook.printTitle()