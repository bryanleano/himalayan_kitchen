import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { setFlash } from '../actions/flash';
import { Link } from 'react-router-dom';
import { Button, Form } from 'semantic-ui-react';

class DishForm extends React.Component {
  state = { dish: { name: '', ingredients: '', price: '' } };

  componentDidMount() {
    const match = this.props.match;
    const { dispatch } = this.props;
    if (match)
      axios.get(`/api/dishes/${match.params.id}`)
        .then( res => {
          this.setState({ dish: res.data })
        }).catch( err => {
          dispatch(setFlash('Unable to fetch dish. Please try again', 'red'))
        });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let baseUrl = '/api/dishes';
    const { dispatch } = this.props;
    const { id, name, ingredients, price } = this.state.dish;
    baseUrl = id? `${baseUrl}/${id}` : baseUrl;
    const params = { dish: { name, ingredients, price } }

    if(id)
      axios.put(baseUrl, params)
        .then(res => {
          this.props.history.push(`/dishes/${id}`);
        }).catch( err => {
          dispatch(setFlash('Unable to fetch dish. Please try again', 'red'))
        });
    else
      axios.post(baseUrl, params)
        .then(res => {
          this.setState({ dish: { name: '', ingredients: '', price: '' } });
          this.props.addDish(res.data);
        }).catch( err => {
          dispatch(setFlash('Unable to fetch dish. Please try again', 'red'))
        });
  }

  handleChange = (e) => {
    const { id, value } = e.target;
    this.setState({ dish: {...this.state.dish, [id]: value } });
  }

  cancelButton = () => {
    const { id } = this.state.dish;
    if(id)
      return(<Button as={Link} to={`/dishes/${id}`}>Cancel</Button>);
  }

  render() {
    const { name, ingredients, price } = this.state.dish;

    return(
      <Form onSubmit={this.handleSubmit}>
        <Form.Group widths='equal'>
          <Form.Input label='Name' value={name} id='name' onChange={this.handleChange} />
          <Form.Input label='Price' value={price} id='price' onChange={this.handleChange} />
          <Form.Input label='Special Ingredient' value={ingredients} id='ingredients' onChange={this.handleChange} />
        </Form.Group>
        { this.cancelButton() }
        <Button type='submit'>Save</Button>
      </Form>
    );
  }
}

export default connect()(DishForm);
