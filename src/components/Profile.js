import React, { Fragment } from 'react';
import Spinner from '../Spinner';
import Subscription from './users/Subscription';
import { connect } from 'react-redux';
import { FETCH_SUBSCRIPTIONS } from '../Actions';

class Profile extends React.Component {

  state = {
    userSubs: []
  }

  componentDidMount() {
    fetch("http://localhost:3001/api/v1/subscriptions")
      .then(rsp => rsp.json())
      .then(data => this.props.fetchSubscriptions(data))
  }

render() {
  const { loading, currentUser, courses } = this.props
  
  const subscriptions = this.props.subscriptions.map(sub => {
    if (sub.user_id === currentUser.user.id) {
      return <Subscription
                name={sub.sub_name}
                image={sub.sub_img}
                description={sub.course_description}
                id={sub.id}
                user_id={sub.user_id}
            />
    }
  })
    if (loading) {
        return <Spinner/>
    }
  return (
    <Fragment>
          <h1>{currentUser.user.username}</h1>
          <img style={{width:'120px'}} src={currentUser.user.img_url} alt="img not found"/>
          <p>{currentUser.user.bio}</p>
          <h2>Subscriptions</h2>
              {subscriptions}
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
