import React, { Component } from 'react';
import {connect} from 'react-redux'


class Users extends Component {

  render() {
    // debugger
    return (
      <div>
        <ul>
          Users!
          {console.log(this.props.users)}
          {console.log(this.props.userCount)}
          {this.props.users.map(u => <li>{u.username}</li>)} <br/>
          Count: {this.props.userCount}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => { 
  return {users: state.users, userCount: state.users.length}
}

// connect this component to Redux
export default connect(mapStateToProps)(Users)
