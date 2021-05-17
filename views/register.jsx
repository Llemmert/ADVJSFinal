import React from 'react';
import Layout from './layout';
import Message from './components/message';

function Register(props) {
  return (
    <Layout title={props.title}>
      <div class="container-fluid">
      <h1>{props.title}</h1>
      <Message messages={props.errors} />
      <form method="POST" action="/register">
        <label>
          <input type="text" name="firstName" required placeholder="First Name" />
        </label><br /><br />
        <label>
          <input type="text" name="lastName" required placeholder="Last Name" />
        </label><br /><br />
        <label>
          <input type="text" name="email" required placeholder="Email" />
        </label><br /><br />
        <label>
          <input type="password" name="password" required placeholder="Password" />
        </label><br /><br />
        <label>
          <input type="password" name="password1" required placeholder="Re-enter password" />
        </label>
        <br /><br />
        <label>
          <select type="text" name="userType" required placeholder="User Type">
          <option value="Quiz Taker" selected hidden disabled>Select a User Type</option>
            <option value="Quiz Master">Quiz Master</option>
            <option value="Quiz Host">Quiz Host</option>
            <option value="Quiz Taker">Quiz Taker</option>
          </select>
        </label><br /><br />
        <button type="submit" class="btn btn-dark">Sign up</button>
        <br /> <br />
        <h2>Already have an account? <a href="/login">Log in</a></h2>
      </form>
      </div>
    </Layout>
  );
}

module.exports = Register;

