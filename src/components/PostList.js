import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchPosts } from '../actions';

class PostList extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  renderList() {
    return this.props.posts.map(({ id, title, body }) => {
      return (
        <div className="item" key={id}>
          <i className="large middle aligned icon user" />
          <div className="content">
            <div className="description">
              <h2>{title}</h2>
              <p>{body}</p>
            </div>
          </div>
        </div>
      );
    });
  }

  //<li style={{ listStyle: 'none' }}>{post.title}</li>
  render() {
    console.log(this.props.posts);
    return <div>{this.renderList()}</div>;
  }
}

const mapStateToProps = state => {
  return { posts: state.posts };
};

export default connect(
  mapStateToProps,
  { fetchPosts }
)(PostList);
