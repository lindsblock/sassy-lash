import React from 'react';
import { Card, Image, Header, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class Policies extends React.Component {
  render() {
    return (
      <div >
        <Header as="h1" style={styles.pageHeaders}> Policies</Header>
        <Header as="h1" style={styles.secondaryHeaders}>Cancellations</Header>
        <Header as="h1" style={styles.secondaryHeaders}>No Shows</Header>
        <Link to='./consent'>
          <Button>Sign Consent Form</Button>
        </Link>
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


export default Policies;
