import React from 'react';
import { Header, Segment, Divider } from 'semantic-ui-react';
import { Link } from 'react-router-dom';


class Faq extends React.Component {
  render() {
    return (
      <div className="background">
        <Header as="h1" style={styles.pageHeaders}> FAQ's</Header>
        <Segment style={{ fontFamily: 'Arsenal', fontSize: '18px', margin: '100px', marginTop: '20px'}}>
            <Header as="h1" style={styles.secondaryHeaders}>How long do eyelash extensions last?</Header>
            <p>They can last between 2-4 weeks and then need to be filled. It depends on preference of lash style, lash cycles and after care.</p>
            <Divider />
            <Header as="h1" style={styles.secondaryHeaders}>How long does it take to apply eyelash extensions?</Header>
            <p>Full sets take about 90 min and fills are 60 min</p>
            <Divider />
            <Header as="h1" style={styles.secondaryHeaders}>Will eyelash extensions harm my natural eyelashes?</Header>
            <p>No as long as they aren't picked or rubbed. They are applied individually and just grow out with your natural lashes.</p>
            <Divider />
            <Header as="h1" style={styles.secondaryHeaders}>How do I prepare for my eyelash extension appointment?</Header>
            <p>Come with a clean face and clean lashes.</p>
            <Divider />
            <Header as="h1" style={styles.secondaryHeaders}>What is the difference between Classic and Volume eyelash extensions?</Header>
            <p>Classic lashes have a 1 extension to 1 natural lash application process. They are great for people who want a natural look and have plenty of natural lashes. Volume lashes are a fan of lighter weight lashes that are applied to the natural lash. They give you a much more dramatic look. </p>
            <Divider />
            <Header as="h1" style={styles.secondaryHeaders}>How do I take care of my eyelash extensions?</Header>
            <p>See my <Link to='./aftercare'>after care</Link> page</p>
            <Divider />
            <Header as="h1" style={styles.secondaryHeaders}>What is a lash lift?</Header>
            <p>It's basically a perm for your lashes. A lash lift gives a curl to your natural lashes for weeks!</p>
            <Divider />
            <Header as="h1" style={styles.secondaryHeaders}>How long does a lash lift last?</Header>
            <p>6-8 weeks</p>
            <Divider />
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
    fontSize: '20px'
  }
}


export default Faq;
