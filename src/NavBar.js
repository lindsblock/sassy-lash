import React from 'react';
import { Link } from 'react-router-dom';
import { Header, Segment, Button, Divider, Container, Grid, Icon, Image } from 'semantic-ui-react';

class NavBar extends React.Component {

  render() {
    return (
      <div>
        <Segment textAlign="center" style={{
          backgroundImage:`url(https://images.pexels.com/photos/751374/pexels-photo-751374.jpeg?cs=srgb&dl=blur-bokeh-bright-751374.jpg&fm=jpg)`,
          backgroundSize: " cover ",
          backgroundRepeat: 'no-repeat',
          minHeight: 300,
          backgroundPosition: 'center'
        }} vertical>
          <Header as="h1" style={{ paddingTop: '100px', fontFamily:'Satisfy'}}>Sassy Lash & Esthetics</Header>
        </Segment>

        <Container>
          <Grid computer={6} tablet={3} mobile={1} divided centered>
            <Grid.Row  centered style={{marginTop:"15px" }}>
              <Grid.Column style={{width: '125px'}}>
              <Link to='/'  centered style={{display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                 <Header verticalAlign="center"  as="h3" style={{fontFamily: 'Arsenal'}}>Home</Header>
              </Link>
              </Grid.Column>
              <Grid.Column style={{width: '125px'}}>
              <Link to='/services' centered style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                 <Header as="h3" as="h3" textAlign="center" style={{fontFamily: 'Arsenal'}}>Services & Pricing</Header>
              </Link>
              </Grid.Column>
              <Grid.Column style={{width: '125px'}}>
              <Link to='/photos' centered style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
               <Header textAlign='center' as="h3" as="h3" style={{fontFamily: 'Arsenal'}}>Photo Gallery</Header>
              </Link>
              </Grid.Column>
              <Grid.Column style={{width: '125px'}}>
              <Link to='/about' centered style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                 <Header textAlign='center' as="h3" as="h3" style={{fontFamily: 'Arsenal'}}>About Janessa</Header>
              </Link>
              </Grid.Column>
              <Grid.Column style={{width: '125px'}}>
              <Link to='/contact' centered style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                 <Header textAlign='center' as="h3" as="h3" style={{fontFamily: 'Arsenal'}}>Contact</Header>
              </Link>
              </Grid.Column>
            </Grid.Row>
            <Divider />
          </Grid>
        </Container>

    </div>
    )
  }
}

export default NavBar;
