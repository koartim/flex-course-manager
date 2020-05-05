import React from 'react';
import { Link } from 'react-router-dom';
import "../../App.css"

const CourseItem = (props) => {

    return (
        <div className="card text-center">
             <img src={props.course.img_url} alt="" style={{width:'60px'}} />
            <h3>{props.course.name}</h3>
             <p>{props.course.difficulty}</p>
            <Link to={`/courses/${props.course.id}`}>
            <button className="btn btn-light my-2">View Course</button>
            </Link>
        </div>
    )
}

export default CourseItem
