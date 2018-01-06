import React from 'react'
import { Grid, Header, Segment } from 'semantic-ui-react'

const About = () => (
  <Grid centered>
    <Grid.Row>
      <Grid.Column width={2}/>
      <Grid.Column width={12}>
        <Segment style={{ backgroundColor: "#fffdef", height: "100vh" }}>
          <Grid>
            <Grid.Column width={11}>
              <Header as="h1">
                About Us:
              </Header>
              <div style={{ marginLeft: "15px", textAlign: "justify" }}>
                <p>Himalayan Kitchen Restaurant first opened its doors in October of 2005 at a modest downtown location. Surya Bastakoti, a para-glider and the owner of Mt. Pumori Trekking and Expeditions, left Nepal and came to Salt Lake City after traveling extensively through Europe, Asia and New York. Initially lured by the beauty of the mountains which bore an uncanny resemblance to the Himalayas, he settled here to start the first and only authentic award-winning Nepali Restaurant in Utah.</p>
                <p>With the support of the climbing community and our "regulars," Himalayan Kitchen had extraordinary success and in 2007' it was clear the restaurant, although a local favorite, needed to improve and expand. With all our original chefs, Surya's business experience and customer service, we are poised to develop the restaurant to its full potential.</p>
                <p>In 2009', after nearly two years of design and construction, the beautiful new Himalayan Kitchen at 360 South State was launched right around the corner from the old location.  We have been fortunate to receive rave reviews and the continuing support of our valued patrons.  Himalayan Kitchen "version 2.0," as described by renowned food critic Ted Scheffler, is going strong.  The owner, Surya Bastakoti is committed not only to culinary excellence and great customer service, but also to creating a cultural hub at Himalayan Kitchen.  Our friends can look forward to numerous art and charitable events on an ongoing basis, in addition to the delicious food and friendly service.</p>
              </div>
            </Grid.Column>
          </Grid>
        </Segment>
      </Grid.Column>
      <Grid.Column width={2}/>
    </Grid.Row>
  </Grid>
)

export default About