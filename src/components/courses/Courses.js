import React from 'react'
import CourseItem from './CourseItem';
import Spinner from '../../Spinner'
import { FETCH_COURSES } from '../../Actions'
import { connect } from 'react-redux';

class Courses extends React.Component {

    state = {
      loading: true
    }
    componentDidMount() {

        fetch("http://localhost:3001/api/v1/courses")
          .then(rsp => rsp.json())
          .then(data => {
            this.props.fetchCourses(data)
            this.setState({
              loading: false
            })
        });
    }

  render() {
    const { courses } = this.props
    const { loading } = this.state
    if (loading) {
      return <Spinner/>
    }
    return (
        <div style={courseStyle}>
            {courses.map(course => (
                <CourseItem course={course} key={course.id}/>
            ))}
        </div>
     )
  }
}


const courseStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem'
}

const msp = (state) => {
    return {
        courses: state.courses,
        fetchCourses: state.fetchCourses
    }
}

const mdp = (dispatch) => {
  return {
    fetchCourses: (courses) => {
      dispatch({type: FETCH_COURSES, payload: courses})
    }
  }
}

export default connect(msp, mdp) (Courses);
