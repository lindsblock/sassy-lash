import React from 'react';
import { Grid, Header, Segment, Image, Button, Icon, Divider } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import GoogleMapReact from 'google-map-react';

class Contact extends React.Component {
  static defaultProps = {
    center: {
      lat: 40.5573,
      lng: -111.8904
    },
    zoom: 16
  };


  render() {
    return (
      <div className="background">
        <Header as="h1" style={styles.pageHeaders}> Contact </Header>
          <Segment style={{ padding: '2em 5em' }} vertical>
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
                <div style={{ height: '40vh', width: '50%' }}>
                <GoogleMapReact
                  defaultCenter={this.props.center}
                  defaultZoom={this.props.zoom}
                >
                  <Icon marker
                    lat={40.5573}
                    lng={111.8904}
                    text={'Kreyser Avrora'}
                  />
                </GoogleMapReact>
              </div>
                <p style={{ fontSize: '1.33em' }}>
                  <p>Image Studios Sandy</p>
                  10691 S State Street, #107
                  <p>Sandy, Utah 84070</p>
                </p>
                <Header as='h3' style={styles.secondaryHeaders}>Phone</Header>
                <p style={{ fontSize: '1.33em' }}>
                  (801) 688-6823
                </p>
                <Header as='h3' style={styles.secondaryHeaders}>Email</Header>
                <p style={{ fontSize: '1.33em' }}>
                  nessablueeyes7@hotmail.com
                </p>
                <Header as='h3' style={styles.secondaryHeaders}>Hours</Header>
                <p style={{ fontSize: '1.33em' }}>
                  By Appointment Only. I offer weekend and night appointments.Text me for more info.
                </p>
                <div textAlign='center' relaxed columns={3}>
                  <a href="https://www.facebook.com/sassylash7/" >
                    <Button circular color='facebook' icon='facebook' />
                  </a>
                  <a href="https://www.instagram.com/sassylash7/">
                    <Button circular color='purple' icon='instagram' />
                  </a>
                </div>
                <Link to='./policies' style={{ fontSize: '1.33em'}}>View my policies</Link>
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
