import React, { Component } from 'react';
import {connect} from 'react-redux'
class Users extends Component {

  render() {
    return (
      <div>
        <ul>
          Users!
          <br/>
          {this.props.users.map((user, i) => {
            return (
              <li key={i}>{user.username}, Hometown: {user.hometown}</li>
            )
          })}
          <br/>
          Number of Users: {this.props.users.length}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users
  }
}

export default connect(mapStateToProps)(Users)
