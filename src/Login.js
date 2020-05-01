import React from 'react';
import { SET_CURRENT_USER } from './Actions';
import { connect } from 'react-redux';
import './Login.css';

class Login extends React.Component {

  state = {
    username: "",
    password: ""
  }

  handleChange = (e) => {
    console.log(this.state.username);
    console.log(this.state.password)
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    let user = {
      username: this.state.username,
      password: this.state.password
    }
    e.preventDefault();
    fetch("http://localhost:3001/api/v1/login", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({user})
    })
    .then(rsp => rsp.json())
    .then(res => {
      console.log(res);
      localStorage.setItem("token", res.jwt)
      localStorage.setItem("user_id", res.user.id)
      this.props.setCurrentUser(res)
      this.props.history.push("/profile")
    })
  }

  render() {
    return(
      <div className="Login">
        <form onChange={this.handleChange} onSubmit={this.handleSubmit}>
        <label className="label" htmlFor="username">username</label>
          <input className="input" type="text" name="username" placeholder="username"/>
        <label className="label" htmlFor="password">password</label>
          <input className="input" type="text" name="password" placeholder="password"/>
          <button className="button">Submit</button>
        </form>
      </div>
    )
  }
}

const msp = (state) => {
    return {
        currentUser: state.currentUser
    };
};

const mdp = (dispatch) => {
    return {
        setCurrentUser: (currentUser) => {
            dispatch({type: SET_CURRENT_USER, payload: currentUser})
        }
    }
}


export default connect(msp, mdp)(Login);
