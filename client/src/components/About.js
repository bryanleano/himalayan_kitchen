import React from 'react'
import { Grid, Segment } from 'semantic-ui-react'

const About = () => (
  <Grid centered>
    <Grid.Row>
      <Grid.Column width={2}/>
      <Grid.Column width={12}>
        <Segment style={{ backgroundColor: "#fffdef", height: "100vh" }}>
          
        </Segment>
      </Grid.Column>
      <Grid.Column width={2}/>
    </Grid.Row>
  </Grid>
)

export default About