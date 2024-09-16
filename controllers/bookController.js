const bookService = require("../services/bookService");

const getBooks = async (req, res) => {
  try {
    const books = await bookService.getBooks(req.query);
    res.status(200).json(books);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to retrieve books", error: error.message });
  }
};

const getBookById = async (req, res) => {
  try {
    const book = await bookService.getBookById(req.query.id);
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }
    res.status(200).json(book);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to retrieve book", error: error.message });
  }
};


const createBook = async (req, res) => {
  try {
    const { title, author, genre, publishedDate, price, language } = req.body;

    const bookData = {
      title,
      author,
      genre,
      publishedDate,
      price,
      language,
    };

    const book = await bookService.createBook(bookData);
    res.status(201).json(book);
  } catch (error) {
    res
      .status(400)
      .json({ message: "Failed to create book", error: error.message });
  }
};

const updateBook = async (req, res) => {
  try {
    const { id, ...bookData } = req.body;
    if (!id) {
      return res.status(400).json({ message: "Book ID is required" });
    }

    const book = await bookService.updateBook(id, bookData);
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }
    res.status(200).json(book);
  } catch (error) {
    res
      .status(400)
      .json({ message: "Failed to update book", error: error.message });
  }
};

const deleteBook = async (req, res) => {
  try {
    console.log("Attempting to delete book with ID:", req.params.id);
    const book = await bookService.deleteBook(req.params.id);
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }
    res.status(200).json({ message: "Book deleted successfully" });
  } catch (error) {
    console.log("Error deleting book:", error.message); 
    res
      .status(500)
      .json({ message: "Failed to delete book", error: error.message });
  }
};

module.exports = {
  getBooks,
  getBookById,
  createBook,
  updateBook,
  deleteBook,
};
