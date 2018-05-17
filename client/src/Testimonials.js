import React from 'react';
import { Image, Header, Segment, Container, Button, Divider, Form, Card, Grid } from 'semantic-ui-react';
import axios from 'axios';

class Testimonials extends React.Component {
  state = {
    testimonials: [{
      name: '',
      comment: '',
    }]
  }

  componentDidMount = () => {
    axios.get('api/testimonials')
    .then( res => this.setState({ testimonials: res.data }) )
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    axios.post('api/testimonials', {...this.state })
    .then( () => {
      axios.get('api/testimonials')
    .then( res => this.setState({ testimonials: res.data, showForm: false, name: '', comment: '' }) )
    })
  }

  toggleForm = () => {
    this.setState( state => {
      return { showForm: !state.showForm }
    });
  }

  render() {
    const { name, comment, showForm } = this.state;
    const { testimonials } = this.state;
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
               { testimonials.map( t =>
             <p key={t.id}>"{t.comment}" ~ {t.name} <Divider /> </p>
               )}
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

// const mapStateToProps = (state) => {
//   return { testimonials: state.testimonials }
// }


export default Testimonials;
