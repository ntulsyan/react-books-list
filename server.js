const express = require('express');
const path = require('path');
const app = express();
const books = require('./books.json');

app.use('/static', express.static(path.join(__dirname, 'build/static')))
app.use(express.static(path.join(__dirname, 'build')));

app.get('/api/books', (req, res) => {
    res.json(books);
});

app.get('/api/book/:bookId', (req, res) => {
    const { bookId } = req.params;
    const details = books.filter(book => book.isbn === bookId);
    
    const {title, year, description} = details[0];
    res.json({title, year, description});
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build/index.html'));
});

app.listen(4000, () => {
    console.log('Server started on port 4000');
})
