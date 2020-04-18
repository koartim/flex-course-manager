import React, { Fragment, useState, useEffect } from 'react';
import { useAuth0 } from "../react-auth0-spa";
import { token, domain_url } from '.././token'
import Spinner from '../Spinner';

const Profile = () => {
    const { loading, user } = useAuth0();
    const [ courses, setCourses ] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await fetch('http://localhost:4000/users/1/courses') 
      .then(rsp => rsp.json())
      .then(data => setCourses(data.courses)
      )
    }
    fetchData();
  }, [], console.log(courses)
  
  )
    if (loading || !user) {
        return <Spinner/>
    }

    return (
        <Fragment>
            <img src={user.picture} className="round-img" style={{width: '60px'}} alt="Profile" />
             <h2>{user.nickname}</h2>
             <p>{user.email}</p>
             <h3>courses</h3>
             <ul>
             </ul>
        </Fragment>
    )
}
export default Profile;
