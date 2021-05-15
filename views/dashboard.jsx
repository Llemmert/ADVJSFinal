import React from 'react'
import Layout from './layout'

function Dashboard(props) {
    return (
      <Layout title={props.title}>
        <h1>{props.title}</h1>
        {props.message ? <Message messages={props.message} /> : null}
        <h2>Quiz Ninjas Sample Questions</h2>
        <h3>Welcome, {props.user.firstName}</h3>
        <a href="/courses/">Courses</a> |
        <a href="/users/profile">Profile</a> |
        <a href="/logout">Log out</a> |
        {props.userType="Quiz Master" ? <a href="/addQuestion">Add Question</a> : null}
        | <a href="/questions">Questions</a>
      </Layout>
    );
}

module.exports = Dashboard;
