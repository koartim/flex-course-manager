import React, { Fragment } from 'react';
import Spinner from '../Spinner';
import { connect } from 'react-redux';

class Profile extends React.Component {

render() {
  const { loading, currentUser, courses } = this.props
  const userCourses = courses.filter((course) => course.user_id === currentUser.user.id);
  console.log(this.props.currentUser)
    if (loading) {
        return <Spinner/>
    }
  return (
    <Fragment>
          <h1>{currentUser.user.username}</h1>
          <img style={{width:'120px'}} src={currentUser.user.img_url} alt="img not found"/>
          <p>{currentUser.user.bio}</p>
          <ul>
            {userCourses.map(course => (
              <li>{course.name}</li>
            ))}
          </ul>
    </Fragment>
  )
 }
}

const msp = (state) => {
  return {
    currentUser: state.currentUser,
    courses: state.courses
  }
}

export default connect(msp)(Profile);
