import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom';
import Profile from './components/Profile';
import Courses from './components/users/Courses';
import Course from './components/users/Course';
import Navbar from './components/Navbar';
import CreateCourse from './components/CreateCourse';
import Login from './Login';
import SignUp from './SignUp';
import Search from './components/Search';
import Spinner from './Spinner';
import { FETCH_COURSES, SET_CURRENT_USER } from './Actions';
import { connect } from 'react-redux';

class ClassApp extends Component {

    state = {
        loading: false
    }
    componentDidMount() {
        fetch("http://localhost:3001/api/v1/courses")
          .then(rsp => rsp.json())
          .then(data => this.props.fetchCourses(data));
    }

    render() {
      console.log(this.props.courses)
      const { loading } = this.state
        if (loading) {
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
                <Route exact path="/search" render={routeProps => <Search {...routeProps}/>}/>
                <Route exact path="/courses" render={routeProps => <Courses {...routeProps}/>} />
                <Route exact path="/courses/:id" render={routeProps => <Course {...routeProps}/>}/>
                <Route exact path="/newcourse" render={routeProps => <CreateCourse {...routeProps}/>}/>
                <Route exact path="/login" render={routeProps => <Login {...routeProps} />}/>
                <Route exact path="/signup" render={routeProps => <SignUp {...routeProps}/>}/>
                <Route exact path="/profile" render={routeProps => <Profile {...routeProps}/>}/>
            </Switch>
        </div>
    </div>
    )
  }
}


const msp = (state) => {
    return {
        courses: state.courses,
        currentUser: state.currentUser
    };
};

const mdp = (dispatch) => {
    return {
        fetchCourses: (courses) => {
            dispatch({type: FETCH_COURSES, payload: courses})
        },
        setCurrentUser: (currentUser) => {
          dispatch({type: SET_CURRENT_USER, payload: currentUser})
        }
    }
}

export default connect(msp, mdp) (ClassApp)
