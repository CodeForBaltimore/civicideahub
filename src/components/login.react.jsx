import React from 'react';
import PropTypes from 'prop-types';

import style from '../style/login.css';

class Login extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        username: "example@email.com",
        password: "*********"
      }

  }

  SubmitLogin(e){
    //Todo:  Fires from login button
    alert('A name was submitted: ' + this.state.username);
  }

  render() {
    return (
      <form onSubmit={this.SubmitLogin}>
        <label>
          User Name:
          <input type="text" value={this.state.username}  />
        </label>
        <br />
        <label>
          Password:
          <input type="text" value={this.state.password} />
        </label>
        <input type="submit" value="Submit"/>
      </form>
    );
  }

}

export default Login;
