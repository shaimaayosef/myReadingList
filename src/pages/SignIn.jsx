import { useState, useContext } from 'react';
import axios from 'axios';
import bcrypt from 'bcryptjs';
import { AuthContext } from '../services/AuthContext';
import { useNavigate } from 'react-router-dom';
import './Signin.css';

const SignIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      // Fetch user data from the database
      const response = await axios.get('http://localhost:5000/users', {
        params: { name: username }
      });
      const user = response.data[0];

      if (user && await bcrypt.compare(password, user.password)) {
        signIn(user);
        navigate('/');
      } else {
        setError('Invalid username or password');
      }
    } catch (err) {
      console.error(err);
      setError('An error occurred during sign-in');
    }
  };

  return (
    <div className='signin-container'>
      <h2>Sign In</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form className='signin-form' onSubmit={handleSignIn}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default SignIn;