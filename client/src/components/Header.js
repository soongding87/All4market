import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Payments from './Payments';
class Header extends Component {


  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li>
            <a href="/auth/google">Login With Google</a>
          </li>
        );
      default:
        return [
          <li key="1"> <Payments /> </li>
          ,
          <li key="3" style={{ margin: '0 10px'}}> Credits: {this.props.auth.credits} </li>,
          <li key="2">
            <a href="/api/logout">Logout</a>
          </li>
        ];
    }
  }

  render() {
    console.log(this.props);
    return (
      <nav>
        <div className="nav-wrapper indigo darken-4">
          <Link
            to='/'
            className="left brand-logo"
          >
            <i className="material-icons">music_video</i>
            Buskers
          </Link>
          <ul className="right hide-on-med-and-down">
            <li>
              <Link to="/performposts"> Busking list</Link>
            </li>
            <li>
              <Link to="/shopposts"> Shop</Link>
            </li>


            {/* <li>
              <Link to="/surveys"> InviteFriend</Link>
            </li> */}
            {this.renderContent()}
            <li>
              <Link to="/mypage"> Mypage</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
