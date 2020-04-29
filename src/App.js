import React from 'react';
import ClassApp from './ClassApp';
import { connect } from 'react-redux';
import { SET_CURRENT_USER } from './Actions';

class App extends React.Component {

componentDidMount() {
  const token = localStorage.getItem("token")
  if (token) {
    fetch("http://localhost:3001/api/v1/auto_login", {
        headers: {
          "Authorization": `${token}`
        }
      })
      .then(rsp => rsp.json())
      .then(response => {
        if (response.errors) {
          localStorage.removeItem("user_id")
          alert(response.errors)
        } else {
          this.props.setCurrentUser(response);
        }
      });
    }
  }

render() {
  return (
      <div>
        <ClassApp/>
      </div>
   );
  }
}

const msp = (state) => {
  return {
    state: state.currentUser
  }
}

const mdp = (dispatch) => {
  return {
    setCurrentUser: (currentUser) => {
      dispatch({type: SET_CURRENT_USER, payload: currentUser})
    }
  }
}

export default connect(msp, mdp)(App);
