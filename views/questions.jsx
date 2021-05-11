import React from 'react'
import question from '../models/questions'
import Layout from './layout'
import '../public/stylesheets/table.css'

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
            {props.questions.map(question => (
            <tbody><tr>
                <td><strong>{question.qWording}</strong></td>
                <td>{question.answer}</td>
                <td>{question.roundType}</td>
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

        {questions}

        
      
    );
  }
  