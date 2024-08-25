import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './ShowBook.css';

const ShowBook = () => {
  const [book,setBook] = useState(null);
  const { id } = useParams();

  

  useEffect(() => {
    axios.get(`http://localhost:5000/books/${id}`)
    .then((res)=>{
      setBook(res.data);
    })
    .catch((error)=>{
      console.log(error);
    })
  }, [id]);
  if (!book) {
    return <div>Loading...</div>;
  }
  
 //handelDelete function
  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:5000/books/${book.id}`);
      window.location.href = "/";
    } catch (error) {
      console.error('Error deleting book:', error);
    }
  };
  return (
    <div className="show-book-container">
       <div className="actions">
        <Link to={`/editbook/${book.id}`}>
          <FaEdit />
        </Link>
        <button className="delete-button" onClick={handleDelete}>
          <FaTrash />
        </button>
      </div>
      <div className='right-div'>
        <h2>{book.title}</h2>
        <p>{book.author}</p>
        <p>{book.year}</p>
        <img src={book.image} alt={book.title} />
        <p>{book.description}</p>
      </div>
      {/* <p>Status: {book.isRead ? 'Read' : 'Not Read'}</p> */}
      <div  className="left-div">
        <p>Notes: {book.notes}</p>
      </div>
    </div>
  );
};

export default ShowBook;