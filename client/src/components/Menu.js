import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setFlash } from '../actions/flash';
import { Segment, Header, List } from 'semantic-ui-react';

class Menu extends React.Component {
  state = { dishes:[] }

  componentDidMount() {
    const { dispatch } = this.props;
    axios.get('/api/dishes')
      .then(res => {
        this.setState({ dishes: res.data })
      }).catch(err =>{
        dispatch(setFlash('Unable to retrieve dishes. Please try again', 'red'))
      });
  }

  displayDishes = () => {
    const { dishes } = this.state;
    return dishes.map( dish => {
      return (
        <List.Item>
          <Link to={`/dishes/${dish.id}`}>
            {dish.name}, ${dish.price}
          </Link>
        </List.Item>
      );
    });
  }

  render () {
    return (
      <Segment basic>
        <Header as='h1'>Menu</Header>
        <List>
          {this.displayDishes()}
        </List>
      </Segment>
    );
  }
}

export default connect()(Menu);
