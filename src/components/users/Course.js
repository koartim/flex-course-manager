import React, { Component, Fragment } from 'react'
import '../../App.css'
import { token, domain_url } from '../../token';
import Spinner from '../../Spinner';
import { FETCH_COURSE, FETCH_USER } from '../../Actions';
import { connect } from 'react-redux';

class Course extends Component {

    state ={
        status: "",
        local_user: JSON.parse( localStorage.getItem("user") ),
        isLoading: true
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
       this.props.fetchCourse(res1)
       this.props.fetchUser(res2)
     })
     this.setState({ isLoading: false })
   }

   addCourse = () => {
        alert(`added ${this.props.course.name} to your courses!`)
        this.props.user.user_metadata.courses.courses.push(this.props.course)
        localStorage.setItem("localUser", JSON.stringify(this.props.user))
        
   }

render() {
  const { course, isLoading } = this.props;
  if (isLoading) {
    return <Spinner />
  }
    return (
        <div className="card grid-1" style={{margin: '6rem 8rem 8rem 8rem' }}>
            <div className="all-center">
                <img className="round-img" style={{width: "150px"}} src={course.img_url} alt=""/>
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

const msp = (state) => {
  return {
    course: state.course,
    user: state.user
  }
}  

const mdp = (dispatch) => {
  return {
    fetchCourse: (course) => {
      dispatch({type: FETCH_COURSE, payload: course});
    },
    fetchUser: (user) => {
      dispatch({type: FETCH_USER, payload: user});
    }
  }
}

export default connect(msp, mdp) (Course);
