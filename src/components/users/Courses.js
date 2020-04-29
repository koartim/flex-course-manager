import React from 'react'
import CourseItem from './CourseItem';
import Spinner from '../../Spinner'
import { connect } from 'react-redux';

class Courses extends React.Component {

    state = {
      loading: true
    }

    componentDidMount() {
      this.setState({loading: false})
    }

  render() {
    console.log(this.props);
    const { loading } = this.state
    if (loading) {
      return <Spinner/>
    }
    return (
        <div style={courseStyle}>
            {this.props.courses.map(course => (
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
        courses: state.courses
    }
}

export default connect(msp) (Courses);
