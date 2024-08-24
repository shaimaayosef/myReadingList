
import './ShowBook.css';

const ShowBook = () => {
  return (
    <div className="show-book-container">
      <div className='right-div'>
        <h2>title</h2>
        <p>author</p>
        <p>year</p>
        <img src="" alt="" />
        <p>description</p>
      </div>
      <div  className="left-div">
        <p>Notes: notes</p>
      </div>
    </div>
  );
};

export default ShowBook;