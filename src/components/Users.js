import React, { Component } from 'react';
import { connect } from 'react-redux'

// add any needed imports here

class Users extends Component {

  render() {
    return (
      <div>
        <ul>
          Users!
          <p>{this.props.users.map(user => <li>{user.username}</li>)}</p>
          <p>{this.props.userCount}</p>
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users, 
    userCount: state.users.length
  }
}

export default connect(mapStateToProps)(Users)