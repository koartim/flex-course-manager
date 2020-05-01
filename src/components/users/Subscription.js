import React from 'react';

class Subscription extends React.Component {
  render() {
    console.log(this.props);
    return(
      <div>
        <h1>{this.props.name}</h1>
      </div>
    )
  }
}

export default Subscription;
