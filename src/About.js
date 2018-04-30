import React from 'react';
import { Card, Image, Header } from 'semantic-ui-react';
import ImageZoom from 'react-medium-image-zoom';

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
  },
  headers: {
    fontFamily: 'Great Vibes',
    fontSize: '45px'
  },
  cardHeaders: {
    fontFamily: '',
    fontSize: '30px'
  }
}


export default About;
