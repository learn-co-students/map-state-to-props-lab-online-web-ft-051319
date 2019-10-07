import React, { Component } from 'react';
import { connect } from 'react-redux';

class Users extends Component {

  render() {
    return (
      <div>
        Users!
        <ul>
          {this.props.users.map(u => <li key={u.username} >{u.username}</li>)}
        </ul>
        Total Users: {this.props.users.length}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {users: state.users, userCount: state.users.length}
}

export default connect(mapStateToProps)(Users)
