import React, { Fragment } from 'react';
import Spinner from '../../Spinner';
import Subscription from '../subscriptions/Subscriptions';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { FETCH_SUBSCRIPTIONS, SET_CURRENT_USER } from '../../Actions';
import '../../Profile.css';

class Profile extends React.Component {

render() {
  const { loading, currentUser} = this.props
    if (loading) {
        return <Spinner/>
    }
  return (
    <div className="card content 3">
          <h1>{currentUser.user.username}</h1>
          <img style={{width:'120px'}} src={currentUser.user.img_url} alt="img not found"/>
          <p>{currentUser.user.bio}</p>
          <Link to="/subscriptions">View Subscriptions</Link>
    </div>
  )
 }
}

const msp = (state) => {
  return {
    currentUser: state.currentUser
  }
}

const mdp = (dispatch) => {
  return {
    setCurrentUser: (currentUser) => {
      dispatch({type: SET_CURRENT_USER, payload: currentUser})
    }
  }
}

export default connect(msp, mdp)(Profile);
