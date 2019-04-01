const express = require('express');
const app = express();
const bc = require('./controllers/books_controller')

app.use(express.json())
app.get('/api/books', bc.read) 
app.post('/api/books', bc.create)


app.listen(4000, () => console.log('hello'))