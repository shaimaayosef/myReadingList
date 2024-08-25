import { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../services/AuthContext';
import { useNavigate } from 'react-router-dom';
import './Form.css';

const EditBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [image, setImage] = useState('');
  const [year, setYear] = useState('');
  const [description, setDescription] = useState('');
  const [notes, setNotes] = useState('');
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const { id } = useParams();
  const [books, setBooks] = useState([]);
  
  useEffect(() => {
    axios.get(`http://localhost:5000/books/${id}`)
    .then((res)=>{
      setTitle(res.data.title);
      setAuthor(res.data.author);
      setImage(res.data.image);
      setYear(res.data.year);
      setDescription(res.data.description);
      setNotes(res.data.notes);
    })
    .catch((error)=>{
      console.log(error);
    })
  }, [id]);

  if (!books) {
    return <div>Loading...</div>;
  }
  const handleEditBook = async (updatedBook) => {
    try {
      const response = await axios.put(`http://localhost:5000/books/${id}`, updatedBook);
      setBooks(books.map(book => book.id === id ? response.data : book));
      navigate('/');
    } catch (error) {
      console.error('Error updating book:', error);
    }
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
      const response = await axios.put(`http://localhost:5000/books/${id}`, newBook);
      handleEditBook(response.data);
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

    <form className='form-div' onSubmit={handleSubmit}>
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
    <button type="submit">Edit</button>
  </form>
  </div>
  );
};

export default EditBook;