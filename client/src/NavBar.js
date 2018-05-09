import React from 'react';
import { Link } from 'react-router-dom';
import { Header, Segment, Container, Grid, Image } from 'semantic-ui-react';

class NavBar extends React.Component {

  render() {
    return (
      <div>
        <Segment textAlign="center" style={{
          backgroundImage:`url(https://images.pexels.com/photos/751374/pexels-photo-751374.jpeg?cs=srgb&dl=blur-bokeh-bright-751374.jpg&fm=jpg)`,
          backgroundSize: " cover ",
          backgroundRepeat: 'no-repeat',
          minHeight: 150,
          backgroundPosition: 'center'
        }} vertical>
          <Header style={{ padding: '3px', fontFamily:'Great Vibes', fontSize: '70px', marginTop: '23px'}}>Sassy Lash & Esthetics</Header>
          <Image centered src='./images/lashes3.png'/>
        </Segment>
        <Container>
          <Grid computer={6} tablet={3} mobile={1} divided centered>
            <Grid.Row  centered style={{marginTop:"15px" }}>
              <Grid.Column style={{width: '125px'}}>
              <Link to='/'  centered >
                   <Header as="h3" style={styles.navHeaders}>Home</Header>
              </Link>
              </Grid.Column>
              <Grid.Column style={{width: '125px'}}>
              <Link to='/services' centered >
                 <Header as="h3"  textAlign="center" style={styles.navHeaders}>Services & Pricing</Header>
              </Link>
              </Grid.Column>
              <Grid.Column style={{width: '125px'}}>
              <Link to='/photos' centered >
               <Header textAlign='center' as="h3"  style={styles.navHeaders}>Photo Gallery</Header>
              </Link>
              </Grid.Column>
              <Grid.Column style={{width: '125px'}}>
              <Link to='/faq' centered >
               <Header textAlign='center' as="h3"  style={styles.navHeaders}>FAQ</Header>
              </Link>
              </Grid.Column>
              <Grid.Column style={{width: '125px'}}>
              <Link to='/aftercare' centered >
               <Header textAlign='center' as="h3" style={styles.navHeaders}>After Care</Header>
              </Link>
              </Grid.Column>
              <Grid.Column style={{width: '125px'}}>
              <Link to='/testimonials' centered >
               <Header textAlign='center' as="h3" style={styles.navHeaders}>Testimonials</Header>
              </Link>
              </Grid.Column>
              <Grid.Column style={{width: '125px'}}>
              <Link to='/about' centered>
                 <Header textAlign='center' as="h3" style={styles.navHeaders}>About Janessa</Header>
              </Link>
              </Grid.Column>
              <Grid.Column style={{width: '125px'}}>
              <Link to='/policies' centered >
                 <Header textAlign='center' as="h3" style={styles.navHeaders}>Policies & Consent</Header>
              </Link>
              </Grid.Column>
              <Grid.Column style={{width: '125px'}}>
              <Link to='/contact' centered>
                 <Header textAlign='center' as="h3" style={styles.navHeaders}>Contact</Header>
              </Link>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>

    </div>
    )
  }
}

const styles = {
  navHeaders:{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontFamily: 'Arima Madurai',
    marginTop:'5px',
    marginBottom: '5px',
    color: 'rgb(99, 99, 99)'
  }
}

export default NavBar;
