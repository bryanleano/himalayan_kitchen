import React, { Component } from 'react';
import { Grid, Header, Segment, Image, Card } from 'semantic-ui-react';
import himfood from '../images/himfood.png'

const FoodCard = () => (
  <Card>
    <Image src='../images/himfood.png' />
    
    
  </Card>
)
class Home extends Component {
  render() {
    return (
      <Grid centered>
      <Grid.Row>
        <Grid.Column width={2}/>
        <Grid.Column width={12}>
          <Segment style={{ backgroundColor: "#fffdef", height: "100vh" }}>
            <Grid>
              <Grid.Column width={11}>
                <Header as="h1">
                  
                </Header>
                <div style={{ marginLeft: "15px", textAlign: "justify" }}>
                

                  
                </div>
              </Grid.Column>
            </Grid>
          </Segment>
        </Grid.Column>
        <Grid.Column width={2}/>
      </Grid.Row>
    </Grid>
    );
  }
}

export default Home;
