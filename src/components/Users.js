import React, { Component } from 'react';
import {connect} from 'react-redux'


class Users extends Component {

  state = {
    users: [],
    userCount: ''
  }

  render() {
    debugger
    return (
      <div>
        <ul>
          Users!
          {console.log(this.props.users)}
          {console.log(this.props.userCount)}
          {this.props.users}
          {this.props.userCount}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => { 
  return {users: state.users.concat(state.username), userCount: state.users.length}
}

// connect this component to Redux
export default connect(mapStateToProps)(Users)
