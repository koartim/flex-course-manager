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
       localStorage.setItem("course", JSON.stringify(this.state.course))
   }

render() { 
    console.log(this.props)
    return (
        <div>       
            <h1>{this.state.course.name}</h1>
            <p>{this.state.course.difficulty}</p>
            <button onClick={this.addCourse}>Add Course</button>
        </div>
    )
  }
}

export default Course;
