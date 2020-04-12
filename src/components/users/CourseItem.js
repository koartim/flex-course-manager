import React from 'react'

const CourseItem = ({course}) => {

    return (
        <div className="card text-center">
            <img src={course.img_url} alt="" className="round-img" style={{width: '60px'}}/>
            <h3>{course.name}</h3>

        </div>
    )
}
export default CourseItem
