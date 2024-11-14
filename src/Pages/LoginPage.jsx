import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { auth } from '../firebase';

function LoginPage() {
  const [err, setErr] = useState(null);
  const navigate = useNavigate();

  // Handle form submit
  async function handleSubmit(e) {
    e.preventDefault();

    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (err) {
      setErr("Incorrect email or password. Please try again."); // Set a specific error message
    }
  }

  return (
    <div className='formContainer'>
      <div className="form-rapper">
        <span className="logo">Shareef Chat</span>
        <span className="title">Login</span>
        <form onSubmit={handleSubmit}>
          <input type='email' placeholder='Email' />
          <input type='password' placeholder='Password' />
          <button>Sign in</button>
          {err && <span className="error-message">{err}</span>} {/* Styled error message */}
        </form>
        <p> You don't have an account? <Link to='/Register'>Register</Link> </p>
      </div>
    </div>
  );
}

export default LoginPage;
