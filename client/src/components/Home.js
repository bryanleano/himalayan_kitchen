import React, { Component } from 'react';
import { Grid, Header, Segment } from 'semantic-ui-react';

class Home extends Component {
  render() {
    return (
      <Grid centered>
        <Grid.Row>
          <Grid.Column width={2}/>
          <Grid.Column width={12}>
            <Segment style={{ backgroundColor: "#fffdef", height: "100vh" }}>
              <Header as="h1">
                Home
              </Header>
            </Segment>
          </Grid.Column>
          <Grid.Column width={2}/>
        </Grid.Row>
      </Grid>    
    );
  }
}

export default Home;
