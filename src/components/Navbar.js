import React from 'react';
import { useAuth0 } from "../react-auth0-spa";
import { Link } from 'react-router-dom';
import ".././App.css"

const Navbar = ({icon, title}) => {

    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

    return (
        <nav className="navbar bg-primary">
            <h1>
                <i className={icon}></i> {title}
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
                    <Link className="btn" exact to="profile">Profile</Link>
                </span>
            )}
            </li>
            </ul>
        </nav>
    );
};
export default Navbar;