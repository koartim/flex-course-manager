import React from 'react';
import { useAuth0 } from "../react-auth0-spa";
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router'
import ".././App.css"

const Navbar = (props) => {

    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
    
    return (
        <nav className="navbar bg-primary">
            <h1>
                <i className={props.icon}></i> {props.title}
            </h1>
            <ul>
                <li>
                {!isAuthenticated && (
                <button className="btn" onClick={() => loginWithRedirect({})}>Log in</button>
                )}
                </li>
          
                <li>
                {isAuthenticated && <button className="btn" onClick={() => logout()}>Log out</button>}         
                </li>    
           
              <li>      
            {isAuthenticated && (
                <span>
                    <Link className="btn" exact to="/">Home</Link>&nbsp;
                    <Link className="btn" exact to="/courses">Courses</Link>
                    <Link onClick={() => props.history.push("/profile")} className="btn" exact to="profile">Profile</Link>
                </span>
            )}
            </li>
            </ul>
        </nav>
    );
};
export default withRouter(Navbar);