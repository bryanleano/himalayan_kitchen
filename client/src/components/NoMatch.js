import React, { Component } from 'react';
import { Header, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import himalaya from '../images/himalaya.jpg'

class NoMatch extends Component {
  render() {
    return (
      <Segment style={styles}>
        <Header size='large' textAlign='center' color='yellow'>
          404 Error
        </Header>
        <Header size='large' textAlign='center' color='yellow'>
          You got lost in the Himalayas!
        </Header>
        <Header size='large' textAlign='center' color='yellow'>
          Click to go <Link to='/'> Home</Link>
        </Header>
      </Segment>
    );
  }
}

const styles = {
  backgroundImage: "url(" + himalaya + ")",
  backgroundSize: 'cover',
  overflow: 'hidden', 
  height: '100vh',
  marginTop: -20,
  marginBottom: -20,
}

export default NoMatch;
