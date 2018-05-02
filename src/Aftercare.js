import React from 'react';
import { Header, Image, Grid, Button, Segment, List } from 'semantic-ui-react';




class Aftercare extends React.Component {
  render() {
    return (
      <div style={{ padding:'20px'}}>
        <Header as="h1" style={styles.pageHeaders}> After Care </Header>
          <Segment style={{ padding: '5em 2em' }} vertical>
          <Grid container stackable verticalAlign='middle'>
            <Grid.Row>

              <Grid.Column floated="left" style={{fontFamily: 'Arsenal'}} width={8}>
                <Segment>
                <Header as='h3' style={styles.secondaryHeaders}>Do's</Header>
                <List bulleted style={{ fontSize: '1.33em' }}>
                  <List.Item>Do gently brush your lashes daily with a lash wand</List.Item>
                  <List.Item>Do use an eyelash sealant instead of mascara to darken them after applying makeup. I recommend Black Diamond</List.Item>
                  <List.Item>Do be gentle around the eyes when removing makeup</List.Item>
                  <List.Item>Do try to avoid water( letting your face run under the shower, fully submerging in a pool, etc.). Keep them as dry as possible! </List.Item>
                </List>
                <Header as='h3' style={styles.secondaryHeaders}>Dont's</Header>
                <List bulleted style={{ fontSize: '1.33em' }}>
                  <List.Item>Don't get your lashes wet for 24 hours after application</List.Item>
                  <List.Item>Don't rub your eyes, pick, or pull off your new lashes</List.Item>
                  <List.Item>Don't use any makeup remover products that are oil-based</List.Item>
                  <List.Item>ss</List.Item>
                </List>
              </Segment>
              </Grid.Column>
              <Grid.Column  width={6}>
                <Image
                  bordered
                  rounded
                  size='large'
                  src='../images/IMG_0068.jpeg'
                />
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
