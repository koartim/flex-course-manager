import React from 'react';
import Navbar from './components/Navbar';
import { useAuth0 } from "./react-auth0-spa";
import history from "./utils/history";
import ClassApp from './ClassApp';

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
      <div>
        <ClassApp />
      </div>
    </div>
  );
}

export default App;