import React from 'react'
import Layout from './layout'

function Dashboard(props) {
  if(props.user.userType == "Quiz Master"){
    return (
      <Layout title={props.title}>
        <h1>{props.title}</h1>
        <h2>Quiz Ninjas Sample Questions</h2>
        <h3>Welcome, {props.user.firstName}</h3>
        <a href="/courses/">Courses</a> | <a href="/users/profile">Profile</a> | <a href="/logout">Log out</a> | <a href="/addQuestion">Add Question</a> | <a href="/questions">Questions</a>
      </Layout>
    );
  }
  else {
    return (
      
      <Layout title={props.title}>
        {props.message ? <Message messages={props.message} /> : null}
        <h1>{props.title}</h1>
        <h2>Quiz Ninjas Sample Questions</h2>
        <h3>Welcome, {props.user.firstName}</h3>
        <a href="/courses/">Courses</a> | <a href="/users/profile">Profile</a> | <a href="/logout">Log out</a> | <a href="/questions">Questions</a>
      </Layout>
    );
  }
  ;
}

module.exports = Dashboard;
