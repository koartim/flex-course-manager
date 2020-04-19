import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import Profile from './components/Profile';
import Courses from './components/users/Courses';
import Course from './components/users/Course';
import Navbar from './components/Navbar';
import CreateCourse from './components/CreateCourse';
import Spinner from './Spinner';
import { FETCH_COURSES } from './Actions';
import { connect } from 'react-redux';

class ClassApp extends Component {

    state = {
        loading: true
    }
    async componentDidMount() {
      await fetch("http://localhost:4000/courses/")
        .then(rsp => rsp.json())
        .then(data =>  this.props.fetchCourses(data))
        .catch(console.error())
        this.setState({ loading: false })
    }

    render() {
        const {courses} = this.state
        if (this.state.loading) {
            return (
            <div>
                <div>
                    <Navbar icon={"fas fa-clipboard-check"} title={"Flex Course Manager"}/>
                </div>
              <Spinner />
            </div>
            )
        }
    return (
        <div>
        <Navbar icon={"fas fa-clipboard-check"} title={"Flex Course Manager"}/>
        <div>
            <Switch>
                <Route exact path="/courses" render={routeProps => <Courses {...routeProps}/>} />
                <Route exact path="/courses/:name" render={routeProps => <Course {...routeProps}/>}/>
                <Route exact path="/newcourse" render={routeProps => <CreateCourse {...routeProps}/>}/>
                <PrivateRoute exact path="/profile" render={routeProps => <Profile {...routeProps}/>}/>
            </Switch>
        </div>
    </div>
    )
  }
}


const msp = (state) => {
    return {
        courses: state.courses
    };
};

const mdp = (dispatch) => {
    return {
        fetchCourses: (courses) => {
            dispatch({type: FETCH_COURSES, payload: courses})
        }
    }
}

export default connect(msp, mdp) (ClassApp)
