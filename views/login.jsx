import React from 'react';
import Layout from './layout';
import Message from './components/message'

function Login(props) {
  return (
    <Layout title={props.title}>
      <div class="container-fluid">
      <h1>Log in</h1>
      <Message messages={props.errors} />
      <form method="POST" action="/login">
        <label>Email:
          <br /><input type="text" name="email" required placeholder="Email" />
        </label><br />
        <label>Password:
          <br /><input type="password" name="password" required placeholder="Password" />
        </label>
        <br /><br />
        <button type="submit" class="btn btn-dark">Log in</button> <br />
        <h2>Don't have an account yet? <a href="/register">Sign up</a>
        </h2>
      </form>
    </div>
    </Layout>
  );
}

module.exports = Login;