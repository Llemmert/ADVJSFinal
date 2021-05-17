import React from 'react'
import Layout from './layout'

function Index(props) {
  return (
    <Layout title={props.title}>
      <div class="container-fluid">

      <h2>
          Who we are:
      </h2>
      <p1 >
          *We are Grand Junction, Colorado's premiere pub trivia night <br/>*Active and on-going for over 12 years <br/>
          *Each quiz is hand-crafted with love by one of our local quiz-masters <br/>
          *Hosted at <a href="http://cruisersgj.com/" target="_blank" rel="noreferrer">Cruisers Bar</a> on 
          Tuesday evenings from 8:00 until 10:00 <br/> *Reach us at our <a href="https://www.facebook.com/Quiz-Ninjas-115702078557363" target="_blank" rel="noreferrer">
          Quiz Ninjas Facebook Page</a> <br/> *Login as a host to see sample questions and answers, or as a quiz-taker to see some sample questions!
      </p1><br /><br />
      <a class="btn btn-dark" href="/login">Log in</a>
    </div>
    </Layout>
  );
}

module.exports = Index;