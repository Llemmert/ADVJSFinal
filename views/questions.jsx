import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import question from '../models/questions';
import Layout from './layout';

function QuestionTable(props){
const columns = [{
  dataField: 'qWording',
  text: 'Question Wording'},
  {
    dataField: 'answer',
    text: 'Answer'},
    {
      dataField: 'roundType',
      text: 'Round Type'
  }];
  let allQuestions = Number(props.questions.length)

  const options = {
    custom: true,
    totalSize: allQuestions
  };
  class FullyCustomPagination extends React.Component {
    handleNextPage = ({
      page,
      onPageChange
    }) => () => {
      onPageChange(page + 1);
    }
  
    handlePrevPage = ({
      page,
      onPageChange
    }) => () => {
      onPageChange(page - 1);
    }
  
    handleSizePerPage = ({
      page,
      onSizePerPageChange
    }, newSizePerPage) => {
      onSizePerPageChange(newSizePerPage, page);
    }
  
    render() {
      return (
        <div>
          <PaginationProvider
            pagination={ paginationFactory(options) }
          >
            {
              ({
                paginationProps,
                paginationTableProps
              }) => (
                <div>
                  <div>
                    <p>Current Page: { paginationProps.page }</p>
                    <p>Current SizePerPage: { paginationProps.sizePerPage }</p>
                  </div>
                  <div className="btn-group" role="group">
                    <button className="btn btn-primary" onClick={ this.handleNextPage(paginationProps) }>Next Page</button>
                    <button className="btn btn-success" onClick={ this.handlePrevPage(paginationProps) }>Prev Page</button>
                    <button className="btn btn-danger" onClick={ () => this.handleSizePerPage(paginationProps, 10) }>Size Per Page: 10</button>
                    <button className="btn btn-warning" onClick={ () => this.handleSizePerPage(paginationProps, 25) }>Size Per Page: 25</button>
                  </div>
                  <BootstrapTable
                    keyField="id"
                    data={ products }
                    columns={ columns }
                    { ...paginationTableProps }
                  />
                </div>
              )
            }
          </PaginationProvider>
          <Code>{ sourceCode }</Code>
        </div>
      );
    }
  }
  
  export default function Questions(props) {
    let questions;
    if (props.questions.length > 0) 
      questions = <FullyCustomPagination questions={props.questions} />
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
  