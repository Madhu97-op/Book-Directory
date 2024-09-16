const Book = require('../models/book');

const getBooks = async (query) => {
  const filters = {};

  if (query.search && query.search.trim() !== '') {
    filters.title = { $regex: query.search.trim(), $options: 'i' }; 
  }

  return await Book.find(filters);
};



const getBookById = async (id) => {
  return await Book.findById(id);
};

const createBook = async (bookData) => {
  const book = new Book(bookData);
  return await book.save();
};

const updateBook = async (id, bookData) => {
  return await Book.findByIdAndUpdate(id, bookData, { new: true });
};
const deleteBook = async (id) => {
  return await Book.findByIdAndDelete(id);
};

module.exports = {
  getBooks,
  getBookById,
  createBook,
  updateBook,
  deleteBook
};
