import React from 'react';
// import { useAuth0 } from "../react-auth0-spa";
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router'
import ".././App.css"
import { connect } from 'react-redux';
import { LOG_OUT_USER } from '../Actions';

class Navbar extends React.Component {

render() {
  console.log(this.props);
  return (
    <nav className="navbar bg-primary">
      <h1>
          <i onClick={() => this.props.history.push("/search")} className={this.props.icon}></i> {this.props.title}
      </h1>
      <ul>
        <li>
            <Link to="/login">Login </Link>
        </li>
        <li>
          <Link to="/newcourse"> Add Course</Link>
        </li>
        <li>
            <Link to="/signup">Sign Up </Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <Link to="/courses">Courses</Link>
        </li>
      </ul>


    </nav>
  )
 }
}

const msp = (state) => {
  return {
    currentUser: state.currentUser,
    logout: state.logout
  }
}

const mdp = (dispatch) => {
  return {
    logout: ({}) => {
      dispatch({type: LOG_OUT_USER, payload: {}})
    }
  }
}

export default connect(msp, mdp) (withRouter(Navbar))
