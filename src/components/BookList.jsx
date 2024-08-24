
import Book from './Book';
import './BookList.css';

const BookList = () => {
  return (
    <div  className="book-list">
      <h2>Unread Books</h2>
      <div className="book-list-container">
       
          <Book />
       
      </div>
    </div>
  );
};

export default BookList;