import React from 'react';
import '../../App.css'
import { connect } from 'react-redux';
import { FETCH_SUBSCRIPTION } from '../../Actions';

class Subscription extends React.Component {

  componentDidMount() {
    fetch(`http://localhost:3001/api/v1/subscriptions/${this.props.match.params.id}`)
      .then(rsp => rsp.json())
      .then(data => this.props.fetchSubscription(data))
  }

  render() {
    console.log(this.props.currentUser);
    return(
      <div className="card grid-1" style={{ margin: '6rem 8rem 8rem 8rem' }}>
        <div className="round-img" style={{width: "150px"}} src={this.props.subscription.sub_img} alt="">
        <h2>{this.props.subscription.sub_name}</h2>
        </div>
      </div>
    )
  }
}

const msp = (state) => {
  return {
   subscription: state.subscription,
   currentUser: state.currentUser
  }
}

const mdp = (dispatch) => {
  return {
    fetchSubscription: (subscription) => {
      dispatch({type: FETCH_SUBSCRIPTION, payload: subscription})
    }
  }
}

export default connect(msp, mdp) (Subscription)
