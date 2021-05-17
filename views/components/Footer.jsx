import React from 'react';

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: "Thanks for checking out Quiz Ninjas!"
        }
    }
    render () {
        const myStyle= {
            marginTop:"0px",
            marginBottom:"0px",
            backgroundColor: "#113274",
            backgroundImage: "url(https://static.thenounproject.com/png/21610-200.png)",
            backgroundSize: "100px",
            backgroundRepeat: "space",
            minHeight: "5vh",
            maxHeight: "5vh",
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
            verticalAlign: "bottom",
            fontSize: "calc(50px + 2vmin)",
            fontFamily: "'Comic Sans MS', 'Arial Narrow Bold', sans-serif",
            color: "white",
            bottom: "0px"
      };
      return(
        <div class="navbar fixed-bottom" style={myStyle}>
            <h2>
                {this.state.message}
            </h2>
        </div>
    );
};
}

export default Footer;