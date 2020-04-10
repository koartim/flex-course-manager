import React from 'react';
import Navbar from './components/Navbar';
import { useAuth0 } from "./react-auth0-spa";


function App() {

  const { loading } = useAuth0();

  if (loading) {
    return <div>Loading...</div>
  }
  // componentDidMount() {
  //   fetch("courses.json")
  //     .then(rsp => rsp.json())
  //     .then(data => console.log(data))
  // }

 
  return (
    <div>
      <header>
        <Navbar/>
      </header>
    </div>
  );
}

export default App;
