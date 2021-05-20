import React from 'react';
import question from '../models/questions';
import Layout from './layout';

function RoundModel(props) {
    this.questions = props.questions;
    this.user = props.user;
    var qNumber = props.qNumber;
    return (
      <table class="table table-hover table-dark">
        <thead>
          <tr>
            <th scope="col">Question Wording</th>
            {this.user.userType==="Quiz Taker"? null :<th>Answer</th>}
            <th scope="col">Question Type</th>
          </tr>
        </thead>
        <tbody>
          {
            this.questions.map(question => (
              <tr>
            <td>{question.qWording}</td>
            {this.user.userType==="Quiz Taker"? null : <td>{question.answer}</td>}
            <td>{question.roundType}</td>
          </tr>
            ))
          }
        </tbody>
      </table>
    )
  };

function AudioModel(props) {
    var user = props.user;
    var questions = props.questions;
    var qClass= "Audio";
    return (
        <table class="table table-hover table-dark">
          <thead>
            <tr>
              <th scope="col">Question Wording</th>
              <th scope="col">Sound Clip</th>
              {user.userType==="Quiz Taker"? null :<th>Answer</th>}
              <th scope="col">Question Type</th>
            </tr>
          </thead>
          <tbody>
            {
              questions.map(question => (
                <tr>
              <td>{question.qWording}</td>
              <td><audio controls><source src={question.qLink}/></audio></td>
              {user.userType==="Quiz Taker"? null : <td>{question.answer}</td>}
              <td>{question.roundType}</td>
            </tr>
              ))
            }
          </tbody>
        </table>
      )
    }



export default function TableFactory(props) {
    var qTable
if(props.questions.length > 0){
    if(props.qClass==="Normal"){
    var qTable = new RoundModel(props);
    }
    else if(props.qClass==="Audio"){
    var qTable = new AudioModel(props)
    }
}
else {
    qTable = <p>No Questions Found. <a href="/addQuestion">Add a new question</a></p>

}
    // else if (props.qClass==="Visual"){
    //     qtable = new VisualRound(questions)
    // }
    return(
        <Layout title={props.title}>
            {qTable}
        </Layout>
    );
}