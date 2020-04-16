import React, { Fragment, useState, useEffect } from 'react';
import { useAuth0 } from "../react-auth0-spa";
import { token, domain_url } from '.././token'


const Profile = () => {
    const { loading, user } = useAuth0();
    const [ localUser, setLocalUser ] = useState({});

  // useEffect(() => {
  //   const fetchData = async () => {
  //     await fetch(`${domain_url}${user.sub}`, {
  //       headers: {
  //         "authorization":`Bearer ${token}`,
  //         "Content-Type": "application/json"
  //       }
  //     })
  //     .then(rsp => rsp.json())
  //     .then(data => setLocalUser(data))
  //   }
  //   fetchData();
  // }, [])

    if (loading || !user) {
        return <div>Loading...</div>
    }

    return (
        <Fragment>
            <img src={user.picture} className="round-img" style={{width: '60px'}} alt="Profile" />
             <h2>{user.nickname}</h2>
             <p>{user.email}</p>
             <h3>courses</h3>
             <ul>
              {JSON.parse(localStorage.getItem("localUser")).user_metadata.courses.courses.map(course => (
                <li>{course.name}</li>
              ))}
             </ul>
        </Fragment>
    )
}
export default Profile;
