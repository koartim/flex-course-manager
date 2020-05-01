import React from 'react';
import '../Search.css'

class Search extends React.Component {

  state = {
    query: ""
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })

  }

  handleSubmit = (e) => {
    e.preventDefault();
  }

  render() {
    return(
      <div className="Search">
        <label htmlFor="query">Search for a course...</label>
        <input className="Search input" type="text" name="term" placeholder="search courses..."/>
        <button className="Search button">Search</button>
      </div>
    )
  }
}

export default Search;
