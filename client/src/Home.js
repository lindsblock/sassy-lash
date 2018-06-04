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
        <Container>
          <Header as="h1" style={styles.pageHeaders}>Professional Eyelash Extensions</Header>
        </Container>
          <Image centered size="medium" src='../images/elegant3.png'/>
          <Segment  style={{ padding: '0em 2em', paddingBottom:'100px' }} vertical>
            <Grid container stackable >
              <Grid.Row verticalAlign="middle">
                <Grid.Column style={{fontFamily: 'Arsenal'}} width={9}>
                  <Segment style={{ margin: '1px'}}>
                  <Header as='h3' textAlign="center" style={styles.secondaryHeaders}>Boost Your Confidence With Eyelash Extensions!</Header>
                    <p style={{ fontSize: '1.33em' }}>
                      If you are tired of spending so much time putting make up on in the morning and dealing
                      with mascara then lash extensions are a great solution!!
                      Wake up feeling beautiful before you even put any makeup on! Feel pretty while on vacation
                      playing in the water, or at the gym before you get ready!
                      Be picture ready always! Lash extensions make your eyes pop like no mascara can!.
                    </p>
                  <Header as='h3' textAlign="center" style={styles.secondaryHeaders}>Why Choose Sassy Lash?</Header>
                    <p style={{ fontSize: '1.33em' }}>
                      I'm passionate about not only helping women feel more confident and beautiful
                      but also keeping your natural lashes healthy and strong!
                       It's not just about applying extensions but making each set of eyes a masterpiece!
                    </p>
                  </Segment>
                </Grid.Column>
                <Grid.Column floated='right' width={6}>
                  <Image
                    centered
                    bordered
                    rounded
                    size='medium'
                    src='../images/volume8.JPG'
                  />
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Segment>
        <Segment inverted vertical style={{ padding: '2em',backgroundColor: "rgb(156, 156, 156)", fontFamily: 'Arsenal' }}>
          <Container>
            <Grid inverted stackable>
              <Grid.Row>
                <Grid.Column width={5}>
                  <Link to='./contact'>
                    <Header inverted as='h3' style={{fontFamily: 'Arima Madurai'}}content='Contact Janessa' />
                  </Link>
                  <div>
                    <p>(801) 688-6823</p>
                    <p>10691 S State Street, #107<br />Sandy, Utah 84070</p>
                    <div  relaxed="true" columns={3}>
                      <a href="https://www.facebook.com/sassylash7/" >
                      <Button circular color='facebook' icon='facebook' />
                      </a>
                      <a href="https://www.instagram.com/sassylash7/">
                        <Button circular color='purple' icon='instagram' />
                      </a>
                    </div>
                  </div>
                </Grid.Column>
                <Grid.Column width={11}  verticalAlign="middle">
                  <Link to='./testimonials'>
                    <Header style={{fontFamily: 'Arima Madurai'}}as='h3' inverted>Testimonials</Header>
                  </Link>
                    <Slider {...settings}>
                      <div style={{marginLeft: '90px'}}>
                        <h3 style={{fontFamily: 'Arsenal'}}>"Janessa has been doing my lashes for years now. She is simply the best there is and I wouldn't go anywhere else!" ~ Lindsay B. </h3>
                      </div>
                      <div>
                        <h3 style={{fontFamily: 'Arsenal'}}>"If you want precision and natural looking lashes you must go to Sassy Lash!" ~ Debbie W. </h3>
                      </div>
                      <div>
                        <h3 style={{fontFamily: 'Arsenal'}}>"Janessa is amazing at what she does. I have been to multiple lash artist and can't help but keep going back to her. She does them so perfect and they last a lot longer then most!" ~ Vanessa F.</h3>
                      </div>
                      <div>
                        <h3 style={{fontFamily: 'Arsenal'}}>"I have had my lashes for a couple of weeks now and hands done she is the best in the business. They feel natural and have lasted! I am very impressed!" ~ Nicole S.</h3>
                      </div>
                      <div>
                        <h3 style={{fontFamily: 'Arsenal'}}>"AMAZING! Thank you Janessa for beautiful waxed and tinted brows! You do a wonderful job!" ~ JaNae N.</h3>
                      </div>
                    </Slider>
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
    paddingTop: '20px',
  },
  secondaryHeaders: {
    fontFamily: 'Arima Madurai',
    fontSize: '35px'
  }
}
export default Home;
