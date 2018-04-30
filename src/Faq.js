import React from 'react';
import { Header } from 'semantic-ui-react';


class Faq extends React.Component {
  render() {
    return (
      <div >
        <Header as="h1" style={styles.pageHeaders}> FAQ's</Header>
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

export default Faq;
