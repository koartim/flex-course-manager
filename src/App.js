import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import { useAuth0 } from "./react-auth0-spa";
import history from "./utils/history";
import ClassApp from './ClassApp';
import Spinner from './Spinner';
import { token, domain_url } from './token';

function App() {

  const { loading, user } = useAuth0();

  localStorage.setItem("user", JSON.stringify({user}))

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
