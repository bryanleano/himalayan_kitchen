import React from 'react';
import { Grid, Segment, Header } from 'semantic-ui-react';

const MeetTheTeam = () => (
  <Grid centered>
      <Grid.Row>
        <Grid.Column width={2}/>
        <Grid.Column width={12}>
          <Segment style={{ backgroundColor: "#fffdef", height: "auto" }}>
            <Grid>
              <Grid.Column width={11}>
                <Header as="h1">
                  Meet the Team - JAABI Studios:
                </Header>
                <div style={{ marginLeft: "15px", textAlign: "justify" }}>
                  <br/>
                  <p>JAABI Studios was founded in 2018 when five students were randomly grouped together for a Hackathon project. Determined to succeed, they decided to join forces and become their own company.</p>
                  <br/>
                  <p>For their projects, JAABI Studios uses JavaScript and React in their front-end and Ruby on Rails for their back-end. This is what they were taught at DevPoint Labs and is the only thing they know at the moment.</p>
                  <br/>
                  <p>Members of JAABI Studios are currently looking for employment.</p>
                </div>
              </Grid.Column>
            </Grid>
          </Segment>
        </Grid.Column>
        <Grid.Column width={2}/>
      </Grid.Row>
    </Grid>
)
  

export default MeetTheTeam