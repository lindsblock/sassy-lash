import React from 'react';
import { Image, Header, Segment, Container, Button, Divider, Form } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class Testimonials extends React.Component {
  state = {
    name: ''
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ name: ''})
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value })
  }

  render() {
    const { name } = this.state;
    return (
      <div className="background">
        <Header as="h1" style={styles.pageHeaders}> Testimonials</Header>
        <Container textAlign='center'>
          <Image.Group>
        <Image
          circular
          bordered
          centered
          size="small"
          src='../images/testimonial.jpg'
        />
       <Image
          bordered
          circular
          centered
          size='small'
          src='../images/testimonial2.jpg'
        />
        <Image
          bordered
          circular
          centered
          size='small'
          src='../images/testimonial1.jpg'
        />
      </Image.Group>
      </Container>
        <Segment style={{ margin: '50px'}}>
          <p>{name.map}</p>
          <p>"janessa is the best!" ~ Lindsay B. </p>
          <Divider />
          <p>"janessa is the best!" ~ Lindsay B. </p>
          <Divider />
          <p>"janessa is the best!" ~ Lindsay B. </p>
        </Segment>
        <Header as="h1" textAlign="center" style={styles.secondaryHeaders}>Leave A Testimonial</Header>
        <Segment style={{ margin: '50px'}}>
          <Form onSubmit={this.handleSubmit} style={{fontFamily:'Arsenal', fontSize: '18px'}}>
             <Form.Input
                name="name"
                required
                //value={this.state.name}
              //  onChange={this.handleChange}
                label="Name"
              />
              <Form.TextArea
                name="comment"
                required
                //value={this.state.comment}
                //onChange={this.handleChange}
                label="Comment"
              />
              <Button style={{ fontFamily: 'Arsenal'}}>Submit</Button>
          </Form>
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
    fontSize: '35px'
  }
}


export default Testimonials;
