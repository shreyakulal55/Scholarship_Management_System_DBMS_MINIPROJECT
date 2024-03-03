import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
  });

  const [error, setError] = useState(null); // New state for error handling
  const navigate = useNavigate();

  
const handleLogin = async () => {
  try {
    // Assuming you have an API endpoint for login
    const response = await fetch('http://localhost:5000/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });

    if (response.ok) {
      const data = await response.json();
      // Redirect based on role
      if (data.role === 'faculty') {
        navigate('/faculty/dashboard');
      } else if (data.role === 'student') {
        navigate('/student/dashboard');
      }
    } else {
      const errorData = await response.json(); // Assuming your server returns an error message
      setError(errorData.error || 'Login failed'); // Display error message or default message
    }
  } catch (error) {
    console.error('Login failed:', error);
    setError('An error occurred. Please try again.'); // Display a generic error message
  }
};
  return (
    <div>
      <h2>Login</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>} {/* Display error message if exists */}
      <form>
        <label>
          User Name:
          <input
            type="text"
            value={credentials.username}
            onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={credentials.password}
            onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
          />
        </label>
        <br />
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
