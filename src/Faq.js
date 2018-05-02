import React from 'react';
import { Header, Segment, Divider, Container } from 'semantic-ui-react';
import { Link } from 'react-router-dom';


class Faq extends React.Component {
  render() {
    return (
      <Container style={{ fontFamily: 'Arsenal', fontSize: '18px' }}>
        <Header as="h1" style={styles.pageHeaders}> FAQ's</Header>
          <Header as="h1" style={styles.secondaryHeaders}>How long do eyelash extensions last?</Header>
          <p>Depends on the person</p>
          <br />
          <Header as="h1" style={styles.secondaryHeaders}>How long does it take to apply eyelash extensions?</Header>
          <p>Depends on the person</p>
          <br />
          <Header as="h1" style={styles.secondaryHeaders}>Will eyelash extensions harm my natural eyelashes?</Header>
          <p>Depends on the person</p>
          <br />
          <Header as="h1" style={styles.secondaryHeaders}>How often will I need to get my eyelash extensions filled?</Header>
          <p>Depends on the person</p>
          <br />
          <Header as="h1" style={styles.secondaryHeaders}>How do I prepare for my eyelash extension appointment?</Header>
          <p>Depends on the person</p>
          <br />
          <Header as="h1" style={styles.secondaryHeaders}>What is the difference between Classic and Volume eyelash extensions?</Header>
          <p>Depends on the person</p>
          <br />
          <Header as="h1" style={styles.secondaryHeaders}>How do I take care of my eyelash extensions?</Header>
          <p>See my <Link to='./aftercare'>after care</Link> page</p>
          <br />
          <Header as="h1" style={styles.secondaryHeaders}>What is a lash lift?</Header>
          <p>Depends on the person</p>
          <br />
          <Header as="h1" style={styles.secondaryHeaders}>How long does a lash lift last?</Header>
          <p>Depends on the person</p>
          <br />
      </Container>
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
  }
}


export default Faq;
