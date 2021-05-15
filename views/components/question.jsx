import React from 'react';
import Layout from '../layout';
import Message from './message';

function Question(props) {
  let action = "/question/"
  if (props.question) 
    action += props.question._id

  return (
    <Layout title={props.title}>
      <h1>{props.title}</h1>
      <Message messages={props.errors} />
      <form method="POST" action={action}>
        <label>
          <input type="text" name="qWording" required placeholder="Question Wording" value={(props.question)? props.question.qWording : null } />
        </label><br />
        <label>
          <input type="text" name="answer" required placeholder="Answer" value={(props.question)?props.question.answer:null}/>
        </label><br />
        <label>
          <input type="text" name="qType" required placeholder="Question Type" value={(props.question)?props.question.roundType:null}/>
        </label><br />
        <br /> <br />
        <button type="submit">Save</button>
        <br /> <br />
        <a href="/questions/">Cancel</a>
      </form>
    </Layout>
  );
}

module.exports = Question;
