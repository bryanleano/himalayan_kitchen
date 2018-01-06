import React from 'react';
import axios from 'axios';
import DishForm from './DishForm';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setFlash } from '../actions/flash';
import { Card, Dimmer, Grid, Loader, Segment } from 'semantic-ui-react';

class Menu extends React.Component {
  state = { dishes: [] }

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
    if( dishes.length > 0 ) {
      return dishes.map( dish => {
        return (
          <Grid.Column key={dish.id}>
            <Card as={Link} to={`/dishes/${dish.id}`} raised styles={{ padding: 5 }}>
              <Card.Content>
                <Card.Description styles={{ textAlign: "center" }}>
                  {dish.name}: ${dish.price}
                </Card.Description>
              </Card.Content>
            </Card>
          </Grid.Column>
        )
      })
    } else {
      return (
        <Dimmer inverted active style={{ height: "50vh"}}>
          <Loader active>Loading items...</Loader>
        </Dimmer>        
      )
    }
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
            <Segment style={{ backgroundColor: "#fffdef", height: "auto" }}>
              <DishForm addDish={this.addDish}/> <br />
              <Grid container columns={3}>
                <Grid.Row>
                  {this.displayDishes()}
                </Grid.Row>
              </Grid>
            </Segment>
          </Grid.Column>
          <Grid.Column width={2}/>
        </Grid.Row>
      </Grid>
    );
  }
}

export default connect()(Menu);
