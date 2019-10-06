import React, { Component } from 'react';
import { connect } from 'react-redux'

class Users extends Component {

  render() {
    return (
      <div>
        <ul>
          {this.props.users.map(user =>{
           return <li key={user.id}>{user.username}</li>
          })}
          {this.props.userCount}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {users: state.users,
    userCount: state.users.length
  }
}

export default connect(mapStateToProps)(Users);
