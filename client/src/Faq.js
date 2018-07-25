import React from 'react';
import { Header, Segment, Divider, Image, Card } from 'semantic-ui-react';
import { Link } from 'react-router-dom';


class Faq extends React.Component {
  render() {
    return (
      <div className="background">
        <Header as="h1" style={styles.pageHeaders}> FAQ's</Header>
        <Segment style={{ fontFamily: 'Arsenal', fontSize: '18px', margin: '50px', marginTop: '20px'}}>
            <Header as="h1" style={styles.secondaryHeaders}>How long do eyelash extensions last?</Header>
            <p>Eyelash extensions can last between 2-4 weeks and then need to be filled. It depends on preference of lash style, your own lash cycle, and how well you take care of them in between appointments.</p>
            <Divider />
            <Header as="h1" style={styles.secondaryHeaders}>How long does it take to apply eyelash extensions?</Header>
            <p>Full sets take about 90 minutes and fills are about 1 hour.</p>
            <Divider />
            <Header as="h1" style={styles.secondaryHeaders}>Will eyelash extensions harm my natural eyelashes?</Header>
              <p>No, eyelash extensions will not harm your natural lashes as long as they aren't picked or rubbed. They are applied individually and just grow out and shed with
                your natural lashes. See image below.
              </p>
            <Divider />
            <Header as="h1" style={styles.secondaryHeaders}>How do I prepare for my eyelash extension appointment?</Header>
            <p>Come with a clean face and clean lashes.</p>
            <Divider />
            <Header as="h1" style={styles.secondaryHeaders}>What is the difference between Classic and Volume eyelash extensions?</Header>
              <p>Classic lashes have a 1 extension to 1 natural lash application process. They are great for people who want a natural
                look and have plenty of natural lashes. Volume lashes are a fan of multiple lighter weight lashes that are applied to one natural lash.
                They give you a much more dramatic and full look. See image below.
              </p>
            <Divider />
            <Header as="h1" style={styles.secondaryHeaders}>How do I take care of my eyelash extensions?</Header>
            <p>See my <Link to='./aftercare' style={{color:'rgb(170, 73, 203)'}}>AFTER CARE</Link> page</p>
            <Divider />
            <Header as="h1" style={styles.secondaryHeaders}>What is a lash lift?</Header>
            <p>A lash lift is like a perm for your lashes providing some curl! Lash lifts are great for clients not wanting extensions but still want to open up their eyes.</p>
            <Divider />
            <Header as="h1" style={styles.secondaryHeaders}>How long does a lash lift last?</Header>
            <p>6-8 weeks</p>
        </Segment>
        <Card.Group stackable centered itemsPerRow={4} style={{margin: '20px', fontSize:'1.33em'}}>
          <Card>
            <Card.Content textAlign="center">
              <Image style={{marginBottom: '10px'}} src="./images/repair4.JPG"/>
              <Card.Description style={{fontFamily: 'arsenal', fontSize:'18px'}}>
                This is an example of a client who has had lashes removed after having them on for years. Her natural lashes remain full and healthy.
              </Card.Description>
            </Card.Content>
          </Card>
          <Card>
            <Card.Content textAlign="center">
              <Image style={{marginBottom: '10px'}} src="./images/classicvsvolume.JPG"/>
              <Card.Description style={{fontFamily: 'arsenal', fontSize:'18px'}}>
                This is an example of Classic Lashes (top) vs Volume Lashes (bottom).
              </Card.Description>
            </Card.Content>
          </Card>
        </Card.Group>
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
    fontSize: '20px'
  },
  cardHeaders: {
    fontFamily: 'Arima Madurai',
    fontSize: '30px',
    textAlign: 'center'
  }
}


export default Faq;
