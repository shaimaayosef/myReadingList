import { Link } from "react-router-dom"
import './NavBar.css';

const NavBar = () => {
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
          <Link to="/signin" >Sign out</Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar