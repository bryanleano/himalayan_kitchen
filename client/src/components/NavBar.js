import React, { Component } from 'react';
import { Image, Menu, Segment } from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleLogout } from '../actions/auth';
import logo from '../images/logo.png'

class NavBar extends Component {
  rightNavs = () => {
    const { user, dispatch, history } = this.props;

    if (user.id) {
      return (
        <Menu.Menu position='right'>
          <Menu.Item
            name='Logout'
            onClick={() => dispatch(handleLogout(history))}
          />
        </Menu.Menu>
      );
    }
    return (
      <Menu.Menu position='right'>
        <Link to='/register'>
          <Menu.Item name='Register' />
        </Link>
        <Link to='/login'>
          <Menu.Item name='Login' />
        </Link>
      </Menu.Menu>
    );
  }

  render() {
    return (
      <div style={{ backgroundColor: "#f0b100", paddingTop: 5 }}>
        <Image centered src={logo} style={{ height: 75 }} />
        <Segment basic style={{ marginTop: 0 }}>
          <Menu pointing secondary style={{ backgroundColor: "#f0b100" }}>
            <Link to='/'>
              <Menu.Item name='Home' />
            </Link>
            <Link to='/menu'>
              <Menu.Item name='Menu' />
            </Link>
            <Link to='/about'>
              <Menu.Item name='About' />
            </Link>
            <Link to='/contact'>
              <Menu.Item name='Contact' />
            </Link>
            <Link to='/meettheteam'>
              <Menu.Item name='Meet the Team' />
            </Link>
            { this.rightNavs() }
          </Menu>
        </Segment>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { user: state.user };
};

export default withRouter(connect(mapStateToProps)(NavBar));
