import React from 'react';
import axios from 'axios';
import PayPalButton from './PayPalButton';

const signupClick = () => {
  const userInfo = {
    email: 'email',
    username: 'username',
    password: 'password',
  };

  async function signup() {
    await axios.post('/api/signup', userInfo);
  }

  signup();
};

const loginClick = () => {
  const userInfo = {
    email: 'email',
    username: 'username',
    password: 'password',
  };

  async function login() {
    await axios.post('/api/login', userInfo);
  }

  login();
};

const App = () => (
  <div>
    React is working!
    <div>
      <button onClick={signupClick}>Signup</button>
    </div>
    <div>
      <button onClick={loginClick}>Login</button>
    </div>
    <div>
      <a href="/api/logout">Logout</a>
    </div>
    <div>
      <a href="/api/checkuser">Check User</a>
    </div>
    <div>
      <PayPalButton />
    </div>
  </div>
);

export default App;
