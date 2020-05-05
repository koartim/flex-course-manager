import React from 'react';
import '../../SignUp.css'
import { connect } from 'react-redux';
import { SET_CURRENT_USER } from '../../Actions';

class SignUp extends React.Component {

  state = {
    username: "",
    password: "",
    bio: "",
    img_url: "",
    confirm: ""
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    if (this.state.password !== this.state.confirm) {
      alert("passwords must match")
    }
    e.preventDefault();
    fetch("http://localhost:3001/api/v1/users", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
          username: this.state.username,
          password: this.state.password,
          bio: this.state.bio,
          img_url: this.state.img_url
      })
    })
      .then(rsp => rsp.json())
      .then(data => {
        this.props.setCurrentUser(data)
        localStorage.setItem("token", data.jwt)
        this.props.history.push("/profile")
        console.log(data);
      })
  }

  render() {
    return(
        <div className="SignUp">
          <form onSubmit={this.handleSubmit} onChange={this.handleChange}>
          <label htmlForm="username">username</label>
          <input type="text" name="username" placeholder="username"/>
          <label htmlForm="password">password</label>
          <input type="password" name="password" placeholder="password"/>
          <label htmlForm="confirm">confirm password</label>
          <input type="password" name="confirm" placeholder="confirm password"/>
          <label htmlForm="bio">bio</label>
          <input type="text" name="bio" placeholder="bio"/>
          <label htmlForm="img_url">image upload</label>
          <input type="text" name="img_url" placeholder="paste image link"/>
          <button>Submit</button>
          </form>
        </div>

    )
  }
}

const msp = (state) => {
  return {
    currentUser: state.currentUser,
    setCurrentUser: state.setCurrentUser
  }
}

const mdp = (dispatch) => {
  return {
    setCurrentUser: (currentUser) => {
      dispatch({type: SET_CURRENT_USER, payload: currentUser})
    }
  }
}

export default connect(msp, mdp) (SignUp);
