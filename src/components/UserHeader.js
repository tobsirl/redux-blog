import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchUser } from '../actions';
class UserHeader extends Component {
  componentDidMount() {
    this.props.fetchUser(this.props.userId);
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <h4>{this.props.name}</h4>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { user: state.user };
};

export default connect(
  mapStateToProps,
  { fetchUser }
)(UserHeader);
