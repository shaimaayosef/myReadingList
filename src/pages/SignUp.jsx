// src/components/SignUp.jsx
import { useState } from 'react';
import axios from 'axios';
import bcrypt from 'bcryptjs';
import { useNavigate } from 'react-router-dom';
import './Signup.css';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      // Check if username or email already exists
      const usersResponse = await axios.get('http://localhost:5000/users');
      const users = usersResponse.data;
      const userExists = users.some(user => user.name === username || user.email === email);

      if (userExists) {
        setError('Username or email already exists');
        return;
      }

      // Encrypt the password
      const hashedPassword = await bcrypt.hash(password, 10);

      // Add new user to db.json
      const newUser = { name: username, email, password: hashedPassword };
      await axios.post('http://localhost:5000/users', newUser);

      // Redirect to SignIn page
      navigate('/signin');
    } catch (err) {
      console.error(err);
      setError('An error occurred during sign-up');
    }
  };

  return (
    <div  className="signup-container">

      <h2>Sign Up</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form className='signup-form' onSubmit={handleSignUp}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;