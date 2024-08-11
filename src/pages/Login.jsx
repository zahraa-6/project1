import React, { useState } from 'react'; 

function Login() { 
  const [username, setUsername] = useState(''); 
  const [password, setPassword] = useState(''); 

  const handleSubmit = (event) => { 
    event.preventDefault(); 
    // Perform login logic here 
    console.log('Username:', username); 
    console.log('Password:', password); 
    // ... 
  }; 

  return ( 
    <div className="login-container">
      <div className="login-box">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input 
              type="text" 
              id="username" 
              name="username" 
              value={username} 
              onChange={(e) => setUsername(e.target.value)} 
              required 
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input 
              type="password" 
              id="password" 
              name="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
            />
          </div>
          <button type="submit">Submit</button>
        </form>
        <div className="login-with">
          <span>or login with</span>
          <button type="button" className="social-login google">
            <img src="google-icon.svg" alt="Google"/>
          </button>
          <button type="button" className="social-login linkedin">
            <img src="linkedin-icon.svg" alt="LinkedIn"/>
          </button>
        </div>
        <div className="signup-link">
          <span>No Account? create </span>
          <a href="#" className="signup">Signup here</a>
        </div>
      </div>
    </div>
  ); 
} 

export default Login;