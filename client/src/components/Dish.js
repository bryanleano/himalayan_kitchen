import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Button, Segment, Header, List } from 'semantic-ui-react';
import axios from 'axios';

class Dish extends React.Component {
  state = { dish: {} };

  render () {
    return (
      <Segment basic>
        <Header as='h1'>Dish</Header>
      </Segment>
    );
  }
}

export default Dish;
