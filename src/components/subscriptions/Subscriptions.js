import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { FETCH_SUBSCRIPTIONS } from '../../Actions';
import SubscriptionItem from './SubscriptionItem';

class Subscriptions extends React.Component {

  componentDidMount() {
    fetch("http://localhost:3001/api/v1/subscriptions")
      .then(rsp => rsp.json())
      .then(subs  => this.props.fetchSubscriptions(subs))
  }
  render() {
    console.log(this.props);
    const { subscriptions, currentUser } = this.props
    const userSubs = subscriptions.filter(sub => {
      return sub.user_id === currentUser.user.id
    })
    console.log(userSubs);
    return(
      <div style={subStyle}>
      <div>
      <h3>{currentUser.user.username}'s subscriptions</h3>
      </div>
      <div>
        {userSubs.map(subscription => (
          <SubscriptionItem subscription={subscription} key={subscription.id}/>
        ))}
        </div>
      </div>
    )
  }
}
//
// <div style={courseStyle}>
//     {courses.map(course => (
//         <CourseItem course={course} key={course.id}/>
//     ))}
// </div>


const subStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem'
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
      dispatch({type: FETCH_SUBSCRIPTIONS, payload: subscriptions})
    }
  }
}
export default connect(msp, mdp) (withRouter(Subscriptions));
