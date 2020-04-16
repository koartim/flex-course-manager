import React, { Component, Fragment } from 'react'
import '../../App.css'
import { token, domain_url } from '../../token';

class Course extends Component {

    state = {
        course: {},
        user: {},
        status: "",
        local_user: JSON.parse( localStorage.getItem("user") )
    }

   componentDidMount() {
     Promise.all([
       fetch(`http://localhost:4000/courses/${this.props.match.params.name}`),
       fetch(`${domain_url}${this.state.local_user.user.sub}`, {
         headers: {
           'authorization':`Bearer ${token}`,
           'Content-Type': 'application/json'
         }
       })
     ])
     .then(([res1, res2]) => {
       this.setState({
         status: "fetched"
       });
       return Promise.all([res1.json(), res2.json()])
     })
     .then(([res1, res2]) => {
       this.setState({
         course: res1,
         user: res2
       })
     })
   }

   addCourse = () => {
        alert(`added ${this.state.course.name} to your courses!`)
        this.state.user.user_metadata.courses.courses.push(this.state.course)
        localStorage.setItem("localUser", JSON.stringify(this.state.user))
   }

render() {
  const { course, user, status, local_user } = this.state;
    return (
        <div className="card grid-1" style={{margin: '6rem 8rem 8rem 8rem' }}>
            <div className="all-center">
                <img className="round-img" style={{width: "150px"}} src={this.state.course.img_url} alt=""/>
                <h1>{course.name}</h1>
                <strong><h3>{course.difficulty}</h3></strong>
                <div>
                  {course.description && (
                    <Fragment>
                      <p>{course.description}</p>
                    </Fragment>
                  )}
                </div>

                <button onClick={this.addCourse}>Add Course</button>
            </div>
        </div>
      )
    }
  }
export default Course;
