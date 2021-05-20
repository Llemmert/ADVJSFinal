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
        <div class="container-fluid">
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
        {this.state.userType==="Quiz Taker"? null:<li class="nav-item"><a class="nav-link" href="/roundbuilder">Round Builder</a></li>}
        <li class="nav-item">
            <a class="nav-link" href="/logout">Log out</a>  
          </li>
        </ul>
        <h1>{this.state.title}</h1>
        <Message messages={this.state.messages} />
        <form method="POST" onSubmit={this.handleSubmit}>
          <label>Email: 
            <br/><input type="text" name="email" required value={this.state.email} onChange={this.handleInputChange} /> 
          </label><br /><br/>
          <label>First Name: 
          <br/><input type="text" name="fname" required value={this.state.firstName} onChange={this.handleInputChange} />
          </label> <br /><br/>
          <label>Last Name:
          <br/><input type="text" name="lname" required value={this.state.lastName} onChange={this.handleInputChange} />
          </label><br /><br />
          <label>
          User Type:
          <br/><select type="text" name="userType" required placeholder="User Type">
          <option value={this.state.userType} selected hidden>{this.state.userType}</option>
            <option value="Quiz Master">Quiz Master</option>
            <option value="Quiz Host">Quiz Host</option>
            <option value="Quiz Taker">Quiz Taker</option>
          </select>
        </label><br /><br />
          <button type="submit" class="btn btn-dark">Update</button>
        </form>
      </div>
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
      title: 'Profile',
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