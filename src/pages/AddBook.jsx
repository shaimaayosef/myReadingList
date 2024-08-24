
import './Form.css';


const AddBook = () => {
  
  return (
    <div  className="form-container">

      <form >
        <div>
          <label>Title:</label>
          <input type="text" value=""  required />
        </div>
        <div>
          <label>Author:</label>
          <input type="text" value=""  required />
        </div>
        <div>
          <label>Image URL:</label>
          <input type="text" value="" required />
        </div>
        <div>
          <label>Year:</label>
          <input type="number" value="" required />
        </div>
        <div>
          <label>Description:</label>
          <textarea value=""  required />
        </div>
        <div>
          <label>Notes:</label>
          <textarea value="" />
        </div>
        <button>Add Book</button>
      </form>
    </div>
  );
};

export default AddBook;