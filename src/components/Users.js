import React, { Component } from 'react';
import { connect } from 'react-redux'

class Users extends Component {

  render() {
    return (
      <div>
        <ul>
          Users!
          <br>
          </br>
          {/* Write code here that displays the usernames of all users in the Redux store */}
          {/* In addition, display the total number of users curently in the store */}
          <p>{this.props.users.map(u => <li> {u.username} </li> )}</p>
          <p>{this.props.users.length}</p>
        </ul>
      </div>
    )
  }
}



const mapStateToProps = state => {
  return {
    users: state.users
  }
}

export default connect(mapStateToProps)(Users);
