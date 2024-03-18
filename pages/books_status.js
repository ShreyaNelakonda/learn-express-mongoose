let BookInstance = require('../models/bookinstance');

function getAllBooks(){
  return ;
}

exports.show_all_books_status = function(res) {
  //return res.send([]);
  BookInstance.find({'status': {$eq: 'Available'}})
      .populate('book')
      .exec()
      .then(books => {
        res.send (books.map(function (bookinstance) {
          return bookinstance.book.title + ": " + bookinstance.status
        }))
      })
      .catch(err => res.send('Status not found'))
}