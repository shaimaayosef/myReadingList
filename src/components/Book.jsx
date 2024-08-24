
import { FaEdit, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Book.css' 

const Book = () => {
 

  return (
    <div className="book"> 
      <div className='img-div'>
        <Link to="">
          <img src="" alt=""  className="book-cover" />
        </Link>
      </div>
      <h3 className="book-title">title</h3>
      <p className="book-author">author</p>
      <div className="book-actions">
        <Link to="">
          <FaEdit />
        </Link>
        <button className="delete-button" >
          <FaTrash />
        </button>
      </div>
      <input
        type="checkbox"
        checked=""
        onChange=""
      />
    </div>
  );
};

export default Book;