import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import Profile from './components/Profile';
import Courses from './components/users/Courses';
import Course from './components/users/Course';
import Search from './components/layout/Search';
import Navbar from './components/Navbar';

class ClassApp extends Component {

    state = {
        courses: []
    }
    componentDidMount() {
      fetch("http://localhost:4000/courses/")
        .then(rsp => rsp.json())
        .then(data => {
            this.setState({
                courses: data
            })
        }).catch(console.error()
        )
    }

    render() {
        const {courses} = this.state
    return (
        <div>
        <Navbar icon={"fas fa-clipboard-check"} title={"Flex Course Manager"}/>
        <div>
            <Switch>
                <Route exact path="/courses" render={routeProps => <Courses {...routeProps} courses={courses}/>} />
                <Route exact path="/courses/:id" render={routeProps => <Course {...routeProps}/>}/>
                <PrivateRoute exact path="/profile" render={routeProps => <Profile {...routeProps}/>}/>
            </Switch>
        </div>
    </div>
    )
}
}

export default ClassApp
