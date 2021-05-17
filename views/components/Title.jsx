import React from 'react'

class Title extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Quiz Ninjas",
      subtitle: "Pub Trivia"
    };
}
    render () {
      const myStyle= {
        backgroundColor: "#113274",
        backgroundImage: "url(https://static.thenounproject.com/png/21610-200.png)",
        backgroundSize: "200px",
        backgroundRepeat: "space",
        minHeight: "20vh",
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        fontSize: "calc(50px + 2vmin)",
        fontFamily: "'Comic Sans MS', 'Arial Narrow Bold', sans-serif",
        color: "rgb(29, 207, 74)",
        textDecoration: "none"
    };
      return( 
      <div>
        <a class="display-1" style={myStyle} href={"/dashboard"}>
        {this.state.title} <br/> {this.state.subtitle}
        </a>
      </div>
      )
    }
  }

  export default Title;