import React, { Component } from 'react'
import '../../App.css'

class Course extends Component {

    state = {
        course: {} 
    }

   componentDidMount() {
       fetch(`http://localhost:4000/courses/${this.props.match.params.id}`)
        .then(rsp => rsp.json())
        .then(data => {
            this.setState({
                course: data
            })
        })
   }

   addCourse = () => {
        alert(`added ${this.state.course.name} to your courses!`)
   }

render() { 

    return (
        <div className="card grid-2" style={{margin: '8rem'}}> 
            <div className="all-center">
                <img className="round-img" style={{width:'100px'}} src={this.state.course.img_url} alt=""/>       
                <h1>{this.state.course.name}</h1>
                <p>{this.state.course.difficulty}</p>
                <button className="btn btn-light my-1" onClick={this.addCourse}>Add Course</button>
            </div>
        </div>
    )
  }
}

export default Course;
