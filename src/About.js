import React from 'react';
import { Image, Header, Segment, Grid } from 'semantic-ui-react';

class About extends React.Component {

  render() {
    return (
      <div className="background">
        <Header as="h1" style={styles.pageHeaders}> About Janessa</Header>
        <Segment style={{ padding: '2em 2em' }} vertical>
        <Grid container stackable verticalAlign='middle'>
          <Grid.Row>
            <Grid.Column  width={6}>
              <Image
                bordered
                rounded
                size='medium'
                src='../images/bio.JPG'
              />
            </Grid.Column>
            <Grid.Column floated="left" style={{fontFamily: 'Arsenal'}} width={10}>
              <Segment style={{fontSize: '20px'}}>
                <p>Hi! I'm Janessa! I've been a lash artist and esthetician since 2011. I went to Elase Academy which is now known
                  as NIMA. I took a lash course in school mostly just to add it to my resume. I hated it at first and had you told
                  me then that I would end up doing lashes full time I would have laughed at you! I did lashes on the side on friends
                  and family until I graduated. I then got hired on at a lash studio and worked there full time for a few years. I then
                  went off on my own and opened up my own lash business and have been doing that ever since! Since I graduated school I
                  still take courses and trainings to keep up to date on techniques and keep my skills sharp.</p>
                <p>When I'm not working I enjoy spending time with my family and friends doing things outside like hiking, camping and biking.
                  I also love animals, shopping and sugar!</p>
                <p>I'm always down for an adventure and love trying new things.</p>
            </Segment>
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
  headers: {
    fontFamily: 'Great Vibes',
    fontSize: '45px'
  }
}


export default About;
