import React from 'react';
import axios from 'axios';
import DishForm from './DishForm';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setFlash } from '../actions/flash';
import { Grid, Segment, Header, List } from 'semantic-ui-react';

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

  addDish = (dish) => {
    this.setState({ dishes: [dish, ...this.state.dishes] });
  }

  render () {
    return (
      <Grid centered>
        <Grid.Row>
          <Grid.Column width={2}/>
          <Grid.Column width={12}>
            <Segment style={{ backgroundColor: "#fffdef", height: "100vh" }}>
              <DishForm addDish={this.addDish}/>
              <List>
                {this.displayDishes()}
              </List>
            </Segment>
          </Grid.Column>
          <Grid.Column width={2}/>
        </Grid.Row>
      </Grid>
    );
  }
}

export default connect()(Menu);
