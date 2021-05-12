import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import question from '../models/questions';
import Layout from './layout';

const columns = [{
  dataField: question.qWording,
  text: 'Question Wording'},
  {
    dataField: question.answer,
    text: 'Answer'},
    {
      dataField: question.roundType,
      text: 'Round Type'
  }];
  let allQuestions = Number(props.questions.length)

  const options = {
    paginationSize: 15,
    pageStartIndex:0,
    firstPageText: 'First',
    prePageText: 'Back',
    nextPageText: 'Next',
    lastPageText: 'Last',
    nextPageTitle: 'First page',
    prePageTitle: 'Pre page',
    firstPageTitle: 'Next page',
    lastPageTitle: 'Last page',
    sizePerPageList: [{
      text: 'show 15', value: 15},
      {
        text: 'show 30', value: 30},
        {
          text: 'Show all', value: allQuestions
        }]
  };

function QuestionTable(props){
    return (
      <BootstrapTable
        keyField='rowNumber'
        data={ props.questions }
        columns={ columns }
        pagination={ paginationFactory(options) } />
    )
  }
  
  export default function Questions(props) {
    let questions;
    if (props.questions.length > 0) 
      questions = <QuestionTable questions={props.questions} />
    else
      questions = <p>No questions found. <a href="/addQuestion">Add a new question</a></p>
  
    return (
      <Layout title={props.title}>
        <h1>{props.title}</h1>
        <a href="/dashboard/">Dashboard</a> | <a href="/users/profile">Profile</a> | <a href="/course/">New Course</a> | <a href="/logout">Log out</a> | <a href="/addQuestion">New Question</a>
        <h3>All Questions</h3>
        {questions}
      </Layout>
    );
  }
  