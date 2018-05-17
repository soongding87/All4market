import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import axios from 'axios';


class PerformPosts extends Component {
  constructor() {

    super();
    this.state = {
      posts : null
    }
    axios.get('/api/performposts').then(res =>
     this.setState({posts : res.data}))
  }

renderPosts(posts) {
  console.log(posts)
if(posts){
    return posts.map((post,i) => (
           <div key={i} className="card medium">
             <div className="card-image">
               <img src={post.imageURL} alt=" No img"/>
             </div>
             <div className="card-content">
               <h4> {post.title}</h4>
            {post.body}
             </div>
             <div className="card-action">
             <Link to={`/performposts/${post._id}`}>Let's get some more details </Link>
             </div>

       </div>

    )
  )
}
}


  render() {

    return (
      <div>
        <div className="row">
           <div className="col s4">
{this.renderPosts(this.state.posts)}
</div>
</div>
<div>
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
