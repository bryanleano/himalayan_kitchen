import React from 'react';
import { Link } from 'react-router-dom';
import { Segment, Header, List } from 'semantic-ui-react';
import axios from 'axios';

class Menu extends React.Component {
  state = { dishes:[] }

  componentDidMount() {
    axios.get('/api/dishes')
      .then(res => {
        this.setState({ dishes: res.data })
      }).catch(err =>{
        console.log(err);
      });
  }

  displayDishes = () => {
    return this.state.dishes.map( dish => {
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

export default Menu;
