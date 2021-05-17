import React from 'react';
import question from '../models/questions';
import Layout from './layout';


function QuestionTable(props){
  return (
    <table class="table table-hover table-dark">
      <thead>
        <tr>
          {props.user.userType==="Quiz Master"? <th scope="col">Question Wording <br/>Click on a question to edit it</th> :<th scope="col">Question Wording</th>}
          {props.user.userType==="Quiz Taker"? null :<th>Answer</th>}
          <th scope="col">Question Type</th>
          {props.user.userType==="Quiz Master"?<th>Delete?</th> : null}
        </tr>
      </thead>
      <tbody>
        {
          props.questions.map(question => (
            <tr>
          {props.user.userType==="Quiz Master"?<td><a style={{textDecoration: "none", color: "white"}} href={"/question/" + question._id}>{question.qWording}</a></td> : <td>{question.qWording}</td>}
          {props.user.userType==="Quiz Taker"? null : <td>{question.answer}</td>}
          <td>{question.roundType}</td>
          {props.user.userType==="Quiz Master"?<td><form method="POST" action={`/deletequestion?id=${question._id}`}><button class="btn btn-secondary">Delete</button></form></td> : null}
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
        <div class="container-fluid">
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
        {questions}
      </div>
      </Layout>
    );
  }
  