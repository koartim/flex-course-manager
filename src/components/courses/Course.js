import React, { Component, Fragment } from 'react'
import '../../App.css'
import Spinner from '../../Spinner';
import { FETCH_COURSE } from '../../Actions';
import { connect } from 'react-redux';

class Course extends Component {

    state = {
        isLoading: true
    }

   componentDidMount() {
       fetch(`http://localhost:3001/api/v1/courses/${this.props.match.params.id}`)
       .then(rsp => rsp.json())
       .then(course => this.props.fetchCourse(course))
     }

     addCourse = () => {
       fetch("http://localhost:3001/api/v1/subscriptions", {
         method: "post",
         headers: {
           "Content-Type": "application/json",
           "Accept": "application/json"
         },
         body: JSON.stringify({
           user_id: this.props.currentUser.user.id,
           course_id: this.props.course.id,
           sub_name: this.props.course.name,
           course_description: this.props.course.description,
           sub_img: this.props.course.img_url
         })
       })
       .then(rsp => rsp.json())
       .then(data => {
          alert(`added ${this.props.course.name} to your courses!`)
          this.props.history.push("/profile")
       })
     }

render() {
  const { course, isLoading } = this.props;
  if (isLoading) {
    return <Spinner />
  }
    return (
        <div className="card grid-1" style={{ margin: '6rem 8rem 8rem 8rem' }}>
            <div className="all-center">
                <img className="round-img" style={{width: "150px"}} src={course.img_url} alt=""/>
                <h1>{course.name}</h1>
                <strong><h3>{course.difficulty}</h3></strong>
                <div>
                  {course.description && (
                    <Fragment>
                      <p>{course.description}</p>
                    </Fragment>
                  )}
                </div>

                <button onClick={this.addCourse}>Add Course</button>
            </div>
        </div>
      )
    }
  }

const msp = (state) => {
  return {
    course: state.course,
    currentUser: state.currentUser,
    userCourses: state.userCourses
  }
}

const mdp = (dispatch) => {
  return {
    fetchCourse: (course) => {
      dispatch({type: FETCH_COURSE, payload: course});
    }
  }
}

export default connect(msp, mdp) (Course);
