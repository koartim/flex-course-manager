import React from 'react'
import CourseItem from './CourseItem';
import Spinner from '../../Spinner'
import { FETCH_COURSES } from '../../Actions'
import { connect } from 'react-redux';

class Courses extends React.Component {

    state = {
      loading: true,
      localcourses: []
    }

    componentDidMount() {
      fetch("http://localhost:3001/api/v1/courses")
        .then(rsp => rsp.json())
        .then(courses => {
          this.setState({
            localcourses: courses,
            loading: false
          })
        })
    }

  render() {
    console.log(this.props);
    const { loading, localcourses } = this.state
    if (loading) {
      return <Spinner/>
    }
    return (
        <div style={courseStyle}>
            {localcourses.map(course => (
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
