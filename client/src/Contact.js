import React from 'react';
import { Grid, Header, Segment, Image, Button, Divider } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class Contact extends React.Component {

  render() {
    return (
      <div className="background">
        <Header as="h1" style={styles.pageHeaders}> Contact </Header>
          <Segment style={{ padding: '2em 2em' }} vertical>
          <Grid container stackable verticalAlign='middle'>
            <Grid.Row>
              <Grid.Column  width={6}>
                <Image
                  bordered
                  rounded
                  size='large'
                  src='../images/salon2.JPG'
                />
                <Divider hidden />
                <Image
                  bordered
                  rounded
                  size='large'
                  src='../images/salon1.JPG'
                />
                <Divider hidden />
              </Grid.Column>
              <Grid.Column floated="right" style={{fontFamily: 'Arsenal'}} width={8}>
                <Segment>
                <Header as='h3' style={styles.secondaryHeaders}>Address</Header>
                <div>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3031.286692348012!2d-111.89259208519414!3d40.55734577934901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x875287b84be435a1%3A0x10f2dbed158e5c79!2sImage+Studios+360+Sandy!5e0!3m2!1sen!2sus!4v1525908487567"
                    width="100%"
                    height="250"
                    frameBorder="0"
                    allowFullScreen
                  >
                  </iframe>
                </div>
                  <p style={{ fontSize: '1.33em' }}>Image Studios 360 Sandy</p>
                  <p style={{ fontSize: '1.33em' }}>10691 S State Street, #107</p>
                  <p style={{ fontSize: '1.33em' }}>Sandy, Utah 84070</p>
                <Header as='h3' style={styles.secondaryHeaders}>Phone</Header>
                <p style={{ fontSize: '1.33em' }}>
                  (801) 688-6823
                </p>
                <p style={{ fontSize: '1.33em' }}>
                  * The best way to get ahold of me for an appointment is through text.
                </p>
                <Header as='h3' style={styles.secondaryHeaders}>Email</Header>
                <p style={{ fontSize: '1.33em' }}>
                  nessablueeyes7@hotmail.com
                </p>
                <Header as='h3' style={styles.secondaryHeaders}>Hours</Header>
                <p style={{ fontSize: '1.33em' }}>
                  By Appointment Only. I offer weekend and night appointments.Text me for more info.
                </p>
                  <Header as='h3' style={styles.secondaryHeaders}>Find Me On Facebook & Instagram</Header>
                  <a href="https://www.facebook.com/sassylash7/" >
                    <Button circular color='facebook' icon='facebook' />
                  </a>
                  <a href="https://www.instagram.com/sassylash7/">
                    <Button circular color='purple' icon='instagram' />
                  </a>
                <Divider hidden />
                <p style={{ fontSize: '1.33em' }}> Please view my policies and sign my consent form before your appointment
                <Link to='./policies' style={{ fontSize: '1em', color:'rgb(122, 122, 122)'}}> HERE.</Link>
                </p>
              </Segment>
              </Grid.Column>
            </Grid.Row>
          </Grid>
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
    fontSize: '2em'
  }
}

export default Contact;
