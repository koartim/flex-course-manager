import React, { Fragment } from 'react';
import Spinner from '../Spinner';
import { connect } from 'react-redux';

class Profile extends React.Component {

render() {
  const { loading } = this.props
  console.log(this.props.currentUser)
    if (loading) {
        return <Spinner/>
    }
  return (
    <Fragment>
          <h1>{this.props.currentUser.user.username}</h1>
          <img style={{width:'120px'}} src={this.props.currentUser.user.img_url} alt="img not found"/>
          <p>{this.props.currentUser.user.bio}</p>
    </Fragment>
  )
 }
}

const msp = (state) => {
  return {
    currentUser: state.currentUser
  }
}

export default connect(msp)(Profile);
