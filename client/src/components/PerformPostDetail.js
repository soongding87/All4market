import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class PerformPostDetail extends Component {
  constructor() {
    super();
    this.state = {
      post: null
    };
  }

  async componentDidMount() {
    const res = await axios.get(
      `/api/performposts/${this.props.match.params.id}`
    );
    this.setState({ post: res.data });
  }

  renderPost(post) {
    const postDetailStyle = {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column'
    };

    if (post) {
      return (
        <div>
        <div className="postDetails" style={postDetailStyle}>
          <div className="img">
            {' '}
            <img src={post.imageURL} alt="no img" />{' '}
          </div>

          <h2>{post.title}</h2>
          <p>{post.body} </p>
        </div>
          <div class="video-container">
<iframe  src={`//${post.videoURL}`} frameborder="1" allowfullscreen="true"></iframe>
             </div>

        </div>
      );
    }
  }

  render() {
    return <div>{this.renderPost(this.state.post)}</div>;
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(PerformPostDetail);
