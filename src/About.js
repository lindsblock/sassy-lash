import React from 'react';
import { Card, Image, Header, Embed } from 'semantic-ui-react';

class About extends React.Component {

  render() {
    return (
      <div >
        <Header as="h1" style={styles.pageHeaders}> About Janessa</Header>

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
  headers: {
    fontFamily: 'Great Vibes',
    fontSize: '45px'
  }
}


export default About;
