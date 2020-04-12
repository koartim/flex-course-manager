import React from 'react';
import Navbar from './components/Navbar';
import { useAuth0 } from "./react-auth0-spa";
import Profile from './components/Profile';
import history from "./utils/history";
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import Courses from './components/users/Courses';

function App() {

  const { loading } = useAuth0();

  if (loading) {
    return <div>Loading...</div>
  } 
  return (
    <div className="App">
      <header>
        <Navbar icon={"fas fa-clipboard-check"} title={"Flex Course Manager"}/>
      </header>
      <Switch>
        <Route exact path="/" render={routeProps => <Courses />} />
        <PrivateRoute exact path="/profile" render={routeProps => <Profile {...routeProps}/>}/>
      </Switch>
    </div>
  );
}

export default App;
  // componentDidMount() {
  //   fetch("courses.json")
  //     .then(rsp => rsp.json())
  //     .then(data => console.log(data))
  // }
