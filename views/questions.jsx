import React from 'react'
import question from '../models/questions'
import Layout from './layout'
import '../public/stylesheets/table.css';

function QuestionTable(props) {
    return (
      <table>
          <thead>
              <tr>
            <th>Question Wording</th>
            <th>Question Answer</th>
            <th>Question Type</th>
            </tr>
          </thead>
        <tbody>
          {
            props.questions.map(question => (
              <tr><td><strong>{question.qWording}</strong></td>
                <td>{question.answer}</td>
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
  