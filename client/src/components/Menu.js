import React from 'react';
import axios from 'axios';
import DishForm from './DishForm';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setFlash } from '../actions/flash';
import { Dimmer, Grid, List, Loader, Segment } from 'semantic-ui-react';

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
          <List.Item key={dish.id}>
            <Link to={`/dishes/${dish.id}`}>
              {dish.name}, ${dish.price}
            </Link>
          </List.Item>
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
