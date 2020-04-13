import React from 'react'
import CourseItem from './CourseItem';

const Courses = (props) => {

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

export default Courses;
