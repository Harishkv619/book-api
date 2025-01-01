const express = require('express');
const path = require('path')

const app = express();


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,"/index.html"));
});

app.get('/books', (req, res) => {
  res.json([
    { id: 1, title: "1984", author: "George Orwell", year: 1949 },
    { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
    { id: 3, title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 }
  ]);
});

app.get('/books/:id', (req, res) => {
  const bookId = parseInt(req.params.id);
  const books = [
    { id: 1, title: "1984", author: "George Orwell", year: 1949 },
    { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
    { id: 3, title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 }
  ];
  const book = books.find(b => b.id === bookId);
  
  if (book) {
    res.json(book);
  } else {
    res.status(404).json({ message: "Book not found" });
  }
});

app.listen(3000,()=>{
    console.log("Server started...")
})