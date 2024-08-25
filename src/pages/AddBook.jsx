import  { useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../services/AuthContext';
import { useNavigate } from 'react-router-dom';
import './Form.css';


const AddBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [image, setImage] = useState('');
  const [year, setYear] = useState('');
  const [description, setDescription] = useState('');
  const [notes, setNotes] = useState('');
  const { user } = useContext(AuthContext);
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();

  const handleAddBook = (newBook) => {
    setBooks([...books, newBook]);
    navigate('/');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) {
      console.error('User not authenticated');
      return;
    }

    const newBook = {
      title,
      author,
      image,
      year: parseInt(year, 10),
      description,
      isRead: false,
      notes,
      userId: user.id,
    };

    try {
      const response = await axios.post('http://localhost:5000/books', newBook);
      handleAddBook(response.data);
      // Clear form fields
      setTitle('');
      setAuthor('');
      setImage('');
      setYear('');
      setDescription('');
      setNotes('');
    } catch (error) {
      console.error('Error adding book:', error);
    }
  };

  return (
    <div  className="form-container">

      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </div>
        <div>
          <label>Author:</label>
          <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} required />
        </div>
        <div>
          <label>Image URL:</label>
          <input type="text" value={image} onChange={(e) => setImage(e.target.value)} required />
        </div>
        <div>
          <label>Year:</label>
          <input type="number" value={year} onChange={(e) => setYear(e.target.value)} required />
        </div>
        <div>
          <label>Description:</label>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
        </div>
        <div>
          <label>Notes:</label>
          <textarea value={notes} onChange={(e) => setNotes(e.target.value)} />
        </div>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddBook;