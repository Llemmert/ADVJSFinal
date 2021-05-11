import React from 'react';
import question from '../models/questions';
import Layout from './layout';

function QuestionTable(props) {
    return (
      <table class="table">
          <thead id="thead">
              <tr id="tr">
                <th id ="th">Question Wording</th>
                <th id ="th">Question Answer</th>
                <th id ="th">Question Type</th>
              </tr>
          </thead>
            {props.questions.map(question => (
            <tbody id="tbody"><tr id="tr">
                <td id="td"><strong id="strong">{question.qWording}</strong></td>
                <td id="td">{question.answer}</td>
                <td id="td">{question.roundType}</td>
            </tr></tbody> 
            ))}
      </table>
    )
  }
  
  export default function Questions(props) {
    let questions;
    if (props.questions.length > 0) 
      questions = <QuestionTable questions={props.questions} />
    else
      questions = <p>No questions found. <a href="/addQuestion">Add a new question</a></p>
  
    return (
      <Layout title={props.title}>
        <h1>{props.title}</h1>
        <a href="/dashboard/">Dashboard</a> | <a href="/users/profile">Profile</a> | <a href="/course/">New Course</a> | <a href="/logout">Log out</a> | <a href="/addQuestion">New Question</a>
        <h3>All Questions</h3>
        {questions}
      </Layout>
    );
  }
  