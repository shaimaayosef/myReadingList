import { Link } from "react-router-dom"
import { useContext } from 'react';
import { AuthContext } from '../services/AuthContext';
import { useNavigate } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  const { signOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut();
    navigate('/signin');
  };
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/signin">Sign In</Link>
        </li>
        <li>
          <Link to="/signup">Sign Up</Link>
        </li>
        <li>
          <Link to="/signin" onClick={handleSignOut}>Sign out</Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar