import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import * as actions from '../actions';

class ShopPosts extends Component {
  constructor() {
    super();
    this.state = {
      posts: null,
      auth: null
    };


    axios.get('/api/shopposts').then(res => this.setState({ posts: res.data }));
  }





handleClick=(id,e,price)=>{
  alert('You got it!')
  const product ={ userid:this.props.auth._id, price }
axios.post(`/api/shopposts/${id}`,product ).then(
)

}

  renderPosts(posts) {
    console.log(posts);
    if (posts) {
      return posts.map((post, i) => (
        <div key={i} className="col m4" >
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
              <button
                className="waves-effect btn blue"
                onClick={(e) => this.handleClick(post._id,e,post.price)}
              >
                  Buy it
              </button>
            </div>
          </div>
        </div>
      ));
    }
  }




  render() {
    return (
      <div>
        <div className="row">{this.renderPosts(this.state.posts)}</div>

        <div className="fixed-action-btn">
          <Link to="/shopposts/new" className="btn-floating btn-large blue">
            <i className="material-icons">add</i>
          </Link>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps,actions)(ShopPosts);
