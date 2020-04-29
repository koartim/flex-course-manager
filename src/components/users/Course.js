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

render() {
  const { course, isLoading } = this.props;
  console.log(course);
  if (isLoading) {
    return <Spinner />
  }
    return (
        <div className="card grid-1" style={{margin: '6rem 8rem 8rem 8rem' }}>
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
    course: state.course
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
