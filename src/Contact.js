import React from 'react';
import { Grid, Header, Segment, Image } from 'semantic-ui-react';


class Contact extends React.Component {
  render() {
    return (
      <div >
        <Header as="h1" style={styles.pageHeaders}> Contact </Header>
          <Segment style={{ padding: '2em 5em' }} vertical>
          <Grid container stackable verticalAlign='middle'>
            <Grid.Row>
              <Grid.Column  width={6}>
                <Image
                  bordered
                  rounded
                  size='large'
                  src='../images/IMG_0068.jpeg'
                />
              </Grid.Column>
              <Grid.Column floated="right" style={{fontFamily: 'Arsenal'}} width={8}>
                <Segment>
                <Header as='h3' style={{ fontSize: '2em' }}>Address</Header>
                <p style={{ fontSize: '1.33em' }}>
                  <p>Image Studios Sandy</p>
                  10691 S State Street, #107
                  <p>Sandy, Utah 84070</p>
                </p>
                <Header as='h3' style={{ fontSize: '2em' }}>Phone</Header>
                <p style={{ fontSize: '1.33em' }}>
                  (801) 688-6823
                </p>
                <Header as='h3' style={{ fontSize: '2em' }}>Email</Header>
                <p style={{ fontSize: '1.33em' }}>
                  nessablueeyes7@hotmail.com
                </p>
                <Header as='h3' style={{ fontSize: '2em' }}>Hours</Header>
                <p style={{ fontSize: '1.33em' }}>
                  By Appointment Only. I offer weekend and night appointments.Text me for more info.
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

export default Contact;
