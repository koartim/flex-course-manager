import React from 'react';
import { useAuth0 } from "../react-auth0-spa";
import { NavLink } from 'react-router-dom';

const Navbar = () => {

    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

    return (
        <div>
            {!isAuthenticated && (
                <button onClick={() => loginWithRedirect({})}>Log in</button>
            )}

            {isAuthenticated && <button onClick={() => logout()}>Log out</button>}

            {isAuthenticated && (
                <span>
                    <NavLink exact to="/">Home</NavLink>&nbsp;
                    <NavLink exact to="profile">Profile</NavLink>
                </span>
            )}
        </div>
    );
};
export default Navbar;