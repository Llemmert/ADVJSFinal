import React from 'react';
import Layout from '../layout';
import Message from './message';

function Question(props) {
  let action = "/question/"
  if (props.question) 
    action += props.question._id

  return (
    <Layout title={props.title}>
      <ul class="nav nav-pills">
          <li class="nav-item">
            <a class="nav-link" href="/dashboard/">Dashboard</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/users/profile">Profile</a>
          </li> 
          {props.user.userType==="Quiz Master"? <li class="nav-item"><a class="nav-link" href="/addQuestion">Add Question</a> </li> : null}
          <li class="nav-item">
            <a class="nav-link active" href="/questions">Questions</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/logout">Log out</a>  
          </li>
        </ul>
      <h1>{props.title}</h1>
      <Message messages={props.errors} />
      <form method="POST" action={action}>
        <label style={{width: "50%"}}>
          <input type="text" name="qWording" style={{width: "100%"}} required placeholder="Question Wording" value={(props.question)? props.question.qWording : null } />
        </label><br /><br />
        <label style={{width: "25%"}}>
          <input type="text" name="answer" style={{width: "100%"}} required placeholder="Answer" value={(props.question)? props.question.answer : null}/>
        </label><br /><br />
        <label style={{width: "25%"}}>
          <input type="text" name="roundType" style={{width: "100%"}} required placeholder="Question Type" value={(props.question)? props.question.roundType : null}/>
        </label><br />
        <br />
        <button type="submit" class="btn btn-dark">Save</button>
        <br /> <br />
        <a href="/questions/">Cancel</a>
      </form>
    </Layout>
  );
}

module.exports = Question;
