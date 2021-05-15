import React from 'react'
import Layout from './layout'
import Message from './components/message';

function Dashboard(props) {
    return (
      <Layout title={props.title}>
        <h1>Dashboard</h1>
        <h2> {props.message} </h2>
        <h2>Quiz Ninjas Sample Questions</h2>
        <h3>Welcome, {props.user.firstName}</h3>
        <a href="/users/profile">Profile</a> |
        <a href="/logout">Log out</a> |
        {props.user.userType==="Quiz Master"? <span><a href="/addQuestion">Add Question</a> | </span> : null}
        <a href="/questions">Questions</a>
      </Layout>
    );
}

module.exports = Dashboard;
