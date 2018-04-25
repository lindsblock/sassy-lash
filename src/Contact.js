import React from 'react';
import { Grid, Header, Segment, Image } from 'semantic-ui-react';


class Contact extends React.Component {
  render() {
    return (
      <div >
        <Header as="h1" textAlign='center'> Contact Me</Header>
          <Segment style={{ padding: '8em 0em' }} vertical>
          <Grid container stackable verticalAlign='middle'>
            <Grid.Row>
              <Grid.Column floated='left' width={6}>
                <Image
                  bordered
                  rounded
                  size='large'
                  src='../images/IMG_5373.JPG'
                />
              </Grid.Column>
              <Grid.Column width={8}>
                <Header as='h3' style={{ fontSize: '2em' }}>We Find Local Professionals You Can Trust!</Header>
                <p style={{ fontSize: '1.33em' }}>
                  We get all of our professionals and run them through a rigerous process to weed out those who don't deserve your business. We only work with the highest quality and affordable professionals who do what they say they will do.
                </p>
                <Header as='h3' style={{ fontSize: '2em' }}>Your Contractor Doesn't Get Paid Until You Are 100% Satisfied!</Header>
                <p style={{ fontSize: '1.33em' }}>
                  Once you find a contractor and agree to how and when your project will be finished, you fund the project and we hold the funds until you are 100% satisfied with the work done. If you aren't happy, we will refund you 100%.
                </p>
              </Grid.Column>

            </Grid.Row>
          </Grid>
        </Segment>
      </div>
    );
  }
}

export default Contact;
