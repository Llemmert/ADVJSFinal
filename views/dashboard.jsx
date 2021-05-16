import React from 'react'
import Layout from './layout'
import Message from './components/message';

function Dashboard(props) {
    return (
      <Layout title={props.title}>
        <div class="container-fluid">
        <h1 class="">Dashboard</h1>
        <h2> {props.message} </h2>
        <h2>Welcome, {props.user.firstName}</h2>
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
          <li class="nav-item">
            <a class="nav-link" href="/logout">Log out</a>  
          </li>
        </ul>
        </div>
      </Layout>
    );
}

module.exports = Dashboard;
