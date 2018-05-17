import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import {  Redirect } from 'react-router-dom';

class ShopPostsNew extends Component {
  constructor(props) {
    super(props);

    this.state = {
      redirect: false
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    const title = event.target[0].value;
    const body = event.target[1].value;
    const imageURL = event.target[2].value;
    const price = event.target[3].value;

    const post = {
      title,
      body,
      imageURL,
      price
    };

    axios
      .post('/api/shopposts', post)
      .then(() => this.setState({ redirect: true }));
  };

  render() {
    const { redirect } = this.state;

    if (redirect) {
      return <Redirect to="/shopposts" />;
    }

    return (
      <div className="row">
        <form className="col s12" onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="input-field col s8">
              <input id="title" type="text" name="title" />
              <label>title</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s8">
              <textarea
                id="body"
                type="text"
                name="body"
                className="materialize-textarea"
              />
              <label>Body</label>
            </div>
          </div>

          <div className="row">
            <div className="input-field col s8">
              <input id="imageURL" type="text" name="imageURL" />
              <label>imageURL</label>
            </div>
          </div>

          <div className="row">
            <div className="input-field col s8">
              <input id="price" type="number" name="price" />
              <label>price</label>
            </div>
          </div>



          <button className="btn waves-effect waves-light" type="submit">
            Submit
            <i className="material-icons right">send</i>
          </button>
        </form>
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(ShopPostsNew);
