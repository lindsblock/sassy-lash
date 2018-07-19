import React from 'react';
import { Header, Image, Grid, Segment, List } from 'semantic-ui-react';
import Slider from "react-slick";

class Aftercare extends React.Component {

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
        <Header as="h1" style={styles.pageHeaders}> After Care </Header>
          <Segment style={{ padding: '2em 2em' }} vertical>
          <Grid container stackable>
            <Grid.Row verticalAlign="middle">
              <Grid.Column floated="left" style={{fontFamily: 'Arsenal'}} width={8}>
                <Segment>
                <Header as='h3' style={styles.secondaryHeaders}>Do's</Header>
                <List bulleted style={{ fontSize: '1.33em' }}>
                  <List.Item>Do gently brush your lashes daily with a lash wand.</List.Item>
                  <List.Item>Do use an eyelash sealant instead of mascara to darken them after applying makeup. I recommend something like Black Diamond and I have some for sale in my salon. </List.Item>
                  <List.Item>Do be gentle around the eyes when removing makeup.</List.Item>
                  <List.Item>Do try to avoid water( letting your face run under the shower, fully submerging in a pool, etc.). Keep them as dry as possible! </List.Item>
                  <List.Item>Do clean your lashes. The easiest way is using a foaming cleanser that I have available for sale in my salon. Or you can use any oil free makeup remover. It is best to clean them 1-2x/wk and also make sure they are clean prior to your appointments. </List.Item>
                </List>
                <Header as='h3' style={styles.secondaryHeaders}>Dont's</Header>
                <List bulleted style={{ fontSize: '1.33em' }}>
                  <List.Item>Don't get your lashes wet for 24 hours after application.</List.Item>
                  <List.Item>Don't use mascara on your eyelash extensions. It is ok to use it on your bottom lashes.</List.Item>
                  <List.Item>Don't curl your lashes with an eyelash curler.</List.Item>
                  <List.Item>Don't rub your eyes, pick, or pull off your new lashes. The less you touch them the longer they will last!</List.Item>
                  <List.Item>Don't use any makeup remover or products that are oil-based.</List.Item>
                  <List.Item>Don't sleep with your lashes touching your pillow. Try to stay off of the side of your face.</List.Item>
                </List>
              </Segment>
              </Grid.Column>
              <Grid.Column width={6}>
                <Slider {...settings}>
                  <div>
                  <Image
                    centered
                    bordered
                    rounded
                    size='large'
                    src='../images/aftercare.JPG'
                  />
                </div>
                  <div>
                  <Image
                    bordered
                    centered
                    rounded
                    size='large'
                    src='../images/aftercare2.jpg'
                  />
                </div>
                  <div>
                  <Image
                    bordered
                    centered
                    rounded
                    size='large'
                    src='../images/aftercare3.jpg'
                  />
                </div>
                </Slider>
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

export default Aftercare;
