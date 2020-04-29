import React from 'react';
// import { useAuth0 } from "../react-auth0-spa";
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router'
import ".././App.css"

class Navbar extends React.Component {

render() {
  console.log(this.props);
  return (
    <nav className="navbar bg-primary">
      <h1>
          <i className={this.props.icon}></i> {this.props.title}
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


export default withRouter(Navbar);
