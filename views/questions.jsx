import React from 'react';
import question from '../models/questions';
import Layout from './layout';


function QuestionTable(props){
  return (
    <table class="table table-hover table-dark">
      <thead>
        <tr>
          <th scope="col">Question Wording</th>
          {props.user.userType==="Quiz Taker"? null :<th>Answer</th>}
          <th scope="col">Question Type</th>
        </tr>
      </thead>
      <tbody>
        {
          props.questions.map(question => (
            <tr>
          <td>{question.qWording}</td>
          {props.user.userType==="Quiz Taker"? null : <td>{question.answer}</td>}
          <td>{question.roundType}</td>
        </tr>
          ))
        }
      </tbody>
    </table>
    
  )
}
  
  export default function Questions(props) {
    let questions;
    if (props.questions.length > 0) 
      questions = <QuestionTable 
        questions={props.questions} 
        user={props.user}/>
    else
      questions = <p>No questions found. <a href="/addQuestion">Add a new question</a></p>
  
    return (
      <Layout title={props.title}>
        <h1>{props.title}</h1>
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
        <h3>All Questions</h3>
        {questions}
      </Layout>
    );
  }
  