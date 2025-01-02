const express = require('express');
const path = require('path')
const bookRouter = require('./routes/bookRouter')
const app = express();

app.use('/books',bookRouter)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,"/index.html"));
});


app.listen(3000,()=>{
    console.log("Server started...")
})