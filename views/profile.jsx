import React from 'react';
import Layout from './layout';
import Message from './components/message';

class Profile extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      messages: props.messages,
      title: props.title,
      msg : "",
      email : props.user.email,
      firstName : props.user.firstName,
      lastName : props.user.lastName,
      userType : props.user.userType,
    };
    // this is not working with static server-side rendering React
    //this.handleSubmit = this.handleSubmit.bind(this);
    //this.handleInputChange = this.handleInputChange.bind(this);
  }

  render() {
    return (
      <Layout title={this.state.title}>
        <h1>{this.state.title}</h1>
        <ul class="nav nav-pills">
          <li class="nav-item">
            <a class="nav-link" href="/dashboard/">Dashboard</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" href="/users/profile">Profile</a>
          </li> 
        {this.state.userType==="Quiz Master"? <li class="nav-item"><a class="nav-link" href="/addQuestion">Add Question</a> </li> : null}
        <li class="nav-item">
        <a class="nav-link" href="/questions">Questions</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="/logout">Log out</a>  
          </li>
        </ul>
        <br/>
        <Message messages={this.state.messages} />
        <form method="POST" onSubmit={this.handleSubmit}>
          <label>Email: 
            <input type="text" name="email" required value={this.state.email} onChange={this.handleInputChange} /> 
          </label><br /><br/>
          <label>First Name: 
            <input type="text" name="fname" required value={this.state.firstName} onChange={this.handleInputChange} />
          </label> <br /><br/>
          <label>Last Name:
            <input type="text" name="lname" required value={this.state.lastName} onChange={this.handleInputChange} />
          </label><br /><br />
          <label>
          User Type:
          <select type="text" name="userType" required placeholder="User Type">
          <option value="Quiz Taker" selected hidden>Select a User Type</option>
            <option value="Quiz Master">Quiz Master</option>
            <option value="Quiz Host">Quiz Host</option>
            <option value="Quiz Taker">Quiz Taker</option>
          </select>
        </label><br /><br />
          <button type="submit">Update</button>
        </form>
      </Layout>
    );
  }

  handleInputChange(event) {
    //const target = event.target;
    //const name = target.name;
    //const value = target.value;
    this.setState({
      // ES6 variable as property name syntax
      [event.target.name] : event.target.value,
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    fetch('/profile',
    {
      method: 'POST',
      headers: {
        'Accept': 'application/json', 
        'Content-Type':'application/json'
      },
      body: JSON.stringify({
        email: this.state.email,
        fname: this.state.firstName,
        lname: this.state.lastName,
        userType: this.state.userType
      }),
    })
    .then(result => result.json())
    .then(json => {
      this.setState({
        msg: json.msg,
        email: json.email,
        firstName: json.firstName,
        lastName: json.lastName,
        userType: json.userType,
      });
    })
  }
}

module.exports = Profile;