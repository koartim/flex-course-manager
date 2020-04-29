import React from 'react';

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
    e.preventDefault();
    fetch("http://localhost:3001/api/v1/users", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        user: {
          username: this.state.username,
          password: this.state.password,
          bio: this.state.bio,
          img_url: this.state.img_url
        }
      })
    })
      .then(rsp => rsp.json())
      .then(data => localStorage.setItem("token", data.jwt))

  }

  render() {
    return(
        <div>
          <form onSubmit={this.handleSubmit} onChange={this.handleChange}>
          <label htmlForm="username">username</label>
          <input type="text" name="username" placeholder="username"/>
          <label htmlForm="password">password</label>
          <input type="text" name="password" placeholder="password"/>
          <label htmlForm="confirm">confirm password</label>
          <input type="text" name="confirm" placeholder="confirm password"/>
          <label htmlForm="bio">Bio</label>
          <input type="text" name="bio" placeholder="bio"/>
          <label htmlForm="img_url">Image upload</label>
          <input type="text" name="img_url" placeholder="paste image link"/>
          <button>Submit</button>
          </form>
        </div>

    )
  }
}
export default SignUp;
