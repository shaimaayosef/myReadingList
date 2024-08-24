
import './Signup.css';

const SignUp = () => {
  return (
    <div  className="signup-container">

      <h2>Sign Up</h2>
      <form className='signup-form'>
        <input
          type="text"
          placeholder="Username"
          value=""
          required
        />
        <input
          type="email"
          placeholder="Email"
          value=""
          required
        />
        <input
          type="password"
          placeholder="Password"
          value=""
          required
        />
        <button>Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;