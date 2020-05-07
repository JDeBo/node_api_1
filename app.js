const express = require('express');
// const mongoose = require('mongoose');

const app = express();
// const db = mongoose.connect('mongodb://localhost:27018/booksAPI');
// const bookRouter = express.Router();
const port = process.env.PORT || 3000;
// const Book = require('./models/bookModel')
//
// bookRouter.route('/books')
//   .get((req, res) => {
//     const { query } = {};
//     if (req.query.genre){
//       query.genre = req.query.genre;
//     }
//     Book.find(query, (err, books) => {
//       if(err){
//         return res.send(err);
//       }
//       return res.json(books);
//     });
//   });
//  // .post()
//  bookRouter.route('/books/:bookId')
//    .get((req, res) => {
//
//      Book.findById(req.params.bookId, (err, book) => {
//        if(err){
//          return res.send(err);
//        }
//        return res.json(book);
//      });
//    });
//
// app.use('/api', bookRouter);

app.get('/', (req, res) => {
  res.send('Welcome home RJ');
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
