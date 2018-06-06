const express = require("express");
const bodyParser = require("body-parser");
const bc = require("./controllers/booksCtrl");

//create server using express
const app = express();

app.use(bodyParser.json());
app.use(express.static("./build"));

app.get("/api/books", bc.getBooks);
app.post("/api/books", bc.addBook);
app.put("/api/books/:id", bc.update);
app.delete("/api/books/:id", bc.deleteBook);

const port = 3000;
app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});

// this is a basic express server
