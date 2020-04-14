import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import Profile from './components/Profile';
import Courses from './components/users/Courses';
import Course from './components/users/Course';
import Navbar from './components/Navbar';
import CreateCourse from './components/CreateCourse';
import Spinner from './Spinner';

class ClassApp extends Component {

    state = {
        courses: [],
        loading: true
    }
    async componentDidMount() {
      await fetch("http://localhost:4000/courses/")
        .then(rsp => rsp.json())
        .then(data => {
            this.setState({
                courses: data,
                loading: false
            })
        }).catch(console.error()
        )
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
                <Route exact path="/courses" render={routeProps => <Courses {...routeProps} courses={courses}/>} />
                <Route exact path="/courses/:name" render={routeProps => <Course {...routeProps}/>}/>
                <Route exact path="/newcourse" render={routeProps => <CreateCourse {...routeProps}/>}/>
                <PrivateRoute exact path="/profile" render={routeProps => <Profile {...routeProps}/>}/>
            </Switch>
        </div>
    </div>
    )
}
}

export default ClassApp
