import React, { Component } from 'react';
import {connect} from 'react-redux';

class Users extends Component {

  render() {
    return (
      <div>
        <ul>
          {this.props.users.map(user=><li>{user.username}</li>)}
        </ul>
        <p>Number of Users: {this.props.userCount} </p>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  debugger;
  return {users: state.users, userCount: state.users.length}
}

export default connect(mapStateToProps)(Users)
