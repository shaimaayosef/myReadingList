import  { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import Book from './Book';
import { AuthContext } from '../services/AuthContext';
import './BookList.css';

const BookList = () => {
  const [books, setBooks] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (user) {
      const fetchBooks = async () => {
        try {
          const response = await axios.get(`http://localhost:5000/books?userId=${user.id}`);
          setBooks(response.data);
        } catch (error) {
          console.error('Error fetching books:', error);
        }
      };

      fetchBooks();
    }
  }, [user]);

  const handleUpdateBook = (updatedBook) => {
    setBooks(prevBooks =>
      prevBooks.map(book =>
        book.id === updatedBook.id ? updatedBook : book
      )
    );
  };
  const handleDelete = (id) => {
    setBooks(books.filter(book => book.id !== id));
  };

  const unreadBooks = books.filter(book => !book.isRead);
  const readBooks = books.filter(book => book.isRead);

  return (
    <div  className="book-list">

      <h2>Unread Books</h2>
      <div className="book-list-container">
        {unreadBooks.map((book, index) => (
          <Book key={index} book={book} onUpdateBook={handleUpdateBook} onDelete={handleDelete}/>
        ))}
      </div>
      <h2>Read Books</h2>
      <div className="book-list-container">
        {readBooks.map((book, index) => (
          <Book key={index} book={book} onUpdateBook={handleUpdateBook} onDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
};

export default BookList;