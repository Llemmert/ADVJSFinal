import React from 'react'
import Layout from './layout'
import Message from './components/message';

function Dashboard(props) {
    return (
      <Layout title={props.title}>
        <Message message={[props.message]}/>
        <h2> {props.message} </h2>
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
