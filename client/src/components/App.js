import React , { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Header from './Header';
import Landing from './Landing';
import Invite from './Invite';
import PerformPosts from './PerformPosts';
import PerformPostsNew from './PerformPostsNew';
import PerformPostDetail from './PerformPostDetail';

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }


  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={Landing} />
            <Route exact path="/surveys" component={Invite} />
            <Route exact path="/performposts" component={PerformPosts} />
            <Route path="/performposts/:id" component={PerformPostDetail} />
            <Route path="/performposts/new"  component={PerformPostsNew}/>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
