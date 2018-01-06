import React, { Component } from 'react';
import { Grid, Header, Segment } from 'semantic-ui-react';
import { Header, Card } from 'semantic-ui-react';

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
      <Div>
        <Header as='h1' textAlign='center'>Home Component</Header>
        <p>In the heart of downtown Salt Lake City, against the backdrop of the Wasatch Mountains, a unique
           culinary and cultural experience awaits you. Traditional Nepali and Indian Cuisine is prepared daily
            with the freshest ingredients from scratch by dedicated Nepali chefs.  We welcome you to walk through
             our doors and experience the mouth-watering aroma and flavors of our curries, warm hand made naan, 
             sizzling Tandoori grills, organic Himalayan coffee and more. All served in an inviting atmosphere by 
             our friendly staff. Namaste! 

              Our Everest Hall is currently showing the beautiful traditional "Mithila Art" from the women's
               collective in Janukpur. For more info, visit http://mithila-art.blogspot.com/ Please visit us regularly
                and join our mailing list for special events and announcements.</p>
      </Div>

       

    );
  }
}

export default Home;
