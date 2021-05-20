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
    this.base = RoundModel;
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

function VisualModel(props) {
this.base = RoundModel;
var user = props.user;
var questions = props.questions;
var qClass= "Visual";
return (
    <table class="table table-hover table-dark">
        <thead>
        <tr>
            <th scope="col">Question Wording</th>
            <th scope="col">Picture<br /> Click picture to enlarge</th>
            {user.userType==="Quiz Taker"? null :<th>Answer</th>}
            <th scope="col">Question Type</th>
        </tr>
        </thead>
        <tbody>
        {
            questions.map(question => (
            <tr>
            <td>{question.qWording}</td>
            <td><a href={question.qLink}><img src={question.qLink} class="img-thumbnail" style={{"width":"100px", "height":"100px", "background-size":"cover"}}/></a></td>
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
    AudioModel.prototype = new RoundModel(props);
    VisualModel.prototype = new RoundModel(props);

if(props.questions.length > 0){
    if(props.qClass==="Normal"){
    var qTable = new RoundModel(props);
    }
    else if(props.qClass==="Audio"){
    var qTable = new AudioModel(props);
    }
    else if(props.qClass==="Visual"){
        var qTable = new VisualModel(props);
    }
}
else {
    qTable = <p>No Questions Match those filters. <a href="/roundbuilder">Try another search</a></p>

}
    // else if (props.qClass==="Visual"){
    //     qtable = new VisualRound(questions)
    // }
    return(
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
            <a class="nav-link" href="/questions">Questions</a>
          </li>
          {props.user.userType==="Quiz Taker"? null:<li class="nav-item"><a class="nav-link active" href="/roundbuilder">Round Builder</a></li>}
          <li class="nav-item">
            <a class="nav-link" href="/logout">Log out</a>  
          </li>
        </ul>
        <h1>Round Builder</h1>
            {qTable}
            </div>
        </Layout>
    );
}