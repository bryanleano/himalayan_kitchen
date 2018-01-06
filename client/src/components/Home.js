import React, { Component } from 'react';
import { Card, Grid, Header, Image, Segment } from 'semantic-ui-react';

const FoodCard = () => (
  <Card>
    <Image src='../images/himfood.png' />


  </Card>
)
class Home extends Component {
  render() {
    return (
      <Segment style={styles.backgroundImage}>
        <Grid columns={2}>
          <Grid.Row>
            <Grid.Column>
              <Header
                textAlign='center'
                style={styles.headerText}
                >
                Join us at our table.
              </Header>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    );
  }
}

const styles = {
  backgroundImage: {
    background: `linear-gradient( rgba(0, 0, 0, .25), rgba(0, 0, 0, .55) ), url(${image_name})`,
    backgroundSize: 'cover',
    overflow: 'hidden',
    width: '100%',
    height: '100vh',
  },
    headerText: {
    color: '#fffdef',
    fontFamily: 'helvetica',
    fontSize: '7em',
    letterSpacing: '5px',
    marginTop: '55%',
  },
}

export default Home;
