import React from 'react';
import { Link } from 'react-router-dom'

class SubscriptionItem extends React.Component {
  render() {
    const { subscription } = this.props
    return (
      <div className="card text-center">
        <img src={subscription.sub_img} alt="image unavailable"/>
        <h3>{subscription.sub_name}</h3>
        <p>{subscription.course_description}</p>
        <Link to={`/subscriptions/${subscription.id}`}>
        <button className="btn btn-light my-2"> View Subscription</button>
        </Link>
      </div>
    )
  }
}
// <img src={this.props.subscription.image} alt="" style={{width:'60px'}} />
// <h3>{props.course.name}</h3>
// <p>{props.course.difficulty}</p>

export default SubscriptionItem;
