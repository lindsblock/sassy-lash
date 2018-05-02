import React from 'react';
import { Card, Image, Header, Embed } from 'semantic-ui-react';

class Consent extends React.Component {

  render() {
    return (
      <div >
        <Header as="h1" style={styles.pageHeaders}> Consent Form</Header>

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


export default Consent;
