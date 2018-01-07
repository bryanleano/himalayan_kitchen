import React, { Component } from 'react';
import { Grid, Header, Segment, Image, Card, List } from 'semantic-ui-react';
class Contact extends Component {
  
  render() {
    return (
      <Grid collums={2} centered>
      <Grid.Row>
        <Grid.Column width={2}/>
        <Grid.Column width={12}>
          <Segment style={{ backgroundColor: "#fffdef", height: "100vh" }}>
            <Grid>
              <Grid.Column width={11}>
                <Header as="h1">
                  
                </Header>
                <div style={{ marginLeft: "15px", textAlign: "justify" }}>
                  <h1>Locations</h1>  
                  <list>
                    <List.Item>
                    <p>  Salt Lake City
                      360 South State Street
                      Salt Lake City, Utah 84111
                      Phone: 801-328-2077 </p>
                    </List.Item>
                    <List.Item>
                    <card>South Jordan
                    11521 South 4000 West
                    South Jordan , Utah 84095
                    Phone: 801-254-0800</card>
                    </List.Item>
                  </list>
                  <h1>Hours</h1>
                  <ul>
                    <li>Monday thru Saturday: 11:30AM to 10:00PM</li>
                    <li>Lunch Buffet: 11:30AM to 2:30PM only</li>
                    <li>Sunday: 5:00PM to 10:00PM</li>
                  </ul>
                  <h1>Welcome to the Himalayan Kitchen</h1>
                  <p>In the heart of downtown Salt Lake City, against the backdrop of the Wasatch Mountains, 
                    a unique culinary and cultural experience awaits you. Traditional Nepali and Indian Cuisine 
                    is prepared daily with the freshest ingredients from scratch by dedicated Nepali chefs.  
                    We welcome you to walk through our doors and experience the mouth-watering aroma and flavors 
                    of our curries, warm hand made naan, sizzling Tandoori grills, organic Himalayan coffee and 
                    more. All served in an inviting atmosphere by our friendly staff. Namaste! </p>
                  <p>Our Everest Hall is currently showing the beautiful traditional "Mithila Art" from the women's 
                    collective in Janukpur. For more info, visit http://mithila-art.blogspot.com/ Please visit us 
                    regularly and join our mailing list for special events and announcements.</p>
                  <p></p>
                  
                  
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
export default Contact;