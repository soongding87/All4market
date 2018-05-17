import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';

class Mypage extends Component {
  constructor() {
    super();
    this.state = {
      posts: null
    };

  }

  renderPosts=(post)=> {

    if (post) {
      return  (
        <div className="row">
        <div className="col m4" >
          <div className="card medium">
            <div className="card-image">
              <img src={post.imageURL} alt=" No img" />
            </div>
            <div className="card-content">
              <h5> {post.title}</h5>
              <p>{post.body}</p>
              <h5> price: {post.price} </h5>
            </div>
            <div className="card-action">

            </div>
          </div>
        </div>
      </div>
      );
    }
  }


  render() {
    if(this.props.auth){
    axios
      .get(`/api/shopposts/${this.props.auth.bought}`)
      .then(res => this.setState({ posts: res.data }));
}
    return (
      <div>
        <h3>My inventory</h3>
        {this.renderPosts(this.state.posts)}
      </div>


    );
  }
}


function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Mypage);
