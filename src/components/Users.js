import React, { Component } from 'react';
// add any needed imports here
import { connect } from 'react-redux'

class Users extends Component {

  render() {
    debugger
    return (
      <div>
        <ul>
          Users!
          {/* Write code here that displays the usernames of all users in the Redux store */}
          {/* In addition, display the total number of users curently in the store */}
          <p>{this.props.users.map(user => <li>{user.username}</li>)}</p>
          <p>{this.props.users.length}</p>
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (state) => {
	return { users: state.users };
};
  
// connect this component to Redux
export default connect(mapStateToProps)(Users)
