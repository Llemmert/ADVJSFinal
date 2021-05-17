import React from 'react'
import PropTypes from 'prop-types';
import Title from './components/Title'
import Footer from './components/Footer'

function Layout(props) {
  return (
    <html>
      <Title />
      <div class="container-fluid" style={{paddingBottom:"70px", paddingTop:"12vh"}}>
      <head>
        <title>{props.title}</title>
        <link rel="stylesheet" href="/stylesheets/style.css" />
        {/*<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" />*/}
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossOrigin="anonymous"></link>
  
      </head>
      <body>{props.children}</body>
      <footer>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js" integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf" crossOrigin="anonymous"></script>
      </footer>      </div>
      <Footer />

    </html>
  );
}

Layout.propTypes = {
  title: PropTypes.string,
};

module.exports = Layout;
