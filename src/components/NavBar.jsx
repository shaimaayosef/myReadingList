import { Link } from "react-router-dom"
import { useContext } from 'react';
import { AuthContext } from '../services/AuthContext';
import { useNavigate } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  const { signOut, user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut();
    navigate('/signin');
  };
  return (
    <nav>
      <div className="right">
        <Link to="/">Home</Link>
      </div>
      <div className="left">
        {!user && (
          <>
            <Link to="/signin">Sign In</Link>
            <Link to="/signup">Sign Up</Link>
          </>
        )}
        {user && (
          <>
            <span className="welcome">Welcome, {user.name}</span>
            <Link to="/signin" onClick={handleSignOut}>Sign out</Link>
          </>
        )}
      </div>
    </nav>
    )
}

export default NavBar