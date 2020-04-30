import React, { Fragment } from 'react';
import Spinner from '../Spinner';
import { connect } from 'react-redux';
import { FETCH_SUBSCRIPTIONS } from '../Actions';

class Profile extends React.Component {

  componentDidMount() {
    fetch("http://localhost:3001/api/v1/subscriptions")
      .then(rsp => rsp.json())
      .then(data => this.props.fetchSubscriptions(data))
  }

render() {

  const { loading, currentUser, courses, subscriptions } = this.props
  console.log(subscriptions);
    if (loading) {
        return <Spinner/>
    }
  return (
    <Fragment>
          <h1>{currentUser.user.username}</h1>
          <img style={{width:'120px'}} src={currentUser.user.img_url} alt="img not found"/>
          <p>{currentUser.user.bio}</p>
          <h2>Subscriptions</h2>
          {subscriptions.map(sub => (
            <div>
            <li>{sub.sub_name}</li>
            <div>
              <p>{sub.course_description}</p>
            </div>
            </div>
          ))}
          <ul>

          </ul>
    </Fragment>
  )
 }
}

const msp = (state) => {
  return {
    subscriptions: state.subscriptions,
    currentUser: state.currentUser
  }
}

const mdp = (dispatch) => {
  return {
    fetchSubscriptions: (subscriptions) => {
      dispatch({type: FETCH_SUBSCRIPTIONS, payload: subscriptions })
    }
  }
}

export default connect(msp, mdp)(Profile);
