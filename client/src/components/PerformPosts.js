import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import axios from 'axios';


class PerformPosts extends Component {
  constructor() {
    super();
    this.state = {
      posts : {}
    }
    axios.get('/api/performposts').then(res =>
    this.setState({posts : res.data}))
  }

renderPosts(posts) {
    return posts.map(post => (
        <ul>
          <li> post.title </li>
        <li> post.body </li>
        </ul>
    )
  )
}

  render() {
    let posts = (this.state.posts);
    console.log(posts)
    return (
      <div>
<div>
  {/* {this.renderPosts(posts)} */}
</div>
      <div className="fixed-action-btn">
      <Link to="/performposts/new" className="btn-floating btn-large blue">
        <i className="material-icons">add</i>
    </Link>
  </div>
</div>
    )
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(PerformPosts);
