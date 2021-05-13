import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import question from '../models/questions';
import { MDBDataTableV5 } from 'mdbreact';
import Layout from './layout';

function QuestionTable(props){
const [datatable, setDatatable] = React.useState({
  columns: [{
  field: 'qWording',
  label: 'Question Wording'},
  {
    field: 'answer',
    label: 'Answer'},
    {
      field: 'roundType',
      label: 'Round Type'
  }]
})
    return (
      
      <MDBDataTableV5 hover entriesOptions={[5,20,25]} entries={5} pagesAmount={4} data={props.questions} />
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
  