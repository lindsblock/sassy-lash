import React from 'react';
import { Image, Header, Segment, Container, Button, Divider, Form } from 'semantic-ui-react';
import axios from 'axios';

class Testimonials extends React.Component {
  state = {
    name: '',
    comment: '',
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    axios.post('api/testimonials/create', {...this.state })
    .then( () => {
      this.setState({ name: '', comment:'', showForm: false })
    })
  }

  toggleForm = () => {
    this.setState( state => {
      return { showForm: !state.showForm }
    });
  }

  render() {
    const { name, comment, showForm } = this.state;
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
        <Divider hidden/>
        <Container textAlign='center'>
          <Button color='black' style={{fontFamily:'Arsenal'}} onClick={this.toggleForm}>{ showForm ? "Cancel" : "Leave A Testimonial" }</Button>
          { showForm ?
            <Segment style={{ margin: '50px'}}>
              <Form onSubmit={this.handleSubmit} style={{fontFamily:'Arsenal', fontSize: '18px'}}>
                <Form.Input
                  name="name"
                  required
                  value={name}
                  onChange={this.handleChange}
                  label="Name"
                />
                <Form.TextArea
                  name="comment"
                  required
                  value={comment}
                  onChange={this.handleChange}
                  label="Comment"
                />
                <Button style={{ fontFamily: 'Arsenal'}}>Submit</Button>
              </Form>
            </Segment>
          :
          <div>
            <Segment textAlign="left" style={{ margin: '50px'}}>
            <p>{name.map}</p>
            <p>"janessa is the best!" ~ Lindsay B. </p>
             <Divider />
             <p>"janessa is the best!" ~ Lindsay B. </p>
              <Divider />
            <p>"janessa is the best!" ~ Lindsay B. </p>
            </Segment>
          </div>
        }
        </Container>
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
