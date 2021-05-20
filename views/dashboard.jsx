import React from 'react'
import Layout from './layout'
import Message from './components/message';

function Dashboard(props) {
  var abilities
    if(props.user.userType==="Quiz Master"){
      abilities = "view questions and answers, add questions, delete questions, and modify questions."
    }
    else if(props.user.userType==="Quiz Host"){
      abilities = "view questions and answers."
    }
    else{
      abilities = "view questions but not their answers."
    }
    return (
      <Layout title={props.title}>
        <div class="container-fluid">
        
        <ul class="nav nav-pills">
          <li class="nav-item">
            <a class="nav-link active" href="/dashboard/">Dashboard</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/users/profile">Profile</a>
          </li> 
          {props.user.userType==="Quiz Master"? <li class="nav-item"><a class="nav-link" href="/addQuestion">Add Question</a> </li> : null}
          <li class="nav-item">
            <a class="nav-link" href="/questions">Questions</a>
          </li>
          {props.user.userType==="Quiz Taker"? null:<li class="nav-item"><a class="nav-link" href="/roundbuilder">Round Builder</a></li>}
          <li class="nav-item">
            <a class="nav-link" href="/logout">Log out</a>  
          </li>
        </ul>
        <h1> {props.message} </h1>
        <div style={{width: "75%"}}>
        <h1>Welcome, {props.user.firstName}. This site includes a database of trivia questions. You are a {props.user.userType}, so you are able to {abilities}
        </h1></div>
        <h3>
          Who we are:
      </h3>
      <p1 >
          *We are Grand Junction, Colorado's premiere pub trivia night <br/>*Active and on-going for over 12 years <br/>
          *Each quiz is hand-crafted with love by one of our local quiz-masters <br/>
          *Hosted at <a href="http://cruisersgj.com/" target="_blank" rel="noreferrer">Cruisers Bar</a> on 
          Tuesday evenings from 8:00 until 10:00 <br/> *Reach us at our <a href="https://www.facebook.com/Quiz-Ninjas-115702078557363" target="_blank" rel="noreferrer">
          Quiz Ninjas Facebook Page</a> <br/> *Login as a host to see sample questions and answers, or as a quiz-taker to see some sample questions!
      </p1>
        </div>
      </Layout>
    );
}

module.exports = Dashboard;
