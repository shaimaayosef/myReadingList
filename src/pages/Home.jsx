import BookList from '../components/BookList';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaPlus, FaSearch } from 'react-icons/fa';
import PrivateRoute from '../services/PrivateRoute';
import './Home.css';
import Book from '../components/Book';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/books');
      const books = await response.json();
      const results = books.filter(
        (book) =>
          book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          book.author.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSearchResults(results);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  return (
    <div className="container">
      <div className="add-book-link">
        <Link to="/addbook">
          <FaPlus /> Add Book
        </Link>
      </div>
      <form onSubmit={handleSearchSubmit} className="search-form">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search..."
          className="search-input"
        />
        <button type="submit" className="search-button">
          <FaSearch />
        </button>
      </form>
      <PrivateRoute>
        {searchResults.length > 0 ? (
          <div className="search-results">
            {searchResults.map((book, index) => (
             <Book key={index}  book={book} />

            ))}
          </div>
        ) : (
          <BookList />
        )}
      </PrivateRoute>
    </div>
  );
};

export default Home;