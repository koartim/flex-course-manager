import React from "react";
import { connect } from "react-redux";
import { withRouter } from 'react-router'

class Authenticate extends React.Component {
  state = {
    waiting: true
  }
}

componentDidMount() {
  const token = localStorage.getItem("token")
  console.log("hi");
  if (token) {
    fetch("http://localhost:3001/api/v1/auto_login", {
        headers: {
          "Authorization": token
        }
      })
      .then(rsp => rsp.json())
      .then(response => {
        return  this.props.setCurrentUser(response);
          this.setState({
            waiting: false
          })
      })
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

export default connect(msp, mdp)(withRouter(Authenticate))
