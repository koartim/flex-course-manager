import React from 'react';
import Navbar from './components/Navbar';
import { useAuth0 } from "./react-auth0-spa";
import history from "./utils/history";
import ClassApp from './ClassApp';
import Spinner from './Spinner';

function App() {

  const { loading } = useAuth0();


  if (loading) {
    return (
    <div>
      <div>
    <Navbar />
      </div>
    <Spinner/>
    </div>
    
    )
  } 
  return (
      <div>
        <ClassApp />
      </div>
  
  );
}

export default App;