import React from 'react';
import Layout from './layout';
import Message from './components/message';

function AddQuestion(props) {
  return (
    <Layout title={props.title}>
      <h1>{props.title}</h1>
      <Message messages={props.errors} />
      <a href="/dashboard/">Dashboard</a> | <a href="/users/profile">Profile</a> | <a href="/logout">Log out</a> | <a href="/questions">Questions</a>
      <form method="POST" action="/addQuestion">
        <label>
          <input type="text" name="qWording" required placeholder="Question Wording" />
        </label><br />
        <label>
          <input type="text" name="qAnswer" required placeholder="Question Answer" />
        </label><br />
        <label>
          <input type="text" name="qType" required placeholder="Question Type" />
        </label>
        <br /> <br />
        <button type="submit">Add Question</button>
        <br /> <br />
        </form>
    </Layout>
  );
}

module.exports = AddQuestion;