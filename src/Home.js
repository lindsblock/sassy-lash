import React from 'react';
import { Header, Segment, Button, Container, Grid, Icon, Image } from 'semantic-ui-react';


class Home extends React.Component {
  render() {
    return (
      <div >
        <Header as="h1" style={styles.pageHeaders}>Professional Eyelash Extensions</Header>
        <Segment style={{ padding: '3em 2em' }} vertical>
        <Grid container stackable >
          <Grid.Row>
            <Grid.Column style={{fontFamily: 'Arsenal'}} width={9}>
              <Image size='medium' centered src='../images/elegant.png' style={{padding:"1px"}} />
              <Header as='h3' style={styles.secondaryHeaders}>Why Choose Sassy Lash?</Header>
                <p style={{ fontSize: '1.33em' }}>
                  Janessa has been doing lashes for years bla bla bla. This is where we have a long paragraph talking about how wonderful eyelash extensions are and how you look way better wih them because without them you are ugly.
              </p>
              <Header as='h3' style={styles.secondaryHeaders}>Boost Your Confidence!</Header>
              <p style={{ fontSize: '1.33em' }}>
                Eyelash extensions are super low maintenance, you can look super hot with no makup.
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
                <Header inverted as='h3' style={{fontFamily: 'Arima Madurai'}}content='Contact Janessa' />
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
                <Header style={{fontFamily: 'Arima Madurai'}}as='h3' inverted>Book an appointment today!</Header>
                <p>I have weekend and evening appointments available. Message me for details!</p>
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
    paddingTop: '20px'
  },
  secondaryHeaders: {
    fontFamily: 'Arima Madurai',
    fontSize: '35px'
  }
}
export default Home;
