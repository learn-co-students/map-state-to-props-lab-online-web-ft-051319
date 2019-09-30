import React, { Component } from 'react';
import { connect } from 'react-redux';

class Users extends Component {



  render() {
    let usernames = this.props.users.map(user => {
      return <li key={user.username}>{user.username}</li>;
    })

    return (
      <div>
        <h1>Total users added: {this.props.users.length}</h1>
        <ul>
          {usernames}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here

const mapStateToProps = state => {
  return {users: state.users}
}

export default connect(mapStateToProps)(Users);
