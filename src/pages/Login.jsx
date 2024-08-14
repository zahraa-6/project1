import React, { useState } from 'react';
import styled from 'styled-components';
import { FaGoogle, FaLinkedin } from 'react-icons/fa'; 

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Username:', username);
    console.log('Password:', password);
    // يمكنك إضافة منطق للتحقق أو التوجيه هنا
  };

  return (
    <LoginContainer>
      <LoginBox>
        <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>Login</h1>
        <form onSubmit={handleSubmit}>
          <InputGroup>
            <Label htmlFor="username">Username</Label>
            <Input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </InputGroup>
          <InputGroup>
            <Label htmlFor="password">Password</Label>
            <Input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </InputGroup>
          <Button type="submit">Submit</Button>
        </form>
        <LoginWith>
          <span>or login with</span>
          <div style={{ marginTop: '15px' }}>
            <SocialLoginButton type="button">
              <FaGoogle />
            </SocialLoginButton>
            <SocialLoginButton type="button">
              <FaLinkedin />
            </SocialLoginButton>
          </div>
        </LoginWith>
        <SignupLink>
          <span>No Account? create </span>
          <a href="/signup">Signup here</a>
        </SignupLink>
      </LoginBox>
    </LoginContainer>
  );
}
const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f0f0;
`;

const LoginBox = styled.div`
  background-color: white;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
  width: 350px;
  border: 1px solid #ddd; /* إضافة حدود للوضوح */
`;

const InputGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
  color: #333;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;

  &:focus {
    border-color: #007bff;
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 12px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;

  &:hover {
    background-color: #0056b3;
  }
`;

const LoginWith = styled.div`
  text-align: center;
  margin-top: 25px;
`;

const SocialLoginButton = styled.button`
  margin: 0 10px;
  cursor: pointer;
  background: none;
  border: none;
  font-size: 24px;
  color: #555;

  &:hover {
    color: #007bff;
  }
`;

const SignupLink = styled.div`
  text-align: center;
  margin-top: 15px;

  a {
    color: #007bff;
    text-decoration: none;
    font-weight: bold;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export default Login;