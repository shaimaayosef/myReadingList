import BookList from '../components/BookList'
import { Link } from 'react-router-dom'
import { FaPlus } from 'react-icons/fa';
import './Home.css';



const Home = () => {
  return (
    <div className="container">
    <div className="add-book-link">
      <Link to="/addbook">
        <FaPlus /> Add Book
      </Link>
    </div>
      <BookList />
  </div>
  )
}

export default Home