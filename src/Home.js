import React from 'react';
import { Header, Segment, Button, Container, Grid, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";

class Home extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div className="background">
          <Header as="h1" style={styles.pageHeaders}>Professional Eyelash Extensions</Header>
          <Segment style={{ padding: '2em 2em' }} vertical>
            <Grid container stackable >
              <Grid.Row>
                <Grid.Column style={{fontFamily: 'Arsenal'}} width={9}>
                  <Image size='medium' centered src='../images/elegant.png'/>
                  <Segment style={{ margin: '1px'}}>
                  <Header as='h3' textAlign="center" style={styles.secondaryHeaders}>Why Choose Sassy Lash?</Header>
                    <p style={{ fontSize: '1.33em' }}>
                      Janessa has been doing lashes for years bla bla bla. This is where we have a long paragraph talking about how wonderful eyelash extensions are and how you look way better with them because without them you are ugly.
                    </p>
                  <Header as='h3' textAlign="center" style={styles.secondaryHeaders}>Boost Your Confidence!</Header>
                    <p style={{ fontSize: '1.33em' }}>
                      Janessa has been doing lashes for years bla bla bla. This is where we have a long paragraph talking about how wonderful eyelash extensions are and how you look way better with them because without them you are ugly.
                    </p>
                  </Segment>
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
        <Segment inverted vertical style={{ padding: '2em 0em',backgroundColor: "rgb(116, 116, 116)", fontFamily: 'Arsenal' }}>
          <Container>
            <Grid divided inverted stackable>
              <Grid.Row>
                <Grid.Column width={5}>
                  <Link to='./contact'>
                    <Header inverted as='h3' style={{fontFamily: 'Arima Madurai'}}content='Contact Janessa' />
                  </Link>
                  <div>
                    <p>(801) 688-6823</p>
                    <p>10691 S State Street, #107<br />Sandy, Utah 84070</p>
                    <div textAlign='center' relaxed columns={3}>
                      <a href="https://www.facebook.com/sassylash7/" >
                      <Button circular color='facebook' icon='facebook' />
                      </a>
                      <a href="https://www.instagram.com/sassylash7/">
                        <Button circular color='purple' icon='instagram' />
                      </a>
                    </div>
                  </div>
                </Grid.Column>
                <Grid.Column width={10} verticalAlign="middle">
                  <Link to='./testimonials'>
                    <Header style={{fontFamily: 'Arima Madurai'}}as='h3' inverted>Testimonials</Header>
                  </Link>
                    <Slider {...settings}>
                      <div>
                        <h3 style={{fontFamily: 'Arsenal'}}>"Janessa has been doing my lashes for years now. She is simply the best there is and I wouldn't go anywhere else!" - Lindsay B. </h3>
                      </div>
                      <div>
                        <h3 style={{fontFamily: 'Arsenal'}}>"If you want precision and natural looking lashes you must go to Sassy Lash!" - Debbie W. </h3>
                      </div>
                      <div>
                        <h3 style={{fontFamily: 'Arsenal'}}>3</h3>
                      </div>
                      <div>
                        <h3 style={{fontFamily: 'Arsenal'}}>4</h3>
                      </div>
                      <div>
                        <h3 style={{fontFamily: 'Arsenal'}}>5</h3>
                      </div>
                      <div>
                        <h3 style={{fontFamily: 'Arsenal'}}>6</h3>
                      </div>
                    </Slider>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </Segment>
      {/* </Segment> */}
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
