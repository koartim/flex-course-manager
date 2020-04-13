import React, { Component } from 'react'
import '../../App.css'

class Course extends Component {

    state = {
        course: {},
        imageLoaded: "loading"
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

   handleImageLoaded() {
    this.setState({ imageStatus: "loaded" });
  }

  handleImageErrored() {
    this.setState({ imageStatus: "failed to load" });
  }

    render() { 
        console.log(this.state)
        return (
            <div>
                <img className="round-img" src={this.state.img_url}  alt=""/>
                <h1>{this.state.course.name}</h1>
                <p>{this.state.course.difficulty}</p>
                {this.state.imageStatus}
           </div>
        )
    }
}

export default Course;
