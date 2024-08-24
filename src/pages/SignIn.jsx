
import './Signin.css';

const SignIn = () => {
  return (
    <div className='signin-container'>
      <h2>Sign In</h2>
      <form className='signin-form'>
        <input
          type="text"
          placeholder="Username"
          value=""
          required
        />
        <input
          type="password"
          placeholder="Password"
          value=""
          required
        />
        <button>Sign In</button>
      </form>
    </div>
  );
};

export default SignIn;