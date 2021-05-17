import React from 'react';
import Layout from './layout';
import Message from './components/message';

function AddQuestion(props) {
  return (
    <Layout title={props.title}>
      <div class="container-fluid">
      <ul class="nav nav-pills">
          <li class="nav-item">
            <a class="nav-link" href="/dashboard/">Dashboard</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/users/profile">Profile</a>
          </li> 
          <li class="nav-item">
            <a class="nav-link active" href="/addQuestion">Add Question</a> 
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/questions">Questions</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/logout">Log out</a>  
          </li>
        </ul>
        <h1>{props.title}</h1>
      <Message messages={props.errors} />
      <form method="POST" action="/addQuestion">
        <label style={{width: "50%"}}>
          <input type="text" name="qWording" required placeholder="Question Wording" style={{width: "100%"}}/>
        </label><br /><br />
        <label style={{width: "25%"}}>
          <input type="text" name="answer" required placeholder="Question Answer" style={{width: "100%"}}/>
        </label><br /><br />
        <label style={{width: "25%"}}>
          <input type="text" name="roundType" required placeholder="Question Type" style={{width: "100%"}}/>
        </label>
        <br /> <br />
        <button type="submit" class="btn btn-dark">Add Question</button>
        <br /> <br />
        </form>
      </div>
    </Layout>
  );
}

module.exports = AddQuestion;