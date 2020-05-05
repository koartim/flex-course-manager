import React from 'react';
import { connect } from 'react-redux';
import { FETCH_SUBSCRIPTION } from '../Actions';

class Quiz extends React.Component {
  
  componentDidMount() {
    fetch(`http://localhost:3001/api/v1/subscriptions/${this.props.match.params.id}`)
      .then(rsp => rsp.json())
      .then(sub => this.props.fetchSubscription(sub))
  }

  render() {
    console.log(this.props);
    return(
      <div>
        <h1>Quiz Component</h1>
      </div>
    )
  }
}

const msp = (state) => {
  return {
    subscription: state.subscription,
    fetchSubscription: state.fetchSubscription
  }
}

const mdp = (dispatch) => {
  return {
    fetchSubscription: (subscription) => {
      dispatch({type: FETCH_SUBSCRIPTION, payload: subscription})
    }
  }
}

export default connect(msp, mdp) (Quiz)
