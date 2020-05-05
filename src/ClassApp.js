import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom';
import Profile from './components/layout/Profile';
import Courses from './components/courses/Courses';
import Course from './components/courses/Course';
import Navbar from './components/layout/Navbar';
import CreateCourse from './components/courses/CreateCourse';
import Login from './components/layout/Login';
import SignUp from './components/layout/SignUp';
import Search from './components/layout/Search';
import Quiz from './components/Quiz';
import Spinner from './Spinner';
import Subscriptions from './components/subscriptions/Subscriptions';
import Subscription from './components/subscriptions/Subscription';
import { FETCH_COURSES, SET_CURRENT_USER } from './Actions';
import { connect } from 'react-redux';

class ClassApp extends Component {

    state = {
        loading: false
    }

    componentDidMount() {
      const token = localStorage.getItem("token")
      if (token) {
        fetch("http://localhost:3001/api/v1/auto_login", {
            headers: {
              "Authorization": `Bearer ${token}`
            }
          })
          .then(rsp => rsp.json())
          .then(response => {
              this.props.setCurrentUser(response);
            }
          );
          this.setState({
            loading: false
          })
        }
      }

    render() {
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
                <Route exact path="/subscriptions" render={routeProps => <Subscriptions {...routeProps}/>}/>
                <Route exact path="/subscriptions/:id" render={routeProps => <Subscription {...routeProps}/>}/>
                <Route exact path="/quiz" render={routeProps => <Quiz {...routeProps}/>} />
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
