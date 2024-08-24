import BookList from '../components/BookList'
import { Link } from 'react-router-dom'
import { FaPlus } from 'react-icons/fa'; // Import FaPlus from the react-icons/fa library
import PrivateRoute from '../services/PrivateRoute';
import './Home.css';



const Home = () => {
  return (
    <div className="container">
    <div className="add-book-link">
      <Link to="/addbook">
        <FaPlus /> Add Book
      </Link>
    </div>
    <PrivateRoute>
      <BookList />
    </PrivateRoute>
  </div>
  )
}

export default Home