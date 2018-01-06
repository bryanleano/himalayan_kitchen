import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setFlash } from '../actions/flash';
import { Button, Segment, Header, List } from 'semantic-ui-react';

class Dish extends React.Component {
  state = { dish: {} };

  componentDidMount() {
    const dishId = this.props.match.params.id;
    const { dispatch } = this.props;
    axios.get(`/api/dishes/${dishId}`)
      .then( res => {
        this.setState({ dish: res.data })
      }).catch( err => {
        dispatch(setFlash('Unable to retrieve dish. Please try again', 'red'))
      });
  }

  deleteDish = () => {
    const { dish } = this.state;
    const { dispatch } = this.props;
    axios.delete(`/api/dishes/${dish.id}`)
      .then( res => {
        this.props.history.push('/menu')
      }).catch( err => {
        dispatch(setFlash('Unable to delete dish. Please try again', 'red'))
      });
  }

  displayDish = () => {
    const { id, name, ingredients, price } = this.state.dish;
    return (
      <Segment basic>
        <Header as='h1'>{name}</Header>
        <List>
          <List.Item>Price: ${price}</List.Item>
          <List.Item>Special Ingredient: {ingredients}</List.Item>
        </List>
          <Button as={Link} to={'/menu'}>Back to Menu</Button>
          <Button onClick={this.deleteDish}>Delete</Button>
          <Button as={Link} to={`/dishes/${id}/edit`}>Edit</Button>
      </Segment>
    );
  }

  render () {
    return (
      <Segment basic>
        <Header as='h1'>Dish</Header>
        {this.displayDish()}
      </Segment>
    );
  }
}

export default connect()(Dish);
