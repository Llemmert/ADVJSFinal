import React from 'react'
import Layout from './layout'

function Index(props) {
  return (
    <Layout title={props.title}>
      <h1>{props.title}</h1>
      <ul class="nav nav-pills">
        <li class="nav-item">
      <a class="nav-link active" href="/login">Log in</a>
      </li>
      </ul>
    </Layout>
  );
}

module.exports = Index;