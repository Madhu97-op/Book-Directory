const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
  publishedDate: {
    type: Date,
  },
  price: {
    type: Number,
    required: true, 
  },
  language: {
    type: String,
    default: 'English', 
  },
}, {
  timestamps: true,// This option automatically adds createdAt and updatedAt field
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
