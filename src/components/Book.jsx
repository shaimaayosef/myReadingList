import PropTypes from 'prop-types';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { useContext } from 'react';
import { AuthContext } from '../services/AuthContext';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Book.css' 

const Book = ({ book, onUpdateBook, onDelete }) => {
  const { user } = useContext(AuthContext);

  const handleCheckboxChange = () => {
    const updatedBook = { ...book, isRead: !book.isRead, userId: user.id };
    fetch('http://localhost:5000/books/' + book.id, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedBook),
    })
      .then(response => response.json())
      .then(() => {
        onUpdateBook(updatedBook); // Call the callback function to update the lists
      })
      .catch(error => {
        console.error('Error updating book:', error);
      });
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:5000/books/${book.id}`);
      onDelete(book.id);
    } catch (error) {
      console.error('Error deleting book:', error);
    }
  };

  return (
    <div className="book"> 
      <div className='img-div'>
        <Link to={`showbook/${book.id}`}>
          <img src={book.image} alt={`${book.title} cover`} className="book-cover" />
        </Link>
      </div>
      <h3 className="book-title">{book.title}</h3>
      <p className="book-author">{book.author}</p>
      <div className="book-actions">
        <Link to={`editbook/${book.id}`}>
          <FaEdit />
        </Link>
        {onDelete ? (
          <button className="delete-button" onClick={handleDelete}>
            <FaTrash />
          </button>
        ) : ""}
      </div>
      {onUpdateBook?(<label className='custom-checkbox'>
      <input
        type="checkbox"
        checked={book.isRead}
        onChange={handleCheckboxChange}
      />
      <span className="checkmark"></span>
      </label>):""}
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.object.isRequired,
  onUpdateBook: PropTypes.func,
  onDelete: PropTypes.func,
};

export default Book;