import React from 'react';
import question from '../models/questions';
import Layout from './layout';

export default function TableFactory(props) {    
    // }
    // else if(props.qCriteria="Audio"){
    //     qtable = new AudioRound(questions)
    // }
    // else if (props.qCriteria="Visual"){
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
            <form method="POST" action="/round">
          <label>
          <select type="text" name="qType" required placeholder="Question Type">
          <option value="" selected hidden disabled>Select a Round Type</option>
            <option value="Random Knowledge">Random Knowledge</option>
            <option value="Geography">Geography</option>
            <option value="Lyric">Lyric</option>
            <option value="TV/Movie">TV/Movie</option>
            <option value="History">History</option>
            <option value="Audio">Audio</option>
            <option value="Visual">Visual</option>
          </select>
          </label><br /><br />
          <label>
          <select type="text" name="qClass" required placeholder="Class of Question">
          <option value="" selected hidden disabled>Select Question Class</option>
            <option value="Normal">Normal</option>
            <option value="Audio">Audio</option>
            <option value="Visual">Visual</option>
          </select>
        </label><br /><br />
        <button type="submit" class="btn btn-dark">Generate Round</button>
        <br /> <br />
      </form>            
      </div>
        </Layout>
    );
}