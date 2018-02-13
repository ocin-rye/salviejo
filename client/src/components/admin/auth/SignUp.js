import React from 'react';
import axios from 'axios';

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

const SignUp = () => (
  <div>
    <div>
      <button onClick={signupClick}>Signup</button>
    </div>
    <div>
      <a href="/api/checkuser">Check User</a>
    </div>
  </div>
);

export default SignUp;
