import React from 'react';
import { Header, Segment, Button, Container, Grid, Icon, Image } from 'semantic-ui-react';


class Home extends React.Component {
  render() {
    return (
      <div>
        <Header as="h1" style={styles.pageHeaders}>Professional Eyelash Extensions</Header>
        <Segment style={{ padding: '3em 0em' }} vertical>
        <Grid container stackable verticalAlign='middle'>
          <Grid.Row>
            <Grid.Column style={{fontFamily: 'Arsenal'}} width={8}>
              <Header as='h3' style={{ fontSize: '2em', fontFamily: 'Arima Madurai' }}>Why Choose Sassy Lash?</Header>
                <p style={{ fontSize: '1.33em' }}>
                We get all of our professionals and run them through a rigerous process to weed out those who don't deserve your business. We only work with the highest quality and affordable professionals who do what they say they will do.
              </p>
              <Header as='h3' style={{ fontSize: '2em' }}>Your Contractor Doesn't Get Paid Until You Are 100% Satisfied!</Header>
              <p style={{ fontSize: '1.33em' }}>
                Once you find a contractor and agree to how and when your project will be finished, you fund the project and we hold the funds until you are 100% satisfied with the work done. If you aren't happy, we will refund you 100%.
              </p>
            </Grid.Column>
            <Grid.Column floated='right' width={6}>
              <Image
                bordered
                rounded
                size='large'
                src='../images/volume8.JPG'
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <Segment inverted vertical style={{ padding: '2em 0em',backgroundColor: "black", fontFamily: 'Arsenal' }}>
        <Container>
          <Grid divided inverted stackable>
            <Grid.Row>
              <Grid.Column width={5}>
                <Header inverted as='h3' style={{fontFamily: 'Arsenal'}}content='Contact Janessa' />
                <div link inverted>
                  <p>(801) 688-6823</p>
                  <p>nessablueeyes7@hotmail.com</p>
                  <p>10691 S State Street, #107<br />Sandy, Utah 84070</p>
                  <div textAlign='center' relaxed columns={3}>
                      <Button circular color='facebook' icon='facebook' />
                      <Button circular color='instagram' icon='instagram' />
                    </div>
                </div>
              </Grid.Column>
              <Grid.Column width={10} verticalAlign="middle">
                <Header style={{fontFamily: 'Arsenal'}}as='h3' inverted>About</Header>
                <p>We get all of our professionals and run them through a rigerous process to weed out those who do not deserve your business. We only work with the highest quality and affordable professionals who do what they say they will do.</p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
      </div>
    );
  }
}
const styles = {
  pageHeaders: {
    fontFamily: 'Great Vibes',
    fontSize: '60px',
    textAlign: 'center',
  },
  headers: {
    fontFamily: 'Great Vibes',
    fontSize: '45px'
  },
  cardHeaders: {
    fontFamily: '',
    fontSize: '30px'
  }
}
export default Home;
