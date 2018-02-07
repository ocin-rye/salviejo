import React, { Component } from 'react';
import axios from 'axios';
import PayPalButton from './PayPalButton'

class App extends Component {
  signupClick() {
    const userInfo = {
      email: "email",
      username: "username",
      password: "password"
    }

    async function signup() {
      await axios.post('/api/signup', userInfo);
    }

    signup();
  }

  loginClick() {
    const userInfo = {
      email: "email",
      username: "username",
      password: "password"
    }

    async function login() {
      await axios.post('/api/login', userInfo);
    }

    login();
  }

  render() {
    return (
      <div>
        React is working!
        <div>
          <button onClick={this.signupClick}>
            Signup
          </button>
        </div>
        <div>
          <button onClick={this.loginClick}>
            Login
          </button>
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
  }
}

export default App;
