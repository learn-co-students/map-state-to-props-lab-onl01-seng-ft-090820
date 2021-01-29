import React, { Component } from 'react';
import { connect } from 'react-redux';
class Users extends Component {

  render() {
    const users = this.props.users.map(u => <li>{u.username}</li>)
    return (
      <div>
        <ul>
          Users!
         {users}
        </ul>
        <p>{users.length}</p>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (state) => {
  return {users: state.users}
}

// connect this component to Redux
export default connect(mapStateToProps)(Users)
