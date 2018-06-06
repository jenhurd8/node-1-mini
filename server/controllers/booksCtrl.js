let books = [];
let id = 0;

const getBooks = (req, res, next) => {
  if (!books.length) {
    res.status(200).send({ message: "No Books Available" });
  } else {
    res.status(200).send(books);
  }
};

const addBook = (req, res, next) => {
  if (!req.body.title || !req.body.author) {
    res.status(500).send({ message: "Malformed Request" });
  } else {
    const book = {
      ...req.body,
      id
    };
    books.push(book);
    id++;
    res.status(200).send(books);
  }
};

const deleteBook = (req, res, next) => {
  if (!books.length) {
    res.status(500).send({ message: "No Books Available" });
  } else {
    books = books.filter(val => val.id != parseInt(req.params.id));
    res.status(200).send(books);
  }
};

const update = (req, res, next) => {
  let index = null;
  books.forEach((book, i) => {
    if (book.id === Number(req.params.id)) index = i;
  });
  books[index] = {
    id: books[index].id,
    title: req.body.title || books[index].title,
    author: req.body.author || books[index].author
  };
  res.status(200).send(books);
};

module.exports = {
  getBooks: getBooks,
  //getBooks
  //alone is JavaScript property shorthand and dont need to write twice
  addBook: addBook,
  deleteBook,
  update
};
