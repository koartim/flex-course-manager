import React from 'react'
import CourseItem from './CourseItem';
import Spinner from '../../Spinner'
import { useAuth0 } from "../../react-auth0-spa";
import { connect } from 'react-redux';

const Courses = (props) => {

    const { loading } = useAuth0();

    if (loading) {
        return <Spinner/>
    }
    return (
        <div style={courseStyle}>            
            {props.courses.map(course => (                    
                <CourseItem course={course} key={course.id}/>
            ))}
        </div>
     ) 
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
